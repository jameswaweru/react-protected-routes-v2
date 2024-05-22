import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Login from './Login'
import NavigationBar from '../components/NavigationBar'
import { useLocalStorage } from '../utils/LocalStorage';
import { User } from '../models/User';
import { useNavigate } from 'react-router-dom';

export const RootContext = createContext();

function Root() {
    const navigate = useNavigate(); // Get the navigate function
     const [user, setUser] = useLocalStorage('user', User)

    const loginUser = () => {
        setUser({ id: 1, username: "abhishek", role: ["user", "admin"] })
    }

    const logoutUser = () => {
        setUser(null)
    }

    useEffect(() => {
        //setUser({ id: 1, username: "abhishek", role: ["user", "admin"] })
        console.log('im in root component')
        if(user){
            navigate('/home')
        }else{
            navigate('/')
        }
    }, [])

    useEffect(() => {
        //You can add your code for updating phase of component
        console.log("Updating in Functional Component")
        
        
    }, [user])

    return (
        <>

<RootContext.Provider value={[user, logoutUser]}>
            <div>
                {/* {!user && <Login />} */}
                {/* <div className={`${!user && 'hidden'} bg-gradient-to-r from-pink-200 to-pink-600 flex flex-row justify-between text-xs p-6`}>
                    <div className='flex flex-row space-x-2'>
                        <div className='flex flex-row space-x-2'>
                            <Link to="/">Home</Link>&nbsp;
                            <Link to="/products/computer">Computer</Link>&nbsp;
                            <Link to="/products/desk">Desk</Link>&nbsp;
                            <Link to="/products/gadget">Gadgets</Link>&nbsp;
                            <Link to="/products/tshirt">Tshirts</Link>&nbsp;
                            <Link to="/admin">Admin</Link>&nbsp;
                        </div>
                        <div>
                            {user && <button onClick={logoutUser} className="btn purple">Logout</button>}
                            {!user && <button onClick={loginUser} className="btn purple">Login</button>}
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </div>
                </div> */}

                <NavigationBar />
                

                {/* {user && <Outlet context={{ user, setUser, loginUser, logoutUser }} />} */}
                <Outlet context={{ user, setUser, loginUser, logoutUser }} />


            </div>
            </RootContext.Provider>

        </>
    )
}

export default Root