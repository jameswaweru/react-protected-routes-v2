import React from 'react';

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-600 text-white text-xs">
      <div className="border p-4 rounded-md flex flex-col max-w-96">
        <p>Let's Login</p>
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <p>Username</p>
              <input type="text" className="rounded p-2 text-black mt-1" />
            </div>
            <div className="flex flex-col">
              <p>Password</p>
              <input type="password" className="rounded p-2 text-black mt-1" />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <button className="border rounded p-2 shadow-lg cursor-pointer">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
