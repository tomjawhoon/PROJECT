import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'
import AdminHOC from '../components/layouts/admin.hoc'
import axios from 'axios'
import Router from 'next/router'

const SetLogin = () => {
    const [apiLogin, setapiLogin] = useState([]);
    
    try {
        const header = {
          "Content-Type": 'application/json'
        };
        axios.post("http://localhost:8000/showdata/confirm", apiRes, header);
        console.log("postdata ==>" + JSON.stringify(apiRes))
      } catch (e) {
        console.log(`Axios request failed: ${e}`);
      }
    
    //จะถูกยัดไปอยู๋ที่ apiRes
    //apiRes ใช้ในหน้าเ้พจเท่านั้น เลย จร้า
    useEffect(() => { //ฟังกฺ์ชั่น สำหรับ HOCK //ComponentDismount
        axios.post("http://localhost:8000/Login").then(result => {
            //setapiLogin(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
            setapiLogin(result)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
            // console.log("result", result)
            if (apiLogin) { //snapshot.exists()
            //วิธี redirect next.js
                Router.push('/index')
            }
            return result;
        }).catch(err => {
            console.log("error", err)
            return err;
        })

    }, [])

    useEffect(() => {
        console.log("apiLogin useEffect", apiLogin)
        Login(apiLogin)
    }, [apiLogin])
}

const Login = () => (
    <div contentTitle="Tranfers">
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>PSU LOGIN</h3>
                        <div className="d-flex justify-content-end social_icon">
                            {/* <span><i class="fab fa-facebook-square"></i></span>
                                <span><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span> */}
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="/" method="post">
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="text" id="username" className="form-control" placeholder="username" name="username" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key" /></span>
                                </div>
                                <input type="password" id="password" className="form-control" placeholder="password" name="password" />
                            </div>
                            <br />
                            <center>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Login" className="btn login_btn" />
                                </div>
                            </center>
                        </form>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
               /* Made with love by Mutiullah Samim*/

               @import url('https://fonts.googleapis.com/css?family=Numans');
               
               html,
               body {
                   /* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */
                   background: -webkit-gradient(linear, left top, left bottom, from(rgba(253, 253, 253, 0.8)), to(rgba(255, 255, 255, 0.8))), url("../img/bg-masthead.jpg");
                   background-size: cover;
                   background-repeat: no-repeat;
                   height: 100%;
                   font-family: 'Numans', sans-serif;
               }
               
               .container {
                   height: 100%;
                   align-content: center;
               }
               
               .card {
                   height: 370px;
                   margin-top: auto;
                   margin-bottom: auto;
                   width: 400px;
                   background-color: rgba(0, 0, 0, 0.5) !important;
               }
               
               .social_icon span {
                   font-size: 60px;
                   margin-left: 10px;
                   color: #FFC312;
               }
               
               .social_icon span:hover {
                   color: white;
                   cursor: pointer;
               }
               
               .card-header h3 {
                   color: white;
               }
               
               .social_icon {
                   position: absolute;
                   right: 20px;
                   top: -45px;
               }
               
               .input-group-prepend span {
                   width: 50px;
                   background-color: #FFC312;
                   color: black;
                   border: 0 !important;
               }
               
               input:focus {
                   outline: 0 0 0 0 !important;
                   box-shadow: 0 0 0 0 !important;
               
               }
               
               .remember {
                   color: white;
               }
               
               .remember input {
                   width: 20px;
                   height: 20px;
                   margin-left: 15px;
                   margin-right: 5px;
               }
               
               .login_btn {
                   color: black;
                   background-color: #FFC312;
                   width: 100px;
               }
               
               .login_btn:hover {
                   color: black;
                   background-color: white;
               }
               
               .links {
                   color: white;
               }
               
               .links a {
                   margin-left: 4px;
               }
            `}</style>
    </div>

)



export default Login
