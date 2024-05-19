import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function NavigationBar() {
  const context = useOutletContext();
  const user = context?.user || null;
  const logoutUser = context?.logoutUser || (() => {});
  const loginUser = context?.loginUser || (() => {});

  return (
    user && (
      <div className="bg-gradient-to-r from-pink-200 to-pink-600 flex flex-row justify-between text-xs p-6">
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row space-x-2">
            <Link to="/">Home</Link>&nbsp;
            <Link to="/products/computer">Computer</Link>&nbsp;
            <Link to="/products/desk">Desk</Link>&nbsp;
            <Link to="/products/gadget">Gadgets</Link>&nbsp;
            <Link to="/products/tshirt">Tshirts</Link>&nbsp;
            <Link to="/admin">Admin</Link>&nbsp;
          </div>
          <div>
            <button onClick={logoutUser} className="btn purple">Logout</button>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    ) 
    // : (
    //   <button onClick={loginUser} className="btn purple">Login</button>
    // )
  );
}

export default NavigationBar;
