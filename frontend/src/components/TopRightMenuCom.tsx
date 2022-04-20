import React from "react";

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

import { ActiveBtn } from "../modules/interface";

interface PropActiveBtn {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
}

export default function TopRightMenuCom({
  activeBtn,
  setActiveBtn,
}: PropActiveBtn) {
  // DRAWER
  const [drawer, setDrawer] = React.useState(false);

  // STATE OF THE BUTTONS
  const { addBtn, editBtn, removeBtn } = activeBtn;

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
            <Button
              isActive={addBtn}
              width="100%"
              variant="outline"
              colorScheme="green"
              marginBottom="1rem"
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
              width="100%"
              variant="outline"
              colorScheme="yellow"
              marginBottom="1rem"
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
              width="100%"
              variant="outline"
              colorScheme="red"
              marginBottom="1rem"
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
            <Button
              width="100%"
              variant="solid"
              colorScheme="facebook"
              marginBottom="1rem"
              marginTop="1rem"
            >
              Book Status
            </Button>
            <Button
              width="100%"
              variant="solid"
              colorScheme="facebook"
              marginBottom="1rem"
            >
              Student List
            </Button>
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
