import React, { useState } from 'react';
import axios from 'axios';

// เปลี่ยนเป็น URL ของฝั่งหลังบ้าน
const API_URL = 'http://localhost:5000';

const Example = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    
    axios.post(API_URL, {username, password});
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setUsername(e.target.value)}/>
        <input type='password' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}