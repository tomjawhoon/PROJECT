import React, { useEffect, useState } from 'react';
/*import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'*/
import AdminHOC from '../components/layouts/admin.hoc'
import axios from 'axios'
import Router from 'next/router'

const API_URL = 'http://localhost:8000/Login';
const Home = () => {
    //Router.push('/about')
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = e => {

        e.preventDefault();
        //axios.post(API_URL, { username, password });

        console.log("username ", username)
        console.log("password ", password)


       try {
            const header = {
              "Content-Type": 'application/json'
            };
            axios.post("http://localhost:8000/Login", username, header);
           // axios.post("http://localhost:8000/Login", password, header);
            //console.log("postdata ==>" + JSON.stringify(apiRes))
          } catch (e) {
            console.log(`Axios request failed: ${e}`);
          }

          /*try {
            const header = {
              "Content-Type": 'application/json'
            };
            axios.post("http://localhost:8000/Login", password, header);
            //console.log("postdata ==>" + JSON.stringify(apiRes))
          } catch (e) {
            console.log(`Axios request failed: ${e}`);
          }*/


    }

    return (
        <div contentTitle="Tranfers">
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>PSU LOGIN</h3>
                        </div>
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input type="text" className="form-control" onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password" className="form-control"  onChange={e => setPassword(e.target.value)} />
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

}







export default Home