import Navbar from "../../Components/Navbar/Navbar";
import "./ThreeDModels.css";
import { useNavigate } from "react-router-dom";
const ThreeDModels = () => {
  const navigate = useNavigate();
  return (
    <div className="model-parent">
      <Navbar menu={"models"} />

      <div className="model-container">
        <div className="model-card">
          <div className="model-image">
            <img
              src="https://keymodularhomes.com/wp-content/uploads/2020/11/MC9A3197.jpg"
              alt="THE BAYVIEW"
            />
            <div className="overlay">
              <div className="overlay-text">THE BAYVIEW</div>
              <button
                className="overlay-button"
                onClick={() => {
                  navigate("/model-view", {
                    state: {
                      value: "https://my.matterport.com/show/?m=scfRhLrvKpW",
                    },
                  });
                }}
              >
                View Model
              </button>
            </div>
          </div>

          <div className="model-image">
            <img
              src="https://keymodularhomes.com/wp-content/uploads/2016/05/chesapeake-exterior.jpg"
              alt="THE NEWPORT"
            />
            <div className="overlay">
              <div className="overlay-text">THE NEWPORT</div>
              <button
                className="overlay-button"
                onClick={() => {
                  navigate("/model-view", {
                    state: {
                      value: "https://my.matterport.com/show/?m=dky1vk2XGPB",
                    },
                  });
                }}
              >
                View Model
              </button>
            </div>
          </div>

          <div className="model-image">
            <img
              src="https://keymodularhomes.com/wp-content/uploads/2016/05/ridgefield-exterior.jpg"
              alt="THE RIDGEFIELD"
            />
            <div className="overlay">
              <div className="overlay-text">THE RIDGEFIELD</div>
              <button
                className="overlay-button"
                onClick={() => {
                  navigate("/model-view", {
                    state: {
                      value: "https://my.matterport.com/show/?m=AH5cvuR6ZPG",
                    },
                  });
                }}
              >
                View Model
              </button>
            </div>
          </div>

          <div className="model-image">
            <img
              src="https://keymodularhomes.com/wp-content/uploads/2016/05/chesapeake-exterior.jpg"
              alt="THE MANCHESTER"
            />
            <div className="overlay">
              <div className="overlay-text">THE MANCHESTER</div>
              <button
                className="overlay-button"
                onClick={() => {
                  navigate("/model-view", {
                    state: {
                      value: "https://my.matterport.com/show/?m=WiJjZXU4vuY",
                    },
                  });
                }}
              >
                View Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDModels;
