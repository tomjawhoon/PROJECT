
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
var firebase = require('firebase');
app.use(bodyParser.urlencoded({extended: false}), router)
app.use(bodyParser.json, router)
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
               client.GetStaffDetails(user,  (err ) => {
                   // client.GetStudentDetails(args, function(err) {
                var account = new Web3EthAccounts('ws://ropsten.infura.io/v3/4f5881a2f31a46a4bb75e8284c097cb4');
                var user_eth =  account.create();
                // console.log("USER" ,user);
                   if (err) 
                   console.error(err);
                   else 
                   {
                        console.log("SHOWDATA",user_eth);
                            res.send({user_eth});
                                     const database = firebase.database();
                                        database.ref('users/').push({user_et});   
                    //    const data = getInputData();
                     
                   }
               });
           }
       });
   })

app.listen(3000, () => console.log('Server is ready!'))
