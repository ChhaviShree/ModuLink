import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BuildYourHouse from "./Pages/BuildYourHouse";
import VendorRegistration from "./Pages/Registration/VendorRegistration";
import VendorLogin from "./Pages/Login/VendorLogin";
import CustomerLogin from "./Pages/Login/CustomerLogin";
import CustomerSignup from "./Pages/Registration/CustomerRegistration";
import Dashboard from "./Pages/Dashboard";
import Privateroute from "./Components/Privateroute";
import Profile from "./Pages/Profile";
import VendorView from "./Pages/Vendor-view/VendorView";
import Blog from "./Pages/Blog/Blog";
import SharedBlog from "./Pages/Blog/SharedBlog";
import ThreeDModels from "./Pages/Landing/ThreeDModels";
import ModelView from "./Pages/Landing/ModelView";
import BuildHouse from "./Pages/Build House/BuildHouse";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<ThreeDModels />} />
          <Route path="/model-view" element={<ModelView />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/vendor-register" element={<VendorRegistration />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/build-your-house" element={<BuildYourHouse />} />
          <Route path="/signup" element={<CustomerSignup />} />
          <Route path="/user" element={<Privateroute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SharedBlog />} />
            <Route path="vendor-view" element={<VendorView />} />
            <Route path="build-house" element={<BuildHouse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
