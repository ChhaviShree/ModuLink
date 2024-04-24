import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  SimpleGrid,
  Heading,
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
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import Navbar from '../Components/Navbar/Navbar';
import './VendorView.css';

export default function VendorView() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Enter Location',
      description: 'Description of My Location',
      houses: [{ type: '', specs: '' }],
      images: [],
    },
    {
      id: 2,
      name: 'Enter Location',
      description: 'Description of Location 2',
      houses: [{ type: '', specs: '' }],
      images: [],
    },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [addImageModal, setAddImageModal] = useState(false);
  const cancelRef = useRef();

  const addVendorDetails = async () => {
    try {
      const response = await axios.post('http://localhost:4000/vendor-details/add-vendor-details');
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching vendor details:', error);
    }
  };

  const handleAddLocation = () => {
    const newLocation = {
      id: locations.length + 1,
      name: 'New Location',
      description: 'Description of New Location',
      houses: [{ type: '', specs: '' }],
      images: [],
    };
    setLocations([...locations, newLocation]);
  };

  const handleNameChange = (locIndex, newName) => {
    const updatedLocations = [...locations];
    updatedLocations[locIndex].name = newName;
    setLocations(updatedLocations);
  };

  const handleAddHouse = (locIndex) => {
    const newHouse = { type: '', specs: '' };
    const updatedLocations = [...locations];
    updatedLocations[locIndex].houses.push(newHouse);
    setLocations(updatedLocations);
  };

  const handleDeleteHouse = (locIndex, houseIndex) => {
    const updatedLocations = [...locations];
    updatedLocations[locIndex].houses.splice(houseIndex, 1);
    setLocations(updatedLocations);
  };

  const handleDeleteLocation = () => {
    const updatedLocations = locations.filter((loc) => loc.id !== selectedLocation.id);
    setLocations(updatedLocations);
    setDeleteConfirm(false);
    setSelectedLocation(null);
  };

  const handleAddImage = (locIndex) => {
    console.log('Add Image Clicked for location:', locations[locIndex].name);
    setAddImageModal(true);
  };

  return (
    <div className='vendor-info'>
      <Navbar menu={'vendor'} />
      <div className='card-container'>
        <SimpleGrid spacing={4} columns={{ sm: 1, md: 2 }} maxWidth='1200px' mx='auto'>
          {locations.map((location, locIndex) => (
            <Card key={location.id}>
              <CardHeader>
                <Input
                  placeholder='Location Name'
                  value={location.name}
                  onChange={(e) => handleNameChange(locIndex, e.target.value)}
                />
              </CardHeader>
              <CardBody>
                <Text>{location.description}</Text>
                {location.houses.map((house, houseIndex) => (
                  <Box key={houseIndex} mt={4}>
                    <Input
                      placeholder='Type of House'
                      value={house.type}
                      onChange={(e) => {
                        const updatedLocations = [...locations];
                        updatedLocations[locIndex].houses[houseIndex].type = e.target.value;
                        setLocations(updatedLocations);
                      }}
                    />
                    <Input
                      placeholder='Specifications'
                      value={house.specs}
                      onChange={(e) => {
                        const updatedLocations = [...locations];
                        updatedLocations[locIndex].houses[houseIndex].specs = e.target.value;
                        setLocations(updatedLocations);
                      }}
                    />
                    <IconButton
                      aria-label='Delete House'
                      icon={<DeleteIcon />}
                      colorScheme='red'
                      onClick={() => handleDeleteHouse(locIndex, houseIndex)}
                      mt={2}
                    />
                  </Box>
                ))}
                <Button leftIcon={<AddIcon />} onClick={() => handleAddHouse(locIndex)} mt={4}>
                  Add House
                </Button>
              </CardBody>
              <IconButton
                aria-label='Add Image'
                icon={<AddIcon />}
                colorScheme='blue'
                onClick={() => handleAddImage(locIndex)}
                m={2}
              >
                Add Image
              </IconButton>
              <IconButton
                aria-label='Delete Location'
                icon={<DeleteIcon />}
                colorScheme='red'
                onClick={() => {
                  setSelectedLocation(location);
                  setDeleteConfirm(true);
                }}
                m={2}
                >
                Delete Location
                </IconButton>
            </Card>
          ))}
          </SimpleGrid>
          <IconButton
          aria-label='Add Location'
          icon={<AddIcon />}
          colorScheme='blue'
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Location
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this location?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setDeleteConfirm(false)}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteLocation} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

     
      {addImageModal && (
        <AlertDialog isOpen={addImageModal} leastDestructiveRef={cancelRef} onClose={() => setAddImageModal(false)}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Add Image
              </AlertDialogHeader>
              <AlertDialogBody>
                <Input type='file' placeholder='Add Image' onChange={(e) => console.log(e.target.files[0])} />
                <Text fontSize='sm' mt={2}>
                  Please upload an image for this location.
                </Text>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => setAddImageModal(false)}>
                  Cancel
                </Button>
                <Button colorScheme='blue' ml={3}>
                  Add Image
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </div>
  );
}