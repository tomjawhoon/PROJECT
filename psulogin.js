
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
var engines = require('consolidate');
app.set('views', __dirname + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
var Web3EthAccounts = require('web3-eth-accounts');
var firebase = require('firebase')
app.use(bodyParser.urlencoded({extended: false}), router)
app.use(bodyParser.json, router)

var firebaseConfig = {
    apiKey: "AIzaSyDPwR_Tlxe5MODIEPugWCnO_drEh6-4jjw",
    authDomain: "login-psu-final.firebaseapp.com",
    databaseURL: "https://login-psu-final.firebaseio.com",
    projectId: "login-psu-final",
    storageBucket: "login-psu-final.appspot.com",
    messagingSenderId: "152285332333",
    appId: "1:152285332333:web:bc428892887d5004"
  };
  // Initialize Firebase
  
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
               client.GetStaffDetails(user,  (err) => {
                   // client.GetStudentDetails(args, function(err) {
                var account = new Web3EthAccounts('ws://ropsten.infura.io/v3/4f5881a2f31a46a4bb75e8284c097cb4');
                var user_eth =  account.create();
                // console.log("USER" ,user);
                   if (err) 
                   console.error(err);
                   else 
                   {
                            database.ref('users').child(user.username).once("value", snapshot => {
                           if (snapshot.exists()){ // check ว่ามีการสร้างแล้วหรือยัง
                               console.log('already exists')
                                res.send("มีอยู่แล้วจร้า");
                           } else { // หากยังไม่มีจะทำการสร้างกระเป๋า 
                            database.ref('users').child(user.username).push({
                                address   : user_eth.address,
                                privateKey: user_eth.privateKey
                            }).then(() => {
                                console.log('create new wallet')
                                res.send({user_eth});                               
                            }).catch(e => {
                                console.log(e)
                            })
                           }
                       })
                    //    const data = getInputData();
                   }
               });
           }
       });
   })

app.listen(8000, () => console.log('Server is ready!'))
