import React, { useEffect, useState } from 'react';
import Router from 'next/router';
//import { useRouter } from 'next/router'
/*import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.menu'
import AdminFooter from '../components/layouts/admin.footer'*/
import AdminHOC from '../components/layouts/admin.hoc'
import axios from 'axios'
//import Router from 'next/router'
const API_URL = 'http://localhost:8000/Login';
const API_URL_getWalletById = 'http://localhost:8000/getWalletById';
const Home = () => {
    //Router.push('/about')
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [value, setValue] = useState([]);
    const [valueget, setValueGet] = useState([]);

    // var url;
    // var id // 5935512088 value from hook node route Login
    // (() => {
    // url = window.location.href
    // id = url.split('/').slice(-1).toString() // ไอดี ของผู้ login
    // })()

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(API_URL, { username: username, password: password }).then(result => {
            setValue(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน value
            // console.log("username..................data", value)
            return result;
        }).catch(err => {
            console.log(err)
            return err;
        });
        axios.post(API_URL_getWalletById, { username: username }).then(result => { //username = 5935512088
            setValueGet(result.data)//เราเอาผลลัพที่ได้ไปเก็บไว้ใน value
            // console.log("valueget................", valueget)

            return result;
        }).catch(err => {
            console.log(err)
            return err;
        });
    }
    useEffect(() => {
        console.log("ID FROM LOGIN", value)
        console.log("valueget useEffect", valueget)
        if (value.length > 0) {
            Router.push('/index/' + username)
        }
        //Postdata(value)
    }, [value, valueget])


    /* Router.push({
         pathname: '/index',
         query: { name: 'value' },
       })*/
    /* const Postdata = (value) => {
 
         const router = useRouter()
               
         useEffect(() => {
             if(value != ''){
                  router.prefetch('/index')
             }
          
         })
         
     
             
       }*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={e => setUsername(e.target.value)} />
                <input type='password' onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default Home