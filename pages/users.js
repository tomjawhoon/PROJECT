import React from 'react'
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'
import AdminHOC from '../components/layouts/admin.hoc'

const Users = () => (
    <AdminHOC contentTitle="Users">
        <h1>Users</h1>

        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        {/* SIDEBAR USERPIC */}
                        <div className="profile-userpic">
                            <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt />
                        </div>
                        {/* END SIDEBAR USERPIC */}
                        {/* SIDEBAR USER TITLE */}
                        <div className="profile-usertitle">
                            <div className="text-center">
                                <div className="card-img-top" id="qrcode" alt="Card image" style={{ width: '100%' }} />
                            </div>
                        </div>
                        {/* END SIDEBAR USER TITLE */}
                        {/* SIDEBAR BUTTONS */}
                        <div className="profile-userbuttons">
                            <a className="printPage btn btn-danger btn-sm" href="#">Print</a>
                        </div>
                        {/* END SIDEBAR BUTTONS */}
                        {/* SIDEBAR MENU */}
                        <div className="profile-usermenu">
                            <ul className="nav">
                                <li className="active">
                                    <a href="#">
                                        <i className="glyphicon glyphicon-home" />
                                        Overview </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="glyphicon glyphicon-user" />
                                        Account Settings </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="glyphicon glyphicon-ok" />
                                        Tasks </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="glyphicon glyphicon-flag" />
                                        Help </a>
                                </li>
                            </ul>
                        </div>
                        {/* END MENU */}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <hr />
                                <form className="form" action="##" method="post" id="registrationForm">
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="first_name">
                                                <h4>First name</h4>
                                            </label>
                                            <input type="text" className="form-control" name="first_name" id="receiverName" placeholder="first name" title="enter your first name if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="last_name">
                                                <h4>Last name</h4>
                                            </label>
                                            <input type="text" className="form-control" name="last_name" id="receiverLastName" placeholder="last name" title="enter your last name if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="phone">
                                                <br />
                                                <h4>Student ID</h4>
                                            </label>
                                            <input type="text" className="form-control" name="phone" id="receiverLastID" placeholder="enter phone" title="enter your phone number if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="mobile">
                                                <br />
                                                <h4>Wallet</h4>
                                            </label>
                                            <input type="text" className="form-control" name="mobile" id="fromAddress" placeholder="enter mobile number" title="enter your mobile number if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-10">
                                            <label htmlFor="password">
                                                <br />
                                                <h4>PrivateKey  <a>show</a></h4>
                                            </label>
                                            <input className="form-control" name="password" id="privateKey" placeholder="password" title="enter your password." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <br />
                                            <hr />
                                            <a className="btn btn-lg btn-success" onclick="gotoindex()">BACK</a>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                            </div>
                            <hr />
                        </div>
                        {/*/tab-pane*/}
                    </div>
                </div>
            </div>
        </div>



    </AdminHOC>
)
export default Users
