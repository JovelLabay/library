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

  const { inventory, bookStatus, studentList } = activeBtn;

  return (
    <>
      <Button
        isActive={inventory}
        width="100%"
        variant="outline"
        colorScheme="red"
        marginBottom="1rem"
        onClick={() =>
          setActiveBtn({
            inventory: true,
            bookStatus: false,
            studentList: false,
          })
        }
      >
        Inventory
      </Button>
      <Button
        isActive={bookStatus}
        width="100%"
        variant="outline"
        colorScheme="green"
        marginBottom="1rem"
        onClick={() =>
          setActiveBtn({
            inventory: false,
            bookStatus: true,
            studentList: false,
          })
        }
      >
        Book Status
      </Button>
      <Button
        isActive={studentList}
        width="100%"
        variant="outline"
        colorScheme="yellow"
        marginBottom="1rem"
        onClick={() =>
          setActiveBtn({
            inventory: false,
            bookStatus: false,
            studentList: true,
          })
        }
      >
        Student Status
      </Button>
      <Divider />
      <Button
        width="100%"
        variant="solid"
        colorScheme="facebook"
        marginBottom="1rem"
      >
        Add Humans
      </Button>

      {/* LIST MODAL */}
      <ModalList modal={modal} setModal={setModal} />
    </>
  );
}
