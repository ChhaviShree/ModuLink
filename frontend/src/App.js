import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BuildYourHouse from "./Pages/BuildYourHouse";
import VendorRegistration from "./Pages/VendorRegistration";
import VendorLogin from "./Pages/VendorLogin";
import CustomerLogin from "./Pages/CustomerLogin";
import CustomerSignup from "./Pages/CustomerRegistration";
import Dashboard from "./Pages/Dashboard";
import Privateroute from "./Components/Privateroute";
import Profile from "./Pages/Profile";
import VendorView from "./Pages/Vendor-view/VendorView";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/vendor-view" element={<VendorView />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/vendor-register" element={<VendorRegistration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/build-your-house" element={<BuildYourHouse />} />
          <Route path="/signup" element={<CustomerSignup />} />
          <Route path="/user" element={<Privateroute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
