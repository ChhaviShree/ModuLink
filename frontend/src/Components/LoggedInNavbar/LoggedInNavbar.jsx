import React from "react";
import { Flex, Image, Avatar, Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import logo from "../Assets/finallogo.png";

const LoggedInNavbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="md"
    >
      <Flex align="center">
        <Image
          src={logo}
          alt="Company Logo"
          boxSize="40px"
          objectFit="contain"
          marginRight="1rem"
        />
        <Box fontWeight="bold">Modulink</Box>
      </Flex>
      <Menu>
        {/* Avatar as Menu Button */}
        <MenuButton
          as={IconButton}
          aria-label="User Options"
          icon={
            <Avatar size="sm" name="User Avatar" src="/path/to/avatar.jpg" />
          }
          variant="outline"
        />
        <MenuList>
          <MenuItem
            onClick={() => {
              window.location.href = "/user/blog";
            }}
          >
            Posts
          </MenuItem>
          {localStorage.getItem("type") === "User" ? (
            <MenuItem>Build Your House</MenuItem>
          ) : (
            <MenuItem
              onClick={() => {
                window.location.href = "/user/vendor-view";
              }}
            >
              Vendor Location
            </MenuItem>
          )}
          <MenuItem>Profile</MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("type");
              window.location.href = "/";
            }}
          >
            <Box color="red.500">Log Out</Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default LoggedInNavbar;
