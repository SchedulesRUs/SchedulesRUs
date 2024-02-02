// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/user/login', {
//         username,
//         password,
//       });

//       console.log('Login successful:', response.data);
//       // Handle the response as needed in your frontend
//     } catch (error) {
//       console.error('Login failed:', error.response.data);
//       // Handle the error as needed in your frontend
//     }
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default YourComponent;
