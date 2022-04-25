import React, { useState } from "react";

// CHAKRA UI
import {
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
} from "@chakra-ui/react";

// ICONS
import { BsChevronDown, BsList } from "react-icons/bs";

import { ActiveBtn, PropActiveBtn2, ListModal } from "../modules/interface";
import LeftRightMenus from "./LeftRightMenus";
import ModalList from "./ModalList";

export default function TopRightMenuCom({
  activeBtn,
  setActiveBtn,
}: PropActiveBtn2) {
  // DRAWER
  const [drawer, setDrawer] = React.useState(false);

  return (
    <>
      <div className="nav_top_right">
        <Button variant="ghost" size="sm">
          Create Admin
        </Button>
        <Button variant="ghost" size="sm">
          Logout
        </Button>
      </div>
      <div className="nav_top_right2">
        <IconButton
          variant="outline"
          size="sm"
          colorScheme="blue"
          aria-label="Nav Menu"
          icon={<BsList />}
          onClick={() => setDrawer(!false)}
        />
      </div>

      {/* DRAWER */}
      <Drawer
        isOpen={drawer}
        placement="right"
        onClose={() => setDrawer(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Library Menu</DrawerHeader>

          <DrawerBody>
            <LeftRightMenus activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
          </DrawerBody>

          <DrawerFooter>
            <div className="w-full">
              <Button
                width="100%"
                variant="outline"
                colorScheme="blue"
                marginBottom="0.5rem"
              >
                Create Admin
              </Button>
              <Button
                width="100%"
                variant="outline"
                colorScheme="blue"
                marginBottom="0.5rem"
              >
                Logout
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
