import { Button, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { ListModal, PropActiveBtn2 } from "../modules/interface";
import ModalList from "./ModalList";

export default function LeftRightMenus({
  activeBtn,
  setActiveBtn,
}: PropActiveBtn2) {
  // MODAL STATE OF STUDENT AND BOOK LIST
  const [modal, setModal] = useState<ListModal>({
    bookList: false,
    studentList: false,
  });

  const { addBtn, editBtn, removeBtn } = activeBtn;

  return (
    <>
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
        onClick={() => setModal({ bookList: true })}
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

      {/* LIST MODAL */}
      <ModalList modal={modal} setModal={setModal} />
    </>
  );
}
