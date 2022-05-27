import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormLabel,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  FormControl,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiOutlineSelect,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {
  BsJournalArrowUp,
  BsNewspaper,
  BsJournalPlus,
  BsJournalBookmark,
  BsJoystick,
} from "react-icons/bs";
import { Inventorybtns, ModalsRemoveEditView2 } from "../modules/interface";

export default function EditInventoryModal({
  modalStatus,
  setModalStatus,
  viewModalState,
  activeTable,
  getSectionData,
}: ModalsRemoveEditView2) {
  const toast = useToast();

  const [addQuantity, setAddQuantity] = useState(0);
  const [addBook, setAddBook] = useState("");
  const [addIsbn, setAddIsbn] = useState(0);
  const [author, setAuthor] = useState("");
  const [addDatePublished, setAddDatePublished] = useState("");

  const {
    theId,
    theTitle,
    theQuantity,
    theIsbn,
    theAuthor,
    theDatePublished,
    theDateAdded,
    theTimeAdded,
  } = viewModalState;

  useEffect(() => {
    setAddBook(theTitle);
    setAddQuantity(theQuantity);
    setAddIsbn(theIsbn);
    setAuthor(theAuthor);
    setAddDatePublished(theDatePublished);
  }, [modalStatus.edit]);

  // EDIT
  const editInventory = async () => {
    axios({
      method: "put",
      url: `/api/edit-inventory/${viewModalState.theId}`,
      data: {
        section: activeTable,
        quantity: addQuantity,
        title: addBook,
        isbn: addIsbn,
        author: author,
        datePublished: addDatePublished,
      },
    })
      .then((response) => {
        getSectionData();
        toast({
          position: "bottom-right",
          variant: "subtle",
          title: "Added Successfully",
          description: "Book has been edited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          containerStyle: {
            marginBottom: "1.5rem",
          },
        });
      })
      .catch((error) => {
        toast({
          position: "bottom-right",
          variant: "subtle",
          title: "Error occured",
          description: "There is a problem with the server or client",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: {
            marginBottom: "1.5rem",
          },
        });
      });
  };

  return (
    <Modal
      isOpen={modalStatus.edit}
      onClose={() =>
        setModalStatus({ remove: false, edit: false, view: false })
      }
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {/* <div className="modalImage addImage"> */}
          <div
            className={
              activeTable === "Journals & Magazines"
                ? "modalImage jm_Image"
                : activeTable === "Newspapers"
                ? "modalImage np_Image"
                : activeTable === "Reading Books"
                ? "modalImage rb_Image"
                : activeTable === "Reference Section"
                ? "modalImage rf_Image"
                : "modalImage rf_Image"
            }
          >
            <h1 className="bg-white absolute top-5 left-7 px-2 py-1 rounded">
              Edit Section to {activeTable}
            </h1>
          </div>
        </ModalHeader>
        <ModalCloseButton backgroundColor="white" />
        <ModalBody>
          {/* UPPER */}
          <HStack marginBottom="1.5" justifyContent="space-between">
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
                <strong>{addQuantity}</strong>
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
          <VStack spacing="2">
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
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            colorScheme="yellow"
            color="white"
            onClick={editInventory}
          >
            Udate Book
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
