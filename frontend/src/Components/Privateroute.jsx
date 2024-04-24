import { Outlet } from "react-router-dom";
const Privateroute = () => {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/customer-login";
  } else {
    return <Outlet />;
  }
};
export default Privateroute;
