import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { ModalsRemoveEditView, View } from "../modules/interface";

export default function ViewInventoryModal({
  modalStatus,
  setModalStatus,
  activeTable,
  viewModalState,
}: View) {
  return (
    <Modal
      isOpen={modalStatus.view}
      onClose={() =>
        setModalStatus({ remove: false, edit: false, view: false })
      }
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
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
              View From Inventory | {activeTable}
            </h1>
          </div>
        </ModalHeader>
        <ModalCloseButton backgroundColor="white" />
        <ModalBody>
          <VStack alignItems="start" spacing="5">
            <p>
              Database ID: <strong>{viewModalState.theId}</strong>
            </p>
            <p>
              Title of the Book: <strong>{viewModalState.theTitle}</strong>
            </p>
            <p>
              Book ISBN: <strong>{viewModalState.theIsbn}</strong>
            </p>
            <p>
              Author of the Book: <strong>{viewModalState.theAuthor}</strong>
            </p>
            <p>
              Date when Book being published:{" "}
              <strong>{viewModalState.theDatePublished}</strong>
            </p>
            <Divider />
            <div
              className={
                viewModalState.theQuantity <= 0
                  ? "flex w-full justify-between  bg-red-300 px-2 py-1.5 rounded-md"
                  : "flex w-full justify-between  bg-green-500 px-2 py-1.5 rounded-md"
              }
            >
              <p className="text-white">Book Availablity:</p>
              <p className="text-white font-bold">
                {" "}
                {viewModalState.theQuantity}
                {viewModalState.theQuantity >= 1
                  ? " remaining"
                  : " Pls wait for a piece of book to be returned"}
              </p>
            </div>
          </VStack>
          <HStack
            justifyContent="space-between"
            marginTop="1.5rem"
            backgroundColor="blue.300"
            paddingTop="1rem"
            paddingBottom="1rem"
            paddingRight="1.5rem"
            paddingLeft="1.5rem"
            borderRadius="10px"
            marginBottom="1.5rem"
          >
            <p className="text-white">
              Time the Book added to Inventory:
              <strong className="text-white">
                {"  "}
                {viewModalState.theTimeAdded}
              </strong>
            </p>
            <p className="text-white">
              Date the Book added to Inventory:
              <strong className="text-white">
                {"  "}
                {viewModalState.theDateAdded}
              </strong>
            </p>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
