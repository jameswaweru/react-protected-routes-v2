import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile";
import Admin from "./pages/Admin";
import ProtectedRoute from "./utils/ProtectedRoute";
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />,
                    index: true
                },
                {
                    path: "/home",
                    element: <Home />,
                    index: true
                },
                // {
                //     path: "/profile",
                //     element: <ProtectedRoute><Profile/></ProtectedRoute>
                // },
                // {
                //     path: "/editprofile",
                //     element: <ProtectedRoute><EditProfile/></ProtectedRoute>
                // },
                // {
                //     path: "/admin",
                //     element: <ProtectedRoute><Admin/></ProtectedRoute>
                // },
                {
                    element: <ProtectedRoute role="user"/>,
                    children:[
                        {
                            path: "/profile",
                            element: <Profile/>
                        },
                        {
                            path: "/editprofile",
                            element: <EditProfile/>
                        },
                        
                        {
                            path: "/products/:category/:filter?",
                            element: <Products/>
                        },
                    ]
                },
                {
                    element: <ProtectedRoute role="admin"/>,
                    children:[
                        {
                            path: "/admin",
                            element: <Admin/>
                        }
                    ]
                },
                {
                    path:"*",
                    element:<p>404 Error - Nothing here...</p>
                }
            ]
        }
    ]
);

export default router