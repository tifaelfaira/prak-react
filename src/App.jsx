import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage"; // Import komponen ErrorPage

function App() {
  const [count, setCount] = useState(0);

  return (
    // Struktur wrapper utama dashboard
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        {/* Sidebar di sebelah kiri */}
        <Sidebar />

        {/* Konten utama di sebelah kanan */}
        <div id="main-content" className="flex-1 p-4 overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;