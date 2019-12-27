import React from 'react'
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'
import AdminHOC from '../components/layouts/admin.hoc'

const Transfer = () => (
  <AdminHOC contentTitle="Tranfers">
    <h1>TransferCoin</h1>

    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <form id="submitSend" method="GET">
              <br />
              <br />
              <h4 style={{ color: '#111111' }}>TRANFER</h4>
              <hr />
              {/* <h5>FORM Address</h5> */}
              <div id="containerLeft">
                <div className="form-group">
                  <div id="Left">
                    <input type="hidden" className="form-control" name="fromAddress" id="showid" size={80} /><br />
                    <input type="hidden" className="form-control" name="fromAddress" id="fromAddress" size={80} />
                    {/* <p>e.g. 0x6c25FE295Ecee6F0D8D34fC28dca2de68538fA4a</p> */}
                    {/* <h5>privateKey</h5> */}
                    <input type="hidden" className="form-control" name="privateKey" id="privateKey" size={80} />
                    <h5 style={{ color: '#111111' }}>Recipients</h5>
                    <h5 style={{ color: '#111111' }}>(Student ID)</h5>
                    <input type="text" className="form-control" name="toAddress" id="toAddress" size={80} /><br />
                    {/* <p>e.g. 5935512042</p> */}
                    <h5 style={{ color: '#111111' }}>Money</h5>
                    <input type="number" className="form-control" name="money" id="money" size={80} />
                    <br />
                    <a id="result" style={{ color: '#111111' }} />
                    <br />
                    <button type="submit" className="btn btn-primary">ENTER</button>
                  </div>
                </div>
              </div>
              <div id="containerRight">
                <div id="Right">
                  <br />
                  <br />
                  <h5 style={{ color: '#111111' }}>PROFILE</h5>
                  <input id="receiverName" type="text" className="form-control" size={80} /><br />
                  <input id="receiverLastName" type="text" className="form-control" size={80} /><br />
                  <input id="receiverLastID" type="text" className="form-control" size={80} />
                </div>
              </div>
            </form></div>
        </div>
      </div>
    </div>
    <style jsx>{`
                /* Made with love by Mutiullah Samim*/

                @import url('https://fonts.googleapis.com/css?family=Numans');
                #containerRight {
                    float: right;
                    width: 200px;
                    height: 150px;
                }
                
                #Right {
                    float: right;
                    width: 200px;
                    height: 150px;
                }
                
                #containerLeft {
                    float: left;
                    width: 200px;
                    height: 150px;
                }
                
                #Left {
                    float: left;
                    width: 200px;
                    height: 150px;
                }
                
                html,
                body {
                    /* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */
                    background: -webkit-gradient(linear, left top, left bottom, from(rgba(36, 48, 56, 0.8)), to(rgba(94, 89, 89, 0.8))), url("../img/bg-masthead.jpg");
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
                    /* float: left; */
                    height: 650px;
                    margin-top: auto;
                    margin-bottom: auto;
                    width: 550px;
                    background-color: rgba(66, 64, 64, 0.5) !important;
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
  </AdminHOC>
)

export default Transfer
