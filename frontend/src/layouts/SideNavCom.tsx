import React, { useEffect, useState } from "react";
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
  const { inventory, bookStatus, studentList } = activeBtn;

  interface Kulira {
    fullname: string | null;
    position: string | null;
  }

  const [adminDetails, setAdminDetails] = useState<Kulira>({
    fullname: "",
    position: "",
  });

  const [avatar, setAvatar] = useState<any>("");

  const fullD = sessionStorage.getItem("Fullname");
  const posiG = sessionStorage.getItem("Position");
  useEffect(() => {
    setAdminDetails({
      fullname: fullD,
      position: posiG,
    });
    setAvatar(fullD);
  }, []);

  return (
    <VStack spacing={4} marginRight="1rem" marginLeft="1rem">
      <div className="side_nav_profile">
        <Avatar marginBottom="1rem" size="lg" name={avatar} />
        <p className="side_nav_name">{adminDetails.fullname}</p>
        <p className="side_nav_name2">{adminDetails.position}</p>
      </div>
      <LeftRightMenus activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
    </VStack>
  );
}
