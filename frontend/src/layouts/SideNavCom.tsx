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
import LeftRightMenus from "../components/LeftRightMenus";

export default function SideNavCom({
  activeBtn,
  setActiveBtn,
}: PropActiveBtn2) {
  // STATE OF THE BUTTONS
  const { addBtn, editBtn, removeBtn } = activeBtn;
  return (
    <VStack spacing={4} marginRight="2rem" marginLeft="2rem">
      <div className="side_nav_profile">
        <Avatar
          size="lg"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <h1 className="side_nav_name">dffdssd sngdfg</h1>
      </div>
      <LeftRightMenus activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
    </VStack>
  );
}
