import React from 'react';
import AdminHOC from '../components/layouts/admin.hoc';
import $ from 'jquery';

/*export default class Balance extends React.Component {
    componentDidMount() {
        var url;
        var id;
        (() => {
            url = window.location.href
            id = url.split('/').slice(-1).toString() // ไอดี ของผู้ login
        })()
        axios({
            method: 'GET',
            url: '/getWalletById', //ส่งไปค่านี้
            headers: {
                id: id // รหัสนักศึกษา
            }
        }).then(result => { // ดึงค่ามาใส่ใน input ด้วย axios โดยตรง
            console.log("result_formaxios_getWalletById", result)
            console.log("result_formaxios_getWalletById", result.config.headers.id)
            $('#fromAddress').val(result.data.address)
            $('#showid').val(result.config.headers.id)
        }).catch(result => {
            console.log("errr")
        })
        document.querySelector('#submitSend').addEventListener('submit', e => {
            e.preventDefault()
            axios({ // ส่งค่าทั้งหมดไปๆ ยัง ฝั่ง nodejs
                method: 'GET',
                url: '/balance/' + id + '/confirm', // ส่งไปยังค่านี้
                headers: {
                    fromAddress: $('#fromAddress').val(),
                }
            }).then(result => { // ดึงค่ามาใส่ใน input ด้วย axios โดยตรง
                console.log("Retuen_value_balance", result)
                console.log("test_send => ", result.data)
                // $('#fromAddress').val(result.data.address)
                $('#result').text(result.data)
            }).catch(result => {
                console.log("errr")
            })
        })
    }

}*/

/*export const menuActions = {
    TEST : () => () => {
     
    },
}*/

const Balance = () => (
    <AdminHOC contentTitle="Balance">
        <h1>Balance</h1>
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <form id="submitSend" method="GET">
                            <h4 style={{ color: '#111111' }}>BALANCE</h4>
                            <hr />
                            <h5 style={{ color: '#111111	' }}>FORM Address</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" name="fromAddress" id="showid" size={80} />
                                <input type="hidden" className="form-control" name="fromAddress" id="fromAddress" size={80} />
                                <br />
                                <div id="result" style={{ color: '#111111' }} />
                                {/* <input type="text" class="form-control"  id="showid" size="80" value="PSU"></input> */}
                                {/* <div type="text" id="showid"></div> */}
                                <br />
                                <br />
                                <button type="submit" className="btn btn-primary">ENTER</button>
                                {/* <button onclick="gotoSendETH()" class="btn btn-primary">TRANFER</button> */}
                                {/* <button onclick="gotoindex()" class="btn btn-primary">TRANFER</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    </AdminHOC>
)






export default Balance;