import React from "react";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
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

        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="email">Book Title</FormLabel>
            <Input id="text " type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book ISBN</FormLabel>
            <Input id="number" type="number" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Book Number</FormLabel>
            <Input id="number" type="number" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
