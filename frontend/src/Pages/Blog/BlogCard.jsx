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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import Loader from "../../Components/Loaders/Loader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalBody, setModalBody] = useState({});
  const [writeComment, setWriteComment] = useState("");
  const [gotComment, setGotComment] = useState([]);
  const [commentLoad, setCommentLoad] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      const response = await fetch("http://localhost:4000/blogs/allblogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);

  const handleLikeUnlike = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/like/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      fetchAllBlogs();
      console.log(data);
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
        `http://localhost:4000/blogs/getcomments/${id}`,
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
  console.log(gotComment);
  const postComment = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/blogs/comment/${id}`,
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
      console.log(data);
      setWriteComment("");
      getComment(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      {/* put the card at the center of the screen */}
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
            {blogs &&
              blogs?.blogsWithDetails?.map((blog) => (
                <div key={blog._id}>
                  <Card maxW="lg">
                    <CardHeader>
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Avatar src={blog?.details?.photo} />

                          <Box>
                            <Heading size="sm">{blog?.details?.name}</Heading>
                            <Text>ModuLink User</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Text
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        {blog?.blog?.blog_title}
                      </Text>
                      <Text>
                        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                          <ReactQuill
                            theme={"bubble"}
                            readOnly={true}
                            modules={{
                              toolbar: false,
                            }}
                            value={blog?.blog?.blog_description}
                          />
                        </div>
                      </Text>
                    </CardBody>
                    <Image
                      objectFit="cover"
                      src={blog?.blog?.cover_image}
                      alt="Chakra UI"
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
                        leftIcon={
                          blog?.likedByUser ? <AiFillLike /> : <BiLike />
                        }
                        onClick={() => {
                          handleLikeUnlike(blog?.blog?._id);
                        }}
                      >
                        {blog?.likedByUser ? "Liked" : "Like"}
                      </Button>
                      <Button
                        flex="1"
                        variant="ghost"
                        leftIcon={<BiChat />}
                        onClick={() => {
                          handleComment(
                            blog?.blog?._id,
                            blog?.blog?.comments,
                            blog?.details?.name,
                            blog?.details?.photo,
                            blog?.blog?.blog_title
                          );
                        }}
                      >
                        Comment
                      </Button>
                      <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                        Share
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
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
    </div>
  );
};

export default BlogCard;
