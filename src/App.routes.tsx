import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout/AuthLayout";
import Login from "./components/layouts/login/Login";

  
  
  
  

const router = createBrowserRouter([
    { path: "/", element:  <Navigate to="auth/login"  /> },
    {
    path: "/auth",
    element: <AuthLayout />,
    children: [
    
      { path: "login", element: <Login /> },
     
    ],
  },
  ])

export default router;
