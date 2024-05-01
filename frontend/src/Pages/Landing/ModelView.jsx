import Navbar from "../../Components/Navbar/Navbar";
import "./ThreeDModels.css";
import { useLocation } from "react-router-dom";
/* eslint-disable jsx-a11y/iframe-has-title */
const ModelView = () => {
  const location = useLocation();
  const passedValue = location.state?.value;
  console.log(passedValue);
  return (
    <div className="model-parent">
      <Navbar menu={"models"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          width="853"
          height="480"
          src={passedValue}
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        />
      </div>
    </div>
  );
};

export default ModelView;
