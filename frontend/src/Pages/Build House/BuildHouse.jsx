import LoggedInNavbar from "../../Components/LoggedInNavbar/LoggedInNavbar";
import "./BuildHouse.css";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Dim1 from "./dim1.png";
import Dim2 from "./dim2.png";
import Dim3 from "./dim3.png";
import Dim4 from "./dim4.png";
import Type1 from "./type1.png";
import Type2 from "./type2.png";
import Type3 from "./type3.png";
import Type4 from "./type4.png";
const BuildHouse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [houseNo, setHouseNo] = useState(0);
  const handleOpenHouseModal = (houseNumber) => {
    setHouseNo(houseNumber);
    onOpen();
  };
  const [selected, setSelected] = useState(null);
  const [selected1, setSelected1] = useState(null);
  const handleSelect = (index) => {
    setSelected(index);
  };
  const handleSelect1 = (index) => {
    setSelected1(index);
  };
  console.log(houseNo);
  return (
    <div>
      <LoggedInNavbar />
      <div className="container">
        <div
          className="house1"
          style={{
            width: "600px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="house-tag">
              <h1
                style={{
                  color: "black",
                }}
              >
                2-Floor Modular House
              </h1>
            </div>
            <div className="house-button">
              <Button
                onClick={() => {
                  handleOpenHouseModal(1);
                }}
              >
                Select House
              </Button>
            </div>
          </div>
          <div>
            <iframe
              width="600"
              height="380"
              src="https://sketchfab.com/models/33975001ccb145b28c45f551db5a34e3/embed"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Seelect House Type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div
                  onClick={() => handleSelect(1)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected === 1 ? "orange" : "white",
                  }}
                >
                  <img src={Dim1} alt="dim1" />
                </div>
                <div
                  onClick={() => handleSelect(2)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected === 2 ? "orange" : "white",
                  }}
                >
                  <img src={Dim2} alt="dim2" />
                </div>
                <div
                  onClick={() => handleSelect(3)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected === 3 ? "orange" : "white",
                  }}
                >
                  <img src={Dim3} alt="dim3" />
                </div>
                <div
                  onClick={() => handleSelect(4)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected === 4 ? "orange" : "white",
                  }}
                >
                  <img src={Dim4} alt="dim4" />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  onClick={() => handleSelect1(1)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected1 === 1 ? "orange" : "white",
                  }}
                >
                  <img src={Type1} alt="dim1" />
                </div>
                <div
                  onClick={() => handleSelect1(2)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected1 === 2 ? "orange" : "white",
                  }}
                >
                  <img src={Type2} alt="dim2" />
                </div>
                <div
                  onClick={() => handleSelect1(3)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected1 === 3 ? "orange" : "white",
                  }}
                >
                  <img src={Type3} alt="dim3" />
                </div>
                <div
                  onClick={() => handleSelect1(4)}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: selected1 === 4 ? "orange" : "white",
                  }}
                >
                  <img src={Type4} alt="dim4" />
                </div>
              </div>
            </>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default BuildHouse;
