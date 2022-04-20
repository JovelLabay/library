import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { AddInventoryModalInterface } from "../modules/interface";

export default function AddInventoryModal(props: AddInventoryModalInterface) {
  const { addInventoryModal, setAddInventoryModal } = props;
  return (
    <Modal
      isOpen={addInventoryModal.modal}
      onClose={() => setAddInventoryModal({ modal: false })}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {"Add Inventory to "}
          {addInventoryModal.inventoryName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>sdfsdfsd</ModalBody>

        <ModalFooter>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
