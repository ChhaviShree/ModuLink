import React from "react";
import { Flex, Image, Avatar, Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HamburgerIcon,
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

        {/* Menu Items */}
        <MenuList>
          <MenuItem>Posts</MenuItem>
          <MenuItem>Requests</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>
            {/* Warning re colour for log out */}
            <Box color="red.500">Log Out</Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default LoggedInNavbar;
