import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { ModalsRemoveEditView_2 } from "../modules/interface";

export default function RemoveInventoryModal({
  modalStatus,
  setModalStatus,
  deleteId,
  getSectionData,
}: ModalsRemoveEditView_2) {
  // DELETE
  const deleteInventory = () => {
    axios({
      method: "delete",
      url: `/api/delete-inventory/${deleteId.angIdBook}`,
      data: {
        section: deleteId.angSectionBook,
      },
    })
      .then((response) => {
        console.log(response);
        getSectionData();
        setModalStatus({ remove: false, edit: false, view: false });
      })
      .catch((error) => console.error(error));
  };

  return (
    <AlertDialog
      isOpen={modalStatus.remove}
      onClose={() =>
        setModalStatus({ remove: false, edit: false, view: false })
      }
      leastDestructiveRef={undefined}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete this book
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You want to delete this {deleteId.angTitleBook} ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              onClick={() =>
                setModalStatus({ remove: false, edit: false, view: false })
              }
            >
              Cancel
            </Button>
            <Button colorScheme="red" ml={3} onClick={deleteInventory}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
