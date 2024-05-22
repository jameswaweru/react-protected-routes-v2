import React, { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../utils/LocalStorage';
import { User } from '../models/User';



function LandingPage() {

  const [user, setUser] = useLocalStorage('user', User)


  const navigate = useNavigate(); // Get the navigate function
  const context = useOutletContext();

  const inputPassword = useRef(null);
  const inputUsernam = useRef(null);
  const [showError , setShowError] = useState(false);
  const [errorMessage , setErrorMessage] = useState('')

  useEffect(() => {
    //Runs only on the first render
    inputUsernam.current.focus();

    // console.log('checking if logged inn')
    if(user){
      console.log('logged in')

      console.log('user', user)
      if(user.id){
        console.log('subscribed in')
          navigate('/admin')
      }
  }
    
  }, []);

  const onClearRef = () => {
    if (inputUsernam.current) {
      inputUsernam.current.value = '';
    }
    if (inputPassword.current) {
      inputPassword.current.value = '';
    }
  };


  

  const onButtonClick = () => {
console.log('clicked')
    // `current` points to the mounted input element
    const usernameValue = inputUsernam.current?.value;
    const passwordValue = inputPassword.current?.value;

    if (!passwordValue) {
      console.log('password is null');
      setShowError(true);
      setErrorMessage("Password is missing");
    } else if (!usernameValue) {
      console.log('username is null');
      setShowError(true);
      setErrorMessage("Username is missing");
    } else {
      console.log('passed validation');
      setShowError(false);
      // context.setUser({ id: 1, username: usernameValue, role: ["user", "admin"] });
      const userData = User;
      userData.id = 1;
      userData.isSubscribed = true;
      userData.name = usernameValue;
      userData.role = "admin";
      context.setUser(userData);
      navigate('/admin')
    }

  };


  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;


  return (
    // <div>
    //   <h1>Current count: {count}</h1>
    //   <h2>Previous count: {prevCount}</h2>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    // </div>
    <div className="h-screen flex flex-col items-center justify-center bg-slate-600 text-white text-xs">
      <div className="border p-4 rounded-md flex flex-col max-w-96">
        <p>Let's Login</p>
    
        {showError && <div className=' text-red-400 text-xs border p-2'>{errorMessage}</div>}
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <p>Username</p>
              <input ref={inputUsernam}  type="text" className="rounded p-2 text-black mt-1" />
            </div>
            <div className="flex flex-col">
              <p>Password</p>
              <input ref={inputPassword} type="password" className="rounded p-2 text-black mt-1" />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <button onClick={onButtonClick} className="border rounded p-2 shadow-lg cursor-pointer">Save</button>
          </div>
          <div className='flex flex-row w-full items-center'>
            <p onClick={onClearRef}>Clear</p>
          </div>
        </div>
      </div>
    </div>
  )

  
}

export default LandingPage