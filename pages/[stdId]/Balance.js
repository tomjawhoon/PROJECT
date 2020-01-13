import React, { useState, useEffect } from 'react';
import axios from 'axios';

// เปลี่ยนเป็น URL ของฝั่งหลังบ้าน
const API_URL = 'http://localhost:8000/balance/confirm';
const API_URL_getWalletById = 'http://localhost:8000/getWalletById';

const Example = () => {

  const [username, setUsername] = useState('');
  const [getWalletById, setGetWalletById] = useState('');
  //const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    
    /*axios.post(API_URL, { name: username }).then(result => { //username = 5935512088
      setValueGet(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
      console.log("valueget................", valueget)
      return result;
  }).catch(err => {
      console.log(err)
      return err;
  });*/
    axios.post(API_URL_getWalletById, { username: username }).then(result => { //username = 5935512088
      setGetWalletById(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
      console.log('test: ', JSON.stringify(result.data))
      console.log('test address: ',result.data.address )
      //  console.log("valueget................", getWalletById)
      //console.log("valueget................", getWalletById)
      return result;
    }).catch(err => {
      console.log(err)
      return err;
    });

  }

  useEffect(() => {
    // const y = JSON.parse(undefined)
    console.log("getWalletById useEffect", getWalletById.address) 
    console.log("getWalletById useEffect typeof ",  typeof(getWalletById)  )
    // const  xx = JSON.parse( (JSON.stringify(getWalletById)).replace(/(?:\\[rn])+/g, '')   )
    // const y = (JSON.stringify(getWalletById)).replace(/(?:\\[rn])+/g, '') 
    // const x = { 'address':'123456'}
    // console.log("getWalletById useEffect xx",  xx  )
    // console.log("getWalletById useEffect xx",  xx.address  )
    // console.log("getWalletById useEffect typeof ",  typeof(xx)  )
    // console.log("getWalletById useEffect xx address",   {xx}  )
    // console.log('y = ', y)
   // Postdata(getWalletById)
  }, [getWalletById])

 /* useEffect(() => {
    document.title = `You clicked ${getWalletById} times`;
  });*/

  /* useEffect(() => { //ฟังกฺ์ชั่น สำหรับ HOCK
     axios.get('http://localhost:8000/showdata/confirm').then(result => {
       console.log("result",result.data)
       setGetWalletById(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน apiRes
      // console.log("result", result.data)
       return result;
     })
 
   }, [])
 
   useEffect(() => {
     console.log("apiRes useEffect", getWalletById)
     // Postdata(getWalletById)
   }, [getWalletById])*/


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>  5935512088 </span>
        <input type='text'  onChange={e => setUsername(e.target.value)} />
        {/* <input  type='text' value='5935512088' onChange={e => setUsername('5935512088') }  /> */}
        <button type='submit'>Submit</button>
      </form>  

  {/* <p>{getWalletById}</p>  */}
    </div>
  )


}

export default Example