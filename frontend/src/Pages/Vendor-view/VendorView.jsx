import React, { useState, useRef } from "react";
import axios from "axios";
import {
  SimpleGrid,
  Text,
  Button,
  Input,
  Box,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import LoggedInNavbar from "../../Components/LoggedInNavbar/LoggedInNavbar";
import "./VendorView.css";

export default function VendorView() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "",
      description: "Description of Location 1",
      houses: [{ type: "", specs: "" }],
      images: [],
      selectedImages: [],
      bannerImages: [],
    },
    {
      id: 2,
      name: "",
      description: "Description of Location 2",
      houses: [{ type: "", specs: "" }],
      images: [],
      selectedImages: [],
      bannerImages: [],
    },
  ]);

  console.log("Locations:", locations);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [addImageModal, setAddImageModal] = useState(false);
  const [profilePhotos, setProfilePhotos] = useState([]);
  const cancelRef = useRef();

  const handleAddLocation = () => {
    const newLocation = {
      id: locations.length + 1,
      name: "New Location",
      description: "Description of New Location",
      houses: [{ type: "", specs: "" }],
      images: [],
      selectedImages: [],
      bannerImages: [],
    };
    setLocations([...locations, newLocation]);
  };

  const handleNameChange = (locIndex, newName) => {
    const updatedLocations = [...locations];
    updatedLocations[locIndex].name = newName;
    setLocations(updatedLocations);
  };

  const handleDeleteLocation = () => {
    const updatedLocations = locations.filter(
      (loc) => loc.id !== selectedLocation.id
    );
    setLocations(updatedLocations);
    setDeleteConfirm(false);
    setSelectedLocation(null);
  };

  const handlePhotoChange = (event) => {
    const selectedPhotos = Array.from(event.target.files);
    setProfilePhotos(selectedPhotos);
    const previewUrls = selectedPhotos.map((photo) =>
      URL.createObjectURL(photo)
    );
    const updatedLocations = [...locations];
    updatedLocations[selectedLocation.id - 1].selectedImages = previewUrls;
    setLocations(updatedLocations);

    const updatedLocationsWithBanners = [...locations];
    updatedLocationsWithBanners[selectedLocation.id - 1].bannerImages =
      selectedPhotos;
    setLocations(updatedLocationsWithBanners);
  };
  const handleImageUpload = async () => {
    const apiKey = "4b10ae2f8c724e32c293659abe5af74b";
    const uploadUrl = "https://api.imgbb.com/1/upload";
    try {
      const imageUrls = await Promise.all(
        selectedLocation.bannerImages.map(async (image) => {
          const formData = new FormData();
          formData.append("image", image);
          formData.append("key", apiKey);
          const response = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
          });
          const responseData = await response.json();
          return responseData.data.url;
        })
      );
      const updatedLocations = [...locations];
      updatedLocations[selectedLocation.id - 1].images = imageUrls;
      setLocations(updatedLocations);
      setAddImageModal(false);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  const handleSubmit = async () => {
    try {
      const modifiedLocations = locations.map((location) => {
        const { name, description, houses, images } = location;
        return {
          name,
          description,
          houses,
          images,
        };
      });

      const response = await fetch(
        "https://modu-link.vercel.app/vendor-details/add-vendor-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ locations: modifiedLocations }), 
        }
      );
      const data = await response.json();
      console.log("Data:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleDeleteHouse = (locIndex, houseIndex) => {
    const updatedLocations = [...locations];
    updatedLocations[locIndex].houses.splice(houseIndex, 1);
    setLocations(updatedLocations);
  };

  const handleAddHouse = (locIndex) => {
    const newHouse = { type: "", specs: "" };
    const updatedLocations = [...locations];
    updatedLocations[locIndex].houses.push(newHouse);
    setLocations(updatedLocations);
  };

  const handleAddImage = (locIndex) => {
    setSelectedLocation(locations[locIndex]);
    setAddImageModal(true);
  };

  return (
    <>
      <LoggedInNavbar />
      <div className="vendor-info">
        <div
          className="card-container"
          style={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {locations.map((location, locIndex) => (
              <Card key={location.id}>
                <CardHeader>
                  <Input
                    placeholder="Location Name"
                    value={location.name}
                    onChange={(e) => handleNameChange(locIndex, e.target.value)}
                  />
                </CardHeader>
                <CardBody>
                  <Text>{location.description}</Text>
                  {location.houses.map((house, houseIndex) => (
                    <Box key={houseIndex} mt={4}>
                      <Input
                        placeholder="Type of House"
                        value={house.type}
                        onChange={(e) => {
                          const updatedLocations = [...locations];
                          updatedLocations[locIndex].houses[houseIndex].type =
                            e.target.value;
                          setLocations(updatedLocations);
                        }}
                      />
                      <Input
                        placeholder="Specifications"
                        value={house.specs}
                        onChange={(e) => {
                          const updatedLocations = [...locations];
                          updatedLocations[locIndex].houses[houseIndex].specs =
                            e.target.value;
                          setLocations(updatedLocations);
                        }}
                        style={{
                          marginTop: "10px",
                        }}
                      />
                      <IconButton
                        aria-label="Delete House"
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        onClick={() => handleDeleteHouse(locIndex, houseIndex)}
                        mt={2}
                      />
                    </Box>
                  ))}
                  <Button
                    leftIcon={<AddIcon />}
                    onClick={() => handleAddHouse(locIndex)}
                    mt={4}
                  >
                    Add House
                  </Button>
                </CardBody>
                <IconButton
                  aria-label="Add Image"
                  icon={<AddIcon />}
                  colorScheme="blue"
                  onClick={() => handleAddImage(locIndex)}
                  m={2}
                >
                  Add Image
                </IconButton>
                <IconButton
                  aria-label="Delete Location"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => {
                    setSelectedLocation(location);
                    setDeleteConfirm(true);
                  }}
                  m={2}
                >
                  Delete Location
                </IconButton>
                {location.images.length > 0 && (
                  <div className="image-container">
                    {location.selectedImages.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index}`}
                        className="card-image"
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
          <IconButton
            aria-label="Add Location"
            icon={<AddIcon />}
            colorScheme="blue"
            onClick={handleAddLocation}
            mt={4}
            mr={7}
          >
            Add Location
          </IconButton>
        </div>

        <AlertDialog
          isOpen={deleteConfirm}
          leastDestructiveRef={cancelRef}
          onClose={() => setDeleteConfirm(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Location
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to delete this location?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => setDeleteConfirm(false)}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDeleteLocation} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        {addImageModal && (
          <AlertDialog
            isOpen={addImageModal}
            leastDestructiveRef={cancelRef}
            onClose={() => setAddImageModal(false)}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Add Image
                </AlertDialogHeader>
                <AlertDialogBody>
                  <Input
                    type="file"
                    multiple
                    placeholder="Add Image"
                    onChange={handlePhotoChange}
                  />
                  <Text fontSize="sm" mt={2}>
                    Please upload images for this location.
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button
                    ref={cancelRef}
                    onClick={() => setAddImageModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button colorScheme="blue" ml={3} onClick={handleImageUpload}>
                    Add Images
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        )}

        {profilePhotos && profilePhotos.length > 0 && (
          <Box mt={4} mx="auto" textAlign="center">
            {profilePhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index}`}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
            ))}
          </Box>
        )}

        <div className="loc-button">
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit All Data
          </Button>
        </div>
      </div>
    </>
  );
}
