
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
const Web3 = require("web3");
const fs = require('fs');
const path = require('path');
const web3 = new Web3();
const EthereumTx = require('ethereumjs-tx').Transaction;
const Buffer = require('safer-buffer').Buffer;
const cors = require('cors');

app.use(cors());
var engines = require('consolidate');
app.use('/api', router);
app.set('views', __dirname + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
var Web3EthAccounts = require('web3-eth-accounts');
var firebase = require('firebase')
app.use(bodyParser.urlencoded({ extended: true }), router)
app.use(bodyParser.json, router)
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(function (req, res, next) {
    console.log(req.body) // populated!
})

var firebaseConfig = {
    apiKey: "AIzaSyDPwR_Tlxe5MODIEPugWCnO_drEh6-4jjw",
    authDomain: "login-psu-final.firebaseapp.com",
    databaseURL: "https://login-psu-final.firebaseio.com",
    projectId: "login-psu-final",
    storageBucket: "login-psu-final.appspot.com",
    messagingSenderId: "152285332333",
    appId: "1:152285332333:web:bc428892887d5004"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

router.route('/')
    .get((req, res) => {
        res.render('PSULOGIN.html')
    })
    .post((req, res) => {
        soap.createClient(url, (err, client) => {
            if (err)
                console.error(err);
            else {
                let user = {}
                user.username = req.body.username
                user.password = req.body.password
                client.GetStaffDetails(user, (err, response) => {
                    if (response.GetStaffDetailsResult.string[0] == "") {
                        res.send('<script>alert("กรุณากรอกข้อมูลใหม่");</script>')
                        console.error(err);
                    }
                    else {
                        var account = new Web3EthAccounts('ws://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261');
                        var user_eth = account.create();
                        database.ref('users').child(user.username).once("value", snapshot => {
                            if (snapshot.exists()) { // check ว่ามีการสร้างแล้วหรือยัง
                                console.log('already exists')
                                // res.send('<script>alert("มีข้อมูลในระบบแล้ว");</script>');
                                res.redirect('/send/' + user.username)
                            } else { // หากยังไม่มีจะทำการสร้างกระเป๋า 
                                database.ref('users').child(user.username).push({
                                    address: user_eth.address,
                                    privateKey: user_eth.privateKey.substring(2).toUpperCase(),
                                    balance: 0,
                                }).then(() => {
                                    console.log('create new wallet')
                                    res.send({ user_eth, response });
                                    // res.redirect("/showdata)                 
                                }).catch(e => {
                                    console.log(e)
                                })
                            }
                        })
                    }
                });
            }
        });
    })

router.route('/send/:id')
    .get((req, res) => {
        res.render('testsend.html')
    })
router.route('/send/:id/confirm')
    .get((req, res) => {
        async function Tranfer() {
            console.log('xx: ', req.headers)
            const fromAddress = req.headers.fromaddress;
            const money = req.headers.money;
            const privateKey = req.headers.privatekey;

            console.log("fromAddress =>", fromAddress)
            console.log("money =>", money)
            console.log("privateKey =>", privateKey)

            const toAddress = await getReceiverWalletFromId(req.headers.toaddress)
            let toAddress2;
            toAddress.forEach(snap => { // ดึงค่าของผฦู้ที่ต้องการจะส่งไป
                toAddress2 = snap.val().address
                console.log("toAddress2 =>", toAddress2)
                // privateKey2 = snap.val().privateKey
                // console.log("privateKey2 =>",privateKey2)
            })

            web3.setProvider(new web3.providers.HttpProvider("https://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261"));
            var abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './abi.json'), 'utf-8'));
            var count = await web3.eth.getTransactionCount(fromAddress);
            var contractAddress = "0x0d01bc6041ac8f72e1e4b831714282f755012764";
            var contract = new web3.eth.Contract(abi, contractAddress, { from: fromAddress });
            var weiTokenAmount = web3.utils.toWei(String(money), 'ether');
            var Transaction = {
                "from": fromAddress,
                "nonce": "0x" + count.toString(16),
                "gasPrice": "0x003B9ACA00",
                "gasLimit": "0x250CA",//151754
                "to": contractAddress,
                "value": "0x0",
                "data": contract.methods.transfer(toAddress2, weiTokenAmount).encodeABI(),
                "chainId": 0x03
            };
            var privKey = Buffer.from(privateKey, 'hex');
            //   var privKey = Buffer.from('privateKey2', 'hex');
            console.log("privKey = > ", privKey);
            const tx = new EthereumTx(Transaction, { chain: 'kovan' });
            tx.sign(privKey);
            var serializedTx = tx.serialize();
            var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            return receipt
            //   database.ref('users').child(id).push({
            //     balance : money
            // }).then(() => {
            //     console.log('Push balance')
            //     // res.send({user_eth,response});              
            //     // res.redirect("/showdata)                 
            // }).catch(e => {
            //     console.log(e)
            // })

        }

        Tranfer().then((result) => {
            console.log(result)
        })

    })

router.route('/showdata')
    .get((req, res) => {
        res.render('test1.html')
        var leadsRef = database.ref('users');
        leadsRef.on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var childData = childSnapshot.val();
                console.log(childData)
            });
        });
    })



router.route('/balance/:id')
    .get((req, res) => {
        res.render('balance.html')
    })
router.route('/balance/:id/confirm')
    .get((req, res) => {
        // var web3;
        web3.setProvider(new web3.providers.HttpProvider("https://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261"));
        function getERC20TokenBalance(tokenAddress, walletAddress, callback) {
            // let minABI = [
            //     { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" },
            //     { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }
            // ];
            var minABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, './abi.json'), 'utf-8'));
            let contract = new web3.eth.Contract(minABI, tokenAddress);
            contract.methods.balanceOf(walletAddress).call((error, balance) => {
                contract.methods.decimals().call((error, decimals) => {
                    balance = balance / (10 ** decimals);
                    console.log("decimals => ", decimals);
                    console.log("balance => ", balance, "PSU");
                    callback(balance);
                }).then(() => {
                    console.log('complete_check_balance')
                }).catch(e => {
                    console.log(e)
                });
            });
        }
        function onAddressChange(e) {
            const walletAddress = req.headers.fromaddress;
            let tokenAddress = "0x0d01bc6041ac8f72e1e4b831714282f755012764";
            console.log("walletAddress =>", walletAddress)
            console.log("tokenAddress =>", tokenAddress)
            if (tokenAddress != "" && walletAddress != "") {
                getERC20TokenBalance(tokenAddress, walletAddress, (balance) => {
                    // console.log(getERC20TokenBalance)
                    // document.getElementById('result').innerText = balance.toString();
                })
            }
        }
        onAddressChange((resolve, reject) => {
            resolve(balance)
        })
    })


router.route('/getWalletById') // ดึงค่าจาก ฝั่ง front end ทีส่งค่ามา ทำงานในฟังกืช์่นนี้ เอามาใส่ในช่อง
    .get((req, res) => {
        const id = req.headers.id; // รหัสนักศึกษา ผู้ส่ง
        console.log("get", id)
        database.ref('users').child(id).once("value", snapshot => {
            snapshot.forEach(snap => {
                res.send(JSON.stringify({
                    address: snap.val().address,
                    privateKey: snap.val().privateKey
                }))
            })
        })
    })

async function getReceiverWalletFromId(id) {
    return await database.ref('users').child(id).once("value")
    // console.log("getReceiverWalletFromId = >",id)
}


app.listen(8000, () => console.log('Server is ready!'))


// 791786F6D865B4FAFAC0E92A5961D0526AF0072EFA757D5E46E59A69EF63FF70