
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
const cors=require('cors');

app.use(cors());
var engines = require('consolidate');
app.use('/api', router); 
app.set('views', __dirname + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
var Web3EthAccounts = require('web3-eth-accounts');
var firebase = require('firebase')
app.use(bodyParser.urlencoded({extended: true}), router)
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
               client.GetStaffDetails(user,  (err ,response) => {
                   if  (response.GetStaffDetailsResult.string[0] == "") {
                    res.send('<script>alert("กรุณากรอกข้อมูลใหม่");</script>')
                    console.error(err);
                   }
                    else 
                    {
                        var account = new Web3EthAccounts('ws://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261');
                        var user_eth =  account.create();
                        console.log(response)
                                database.ref('users').child(user.username).once("value", snapshot => {
                            if (snapshot.exists()){ // check ว่ามีการสร้างแล้วหรือยัง
                                console.log('already exists')
                                    // res.send('<script>alert("มีข้อมูลในระบบแล้ว");</script>');
                                    res.redirect('/testsend.html')
                            } else { // หากยังไม่มีจะทำการสร้างกระเป๋า 
                                database.ref('users').child(user.username).push({
                                    address   : user_eth.address,
                                    privateKey: user_eth.privateKey.substring(2).toUpperCase(),
                                    balance : 0,
                                }).then(() => {
                                    console.log('create new wallet')
                                    res.send({user_eth,response});              
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

    router.route('/send') 
    .get((req, res) => {
        res.render('testsend.html')
    })
    .post((req, res) => {
        web3.setProvider(new web3.providers.HttpProvider("https://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261"));
        async function Tranfer () 
        {
       
         fromAddress     = req.body.fromAddress
         toAddress       = req.body.toAddress
         contractAddress = req.body.contractAddress
         money           = req.body.money
          console.log(fromAddress)
          console.log(toAddress )
          console.log(contractAddress )
          console.log(money)
          var abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './abi.json'), 'utf-8'));
          var count = await web3.eth.getTransactionCount(fromAddress);
        //   var contractAddress = "0x0d01bc6041ac8f72e1e4b831714282f755012764";
          var contract = new web3.eth.Contract(abi, contractAddress, { from: fromAddress });
          var weiTokenAmount = web3.utils.toWei(String(money), 'ether');
          var Transaction = {
            "from": fromAddress,
            "nonce": "0x" + count.toString(16),
            "gasPrice": "0x003B9ACA00",
            "gasLimit": "0x250CA",//151754
            "to": contractAddress,
            "value": "0x0",
            "data": contract.methods.transfer(toAddress  , weiTokenAmount).encodeABI(),
            "chainId": 0x03
          };
          var privKey = Buffer.from('E1C661DE87DF9B024A63EC2F47B041D76326082FFD7B26CEF6F100F901E232C3', 'hex');
        //   var privKey = Buffer.from('privatekey', 'hex');
        //  0x8b18d053412d1c6701784c2fc5193b24437dc9a5b190dc46e47d4b8c14c4cfde
          const tx = new EthereumTx(Transaction, { chain: 'kovan' });
          tx.sign(privKey);
          var serializedTx = tx.serialize();
          var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
        //   res.send("good send")
          return receipt
        }
        Tranfer().then((result) => {
          console.log(result)
        })
     })

    //  router.route('/Showdata') 
    //  .get((req, res) => {
    //      res.render('showdata.html')
    //  })
    //  .post((req, res) => {
    //     var leadsRef = database.ref('users');
    //     leadsRef.on('value', (snapshot) => {
    //         snapshot.forEach((childSnapshot)  => {
    //           var childData = childSnapshot.val();
    //           console.log(childData)
    //         });
    //     });
    //   })

app.listen(8000, () => console.log('Server is ready!'))
