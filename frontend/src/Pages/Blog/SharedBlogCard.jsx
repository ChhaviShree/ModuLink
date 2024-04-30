import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { DeleteIcon } from "@chakra-ui/icons";
import Loader from "../../Components/Loaders/Loader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import Whatsapp from "./Whatsapp.svg";
import Facebook from "./Facebook.svg";
import Twitter from "./Twitter.svg";
const SharedBlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalBody, setModalBody] = useState({});
  const [writeComment, setWriteComment] = useState("");
  const [gotComment, setGotComment] = useState([]);
  const [commentLoad, setCommentLoad] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen2, setIsOpen2] = useState(false);
  const [shareBody, setShareBody] = useState({});
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    let paramsId = window.location.pathname.split("/")[3];
    try {
      const response = await fetch(
        `https://modu-link.vercel.app/blogs/getblog/${paramsId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLikeUnlike = async (id) => {
    try {
      const response = await fetch(`https://modu-link.vercel.app/blogs/like/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      fetchAllBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = (id, comments, name, photo, title) => {
    setModalBody({
      id,
      comments,
      name,
      photo,
      title,
    });
    getComment(id);
    onOpen();
  };
  const getComment = async (id) => {
    try {
      const response = await fetch(
        `https://modu-link.vercel.app/blogs/getcomments/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setGotComment(data);
      setCommentLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  const postComment = async (id) => {
    try {
      const response = await fetch(
        `https://modu-link.vercel.app/blogs/comment/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            comment: writeComment,
            type: localStorage.getItem("type"),
          }),
        }
      );
      const data = await response.json();
      setWriteComment("");
      getComment(id);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`https://modu-link.vercel.app/blogs/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      fetchAllBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = (id, name, photo, title) => {
    setIsOpen2(true);
    setShareBody({
      id,
      name,
      photo,
      title,
    });
  };
  const onClose2 = () => {
    setIsOpen2(false);
  };

  const currentHost = `${window.location.protocol}//${window.location.hostname}/user/blog/${shareBody.id}`;
  const title = "Check out this awesome Blog on ModuLink";
  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${title}: ${currentHost}`
      )}`,
      "_blank"
    );
  };
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentHost
      )}`,
      "_blank"
    );
  };
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentHost
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Card maxW="md">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={blogs?.details?.name}
                      src={blogs?.details?.photo}
                    />

                    <Box>
                      <Heading size="sm">{blogs?.details?.name}</Heading>
                      <Text>ModuLink User</Text>
                    </Box>
                  </Flex>
                  {blogs?.posted === true && (
                    <IconButton
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      mt={2}
                      onClick={() => {
                        deleteBlog(blogs?.blog?._id);
                      }}
                    />
                  )}
                </Flex>
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {blogs?.blog?.blog_title}
                </Text>
                <Text>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <ReactQuill
                      theme={"bubble"}
                      readOnly={true}
                      modules={{
                        toolbar: false,
                      }}
                      value={blogs?.blog?.blog_description}
                    />
                  </div>
                </Text>
              </CardBody>
              <Image
                objectFit="cover"
                src={blogs?.blog?.cover_image}
                alt="Cover Image"
              />

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={blogs?.likedByUser ? <AiFillLike /> : <BiLike />}
                  onClick={() => {
                    handleLikeUnlike(blogs?.blog?._id);
                  }}
                >
                  {blogs?.likedByUser ? "Liked" : "Like"}
                </Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiChat />}
                  onClick={() => {
                    handleComment(
                      blogs?.blog?._id,
                      blogs?.blog?.comments,
                      blogs?.details?.name,
                      blogs?.details?.photo,
                      blogs?.blog?.blog_title
                    );
                  }}
                >
                  Comment
                </Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiShare />}
                  onClick={() => {
                    handleShare(
                      blogs?.blog?._id,
                      blogs?.details?.name,
                      blogs?.details?.photo,
                      blogs?.blog?.blog_title
                    );
                  }}
                >
                  Share
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar src={modalBody?.photo} />
                <Box>
                  <Heading size="sm">{modalBody?.name}</Heading>
                  <Text>{modalBody?.title}</Text>
                </Box>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              <div>
                {commentLoad ? (
                  <Loader />
                ) : (
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    {gotComment && gotComment?.comments?.length > 0 ? (
                      <>
                        {gotComment?.comments?.map((comment) => (
                          <div
                            key={comment._id}
                            style={{
                              marginTop: "10px",
                            }}
                          >
                            <Flex spacing="4">
                              <Avatar src={comment?.authorDetails?.photo} />
                              <Box
                                style={{
                                  marginLeft: "10px",
                                }}
                              >
                                <Heading size="sm">
                                  {comment?.authorDetails?.name}
                                </Heading>
                                <Text>{comment?.comment}</Text>
                              </Box>
                            </Flex>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>Be the first one to share yor thoughts</>
                    )}
                  </div>
                )}
              </div>
            }
          </ModalBody>

          <ModalFooter>
            <Input
              placeholder="Add a comment"
              value={writeComment}
              onChange={(e) => {
                setWriteComment(e.target.value);
              }}
            />
            <Button
              colorScheme="blue"
              mr={3}
              style={{ marginLeft: "5px" }}
              onClick={() => {
                postComment(modalBody?.id);
              }}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar src={shareBody?.photo} />
                <Box>
                  <Heading size="sm">{modalBody?.name}</Heading>
                  <Text>{shareBody?.title}</Text>
                </Box>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <button onClick={shareOnWhatsApp}>
                <img
                  src={Whatsapp}
                  alt="Whatsapp"
                  style={{ width: "60px", height: "60px" }}
                />
              </button>
              <button onClick={shareOnFacebook}>
                <img
                  src={Facebook}
                  alt="Facebook"
                  style={{ width: "60px", height: "60px" }}
                />
              </button>
              <button onClick={shareOnTwitter}>
                <img
                  src={Twitter}
                  alt="Twitter"
                  style={{ width: "60px", height: "55px" }}
                />
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SharedBlogCard;
