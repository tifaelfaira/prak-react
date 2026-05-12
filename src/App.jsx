import { Suspense, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Loading from "./pertemuan-5/components/Loading";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import ErrorPage from "./pages/ErrorPage"; // Import komponen ErrorPage
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const Products = React.lazy(() => import("./pages/Products"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
          
            
            {/* Rute tambahan untuk latihan Error Pages dengan gambar berbeda-beda */}
            <Route 
              path="/error-400" 
              element={<ErrorPage code="400" description="Bad Request" image="https://illustrations.popsy.co/white/falling.svg" />} 
            />
            <Route 
              path="/error-401" 
              element={<ErrorPage code="401" description="Unauthorized Access" image="https://www.bluehost.com/blog/wp-content/uploads/2023/06/contact-for-401-error-help.png" />} 
            />
            <Route 
              path="/error-403" 
              element={<ErrorPage code="403" description="Forbidden Access" image="https://www.sitelock.com/uploads/blog/403-error-forbidden-with-police-concept-illustration.jpg" />} 
            />

            {/* Rute Not Found (404) diletakkan paling bawah */}
            <Route path="*" element={<ErrorPage code="404" description="Page Not Found" image="https://illustrations.popsy.co/white/navigation.svg" />} />
          </Route>
           <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
            </Routes>
            </Suspense>
  );
}

export default App;