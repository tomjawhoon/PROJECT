import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'
import AdminHOC from '../components/layouts/admin.hoc'
import axios from 'axios'

const Home = () => {
  const [apiRes, setapiRes] = useState([]); //จะถูกยัดไปอยู๋ที่ apiRes
  //apiRes ใช้ในหน้าเ้พจเท่านั้น เลย จร้า
  useEffect(() => { //ฟังกฺ์ชั่น สำหรับ HOCK
    axios.get("http://localhost:8000/showdata/confirm").then(result => {
      setapiRes(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
      // console.log("result", result)

     /* if(apiRes){
        
      }*/
      return result;
    }).catch(err => {
      console.log(err)
      return err;
    })

  }, [])

  useEffect(() => {
    console.log("apiRes useEffect", apiRes)
    Postdata(apiRes)
  }, [apiRes])

  return ( //Funchtion  return ทั้งหมด
    <AdminHOC contentTitle="Home">
      <h1>PSU COIN-Next</h1>
      {/*apiRes {apiRes.length > 0 && <div> {apiRes[0]['address']} </div>}*/}
      apiRes {apiRes.length > 0 && apiRes.map((show, index) => {
        //console.log("SHOW_show.name.GetStaffDetailsResult[1]",show.name.GetStaffDetailsResult.string[0])
        return <div key={index}> <div>{show.address}</div> <div>{show.balance}</div> { /*<div>{show.name.GetStaffDetailsResult.string}  </div>*/} <div> </div></div>
      }
      )}
    </AdminHOC>
  )
}

const Postdata = (apiRes) => {
  try {
    const header = {
      "Content-Type": 'application/json'
    };
    axios.post("http://localhost:8000/showdata/confirm", apiRes, header);
    console.log("postdata ==>" + JSON.stringify(apiRes))
  } catch (e) {
    console.log(`Axios request failed: ${e}`);
  }
}

export default Home 
