import React from "react";
import {
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Divider,
  Avatar,
  Center,
} from "@chakra-ui/react";

import { ActiveBtn, PropActiveBtn2 } from "../modules/interface";

export default function SideNavCom({
  activeBtn,
  setActiveBtn,
}: PropActiveBtn2) {
  // STATE OF THE BUTTONS
  const { addBtn, editBtn, removeBtn } = activeBtn;
  return (
    <VStack spacing={4}>
      <div className="side_nav_profile">
        <Avatar
          size="lg"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <h1 className="side_nav_name">dffdssd sngdfg</h1>
      </div>
      <Button
        isActive={addBtn}
        width="80%"
        variant="outline"
        colorScheme="green"
        onClick={() =>
          setActiveBtn({
            addBtn: true,
            editBtn: false,
            removeBtn: false,
          })
        }
      >
        Add Inventory
      </Button>
      <Button
        isActive={editBtn}
        width="80%"
        variant="outline"
        colorScheme="yellow"
        onClick={() =>
          setActiveBtn({
            addBtn: false,
            editBtn: true,
            removeBtn: false,
          })
        }
      >
        Edit Inventory
      </Button>
      <Button
        isActive={removeBtn}
        width="80%"
        variant="outline"
        colorScheme="red"
        onClick={() =>
          setActiveBtn({
            addBtn: false,
            editBtn: false,
            removeBtn: true,
          })
        }
      >
        Remove Inventory
      </Button>
      <Divider />
      <Button width="80%" variant="solid" colorScheme="facebook">
        Book Status
      </Button>
      <Button width="80%" variant="solid" colorScheme="facebook">
        Student List
      </Button>
    </VStack>
  );
}
