import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { ModalsRemoveEdit } from "../modules/interface";

export default function EditInventoryModal({
  modalStatus,
  setModalStatus,
}: ModalsRemoveEdit) {
  return (
    <Modal
      isOpen={modalStatus.edit}
      onClose={() => setModalStatus({ remove: false, edit: false })}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title Edit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>sdfsdfs</ModalBody>

        <ModalFooter>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}