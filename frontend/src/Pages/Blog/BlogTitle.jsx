import { Button, Input } from "@chakra-ui/react";
import "./BlogTitle.css";
import BlogHome from "./bloghome.webp";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const BlogTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bannerImages, setBannerImages] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const apiKey = "4b10ae2f8c724e32c293659abe5af74b";
  const uploadUrl = "https://api.imgbb.com/1/upload";
  const uploadCoverPhoto = async (e) => {
    setCoverPhoto(e.target.files[0]);
  };
  const handleBannerUpload = async (e) => {
    setBannerImages(e.target.files);
  };
  const postUpload = async () => {
    const formDatas = new FormData();
    formDatas.append("key", apiKey);
    formDatas.append("image", coverPhoto);
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formDatas,
    });
    const result = await response.json();
    const coverPhotoUrl = result.data.url;

    const bannerUrls = [];
    for (let i = 0; i < bannerImages.length; i++) {
      const formData = new FormData();
      formData.append("key", apiKey);
      formData.append("image", bannerImages[i]);
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      bannerUrls.push(result.data.url);
    }
    const data = {
      blog_title: title,
      blog_description: description,
      cover_image: coverPhotoUrl,
      posters: bannerUrls,
      authorType: "User",
    };
    const response1 = await fetch("https://modu-link.vercel.app/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    const result1 = await response1.json();
    console.log(result1);
    onClose();
  };
  return (
    <div className="blogContainer">
      <div className="blogHeaderParent">
        <div className="blogHeader">
          Discover the World of <br />
          Modular Houses with <br />
          Modu link <br />
          Modular Houses
        </div>
        <div className="waveSvgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="waveSvg"
          >
            <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6" />
          </svg>
        </div>
        <div className="blogHeaderContent">
          Welcome to Modu link, your go-to source for all-things <br /> modular
          housing. Our website is dedicated to <br />
          showcasing the latest trends in modular home design <br />
          and construction, providing expert insights and <br />
          recommendations, and offering a platform for builders <br /> and
          buyers to connect and collaborate.
        </div>
        <Button
          colorScheme="blue"
          size="lg"
          style={{
            marginTop: "20px",
          }}
          onClick={onOpen}
        >
          Start Posting{" "}
          <span
            style={{
              marginLeft: "10px",
            }}
          >
            <ArrowForwardIcon />
          </span>
        </Button>
      </div>
      <div className="blogHeaderImage">
        <img src={BlogHome} alt="waveSvg" className="blogImage" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            style={{
              marginTop: "40px",
            }}
          >
            <Input
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label
              style={{
                color: "black",
                marginTop: "20px",
                fontWeight: "500",
              }}
            >
              Cover Photo
            </label>
            <div
              style={{
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <input
                type="file"
                accept="image/*"
                style={{
                  color: "black",
                }}
                onChange={(e) => {
                  uploadCoverPhoto(e);
                }}
              />
            </div>
            <label
              style={{
                color: "black",
                marginTop: "20px",
                fontWeight: "500",
              }}
            >
              Description
            </label>
            <ReactQuill
              theme="snow"
              style={{
                height: "260px",
                width: "100%",
                borderRadius: "8px",
              }}
              value={description}
              onChange={(value) => {
                setDescription(value);
              }}
            />
            <label
              style={{
                color: "black",
                marginTop: "60px",
                fontWeight: "500",
              }}
            >
              Relevant Posters
            </label>
            <div
              style={{
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <input
                type="file"
                accept="image/*"
                style={{
                  color: "black",
                }}
                multiple
                onChange={(e) => handleBannerUpload(e)}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={postUpload}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogTitle;
