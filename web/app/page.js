"use client"; 

import { useState } from 'react';
import { logo, logo1 } from './asset';
import Image from 'next/image';
import config from '../next.config'


export default function Home() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validateIsSuccess, setValidateIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    const correctUsername = "Admin123";
    const correctPassword = "manager123";
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      window.location.href = '/dashboard';
    } else {
      setErrorMessage('Wrong username or password, please try again!'); 
    }
  };

  const validateLogin = async ({username,password}) => {
    async function fetchGetAllUser() {
      try {
        const response = await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/user/login?username=${username}&password=${password}`);
        const data = await response.json();
        console.log("test", data);
        console.dir(data);
        if(data.success == true){
          setValidateIsSuccess(true)
          window.location.href = '/dashboard';

        }
        else{
          setErrorMessage('Wrong username or password, please try again!'); 

        }
        // setAllUser(data);
      } catch (error) {
      }
    }
    fetchGetAllUser();
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex-grow flex max-w-4xl w-full justify-around items-center">
      {loading ? (        <p style={styles.loading}>Loading...</p>
    ):(      
      <div>  
        <div className='flex-1 flex justify-center '>
          <Image src={logo1} alt='Image' className="max-w-xs" />
        </div>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-indigo-950 font-mono">
            
          </h2>
        </div>
        <div className="flex-1 max-w-md space-y-6 bg-white shadow-md rounded-lg px-10 py-8">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='mb-4'>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={enteredUsername}
                onChange={(e) => setEnteredUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
              {errorMessage && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p> // Display error message here
              )}
            </div>
          </div>
          <div>
            <button
                onClick={() => validateLogin({username: enteredUsername, password:enteredPassword})}
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-950 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </div>
        </div>
    )}
      </div>
      <footer className="text-center py-4 text-gray-600">
        <p>Schedule "R" Us © 2024 - <a href='https://github.com/JustKhit/SchedulesRUs' target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 focus:ring-indigo-800">GitHub</a></p>
      </footer>
    </div>
  );
}



const styles = {
loading: {
  fontSize: '18px',
  color: '#555',
}
};