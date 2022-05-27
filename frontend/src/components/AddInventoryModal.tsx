import React, { useState } from "react";

import {
  Alert,
  background,
  Box,
  Button,
  Divider,
  Editable,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Image,
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

import bookSelf from "../assets/addModal_image/book_shelf.jpg";

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
    author,
    setAuthor,
    addDatePublished,
    setAddDatePublished,
    addNotice,
    addBtn,
  } = props;

  return (
    <Modal
      isOpen={addInventoryModal}
      onClose={() => setAddInventoryModal(false)}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className="modalImage addImage">
            <h1 className="bg-white absolute top-5 left-7 px-2 py-1 rounded">
              Add Section to Inventory
            </h1>
          </div>
        </ModalHeader>
        <ModalCloseButton backgroundColor="white" />

        <ModalBody>
          {/* SECTION AND PIECES */}
          <HStack marginBottom="1" justifyContent="space-between">
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
              placeholder="Enter book Title"
              id="text "
              type="text"
              value={addBook}
              onChange={(e) => setAddBook(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book ISBN:</FormLabel>
            <Input
              placeholder="Enter book isbn"
              id="number"
              type="number"
              value={addIsbn}
              onChange={(e) => setAddIsbn(e.target.valueAsNumber)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book Author:</FormLabel>
            <Input
              placeholder="Enter book author"
              id="text"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Date Published:</FormLabel>
            <Input
              placeholder="Enter book published"
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
