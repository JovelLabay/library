import React, { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

import {
  AddInventoryModalInterface,
  Inventorybtns,
  SectionQuantity,
} from "../modules/interface";
import {
  BsEmojiNeutral,
  BsFillFileArrowDownFill,
  BsFillFileArrowUpFill,
  BsFillFileEarmarkTextFill,
  BsFillFileMinusFill,
  BsFillFilePlusFill,
  BsFillPlusCircleFill,
  BsJournalArrowUp,
  BsJournalBookmark,
  BsJournalPlus,
  BsJoystick,
  BsNewspaper,
  BsPlus,
  BsTrash,
} from "react-icons/bs";

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineSelect,
} from "react-icons/ai";

export default function AddInventoryModal(props: AddInventoryModalInterface) {
  const {
    addInventoryModal,
    setAddInventoryModal,
    addInventory,
    // USESTATE
    addSection,
    setAddSection,
    addQuantity,
    setAddQuantity,
    addBook,
    setAddBook,
    addIsbn,
    setAddIsbn,
    addNumber,
    setAddNumber,
    addDatePublished,
    setAddDatePublished,
    addNotice,
    addBtn,
  } = props;

  // TOAST
  const toast = useToast();

  return (
    <Modal
      isOpen={addInventoryModal}
      onClose={() => setAddInventoryModal(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Section to Inventory</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {/* SECTION AND PIECES */}
          <HStack marginBottom="2" justifyContent="space-between">
            <div>
              <FormLabel htmlFor="email">Library Section</FormLabel>
              <Menu>
                <MenuButton
                  as={Button}
                  size="sm"
                  variant="outline"
                  rightIcon={<AiOutlineSelect />}
                >
                  {addSection}
                </MenuButton>
                <MenuList>
                  {Inventorybtns.map((Inventorybtn, index) => {
                    const icons = Inventorybtn.btnName;

                    return (
                      <MenuItem
                        key={index}
                        onClick={() => setAddSection(Inventorybtn.btnName)}
                        icon={
                          icons === "Journals & Magazines" ? (
                            <BsJournalArrowUp />
                          ) : icons === "Newspapers" ? (
                            <BsNewspaper />
                          ) : icons === "Reading Books" ? (
                            <BsJournalPlus />
                          ) : icons === "Reference Section" ? (
                            <BsJournalBookmark />
                          ) : (
                            <BsJoystick />
                          )
                        }
                      >
                        {Inventorybtn.btnName}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div>
              <FormLabel htmlFor="email">Book Quantity</FormLabel>
              <HStack spacing="0.5rem">
                <IconButton
                  aria-label="Search database"
                  size="sm"
                  variant="outline"
                  icon={<AiFillPlusCircle />}
                  onClick={() => setAddQuantity(addQuantity + 1)}
                />
                <strong
                  className={addQuantity < 0 ? " text-red-400" : undefined}
                >
                  {addQuantity}
                </strong>
                <IconButton
                  aria-label="Search database"
                  size="sm"
                  variant="outline"
                  icon={<AiFillMinusCircle />}
                  onClick={() => setAddQuantity(addQuantity - 1)}
                />
              </HStack>
            </div>
          </HStack>
          {/* DETAILS OF THE BOOK */}
          <FormControl>
            <FormLabel htmlFor="email">Book Title:</FormLabel>
            <Input
              id="text "
              type="text"
              value={addBook}
              onChange={(e) => setAddBook(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book ISBN:</FormLabel>
            <Input
              id="number"
              type="number"
              value={addIsbn}
              onChange={(e) => setAddIsbn(e.target.valueAsNumber)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book Number:</FormLabel>
            <Input
              id="number"
              type="number"
              value={addNumber}
              onChange={(e) => setAddNumber(e.target.valueAsNumber)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Date Published:</FormLabel>
            <Input
              id="date"
              type="date"
              value={addDatePublished}
              onChange={(e) => setAddDatePublished(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        {addNotice && (
          <Alert status="error">
            <BsEmojiNeutral />
            Enter the proper details of the book!
          </Alert>
        )}

        <ModalFooter>
          <Button variant="solid" colorScheme="green" onClick={addInventory}>
            {addBtn}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
