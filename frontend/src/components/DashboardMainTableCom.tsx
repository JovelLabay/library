import {
  IconButton,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { BsTrash, BsPencilSquare, BsEye } from "react-icons/bs";

import {
  ActiveBtn,
  PropActiveBtn,
  RemoveEditView,
  PropActiveBtn5,
  TheViewModals,
} from "../modules/interface";
import BorrowReturnCom from "./BorrowReturnCom";
import EditInventoryModal from "./EditInventoryModal";
import RemoveInventoryModal from "./RemoveInventoryModal";
import ViewInventoryModal from "./ViewInventoryModal";

export default function DashboardMainTableCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
  sectionList,
  // USESTATE PROPS
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
  getSectionData,
  // RETURN AND BORROW
  rbIcons,
  setRbIcons,
}: PropActiveBtn5) {
  // STATE OF THE BUTTONS
  const { inventory, bookStatus, studentList } = activeBtn;
  const props = {
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
  };

  // MODALS FOR EDIT AND REMOVE
  const [modalStatus, setModalStatus] = useState<RemoveEditView>({
    remove: false,
    edit: false,
    view: false,
  });

  // VIEW MODAL
  const [viewModalState, setViewModalState] = useState<TheViewModals>({
    theId: "",
    theTitle: "",
    theQuantity: 0,
    theIsbn: 0,
    theAuthor: "",
    theDatePublished: "",
    theDateAdded: "",
    theTimeAdded: "",
  });

  // DELETE MODAL
  const [deleteId, setDeleteId] = useState({
    angTitleBook: "",
    angIdBook: "",
    angSectionBook: "",
  });

  return (
    <div className="">
      {activeTable === "Select Table" ? (
        <h1 className="text-center mt-10 text-xl font-bold">
          Select a table to display list
        </h1>
      ) : (
        <TableContainer>
          {studentList === true ? (
            <BorrowReturnCom rbIcons={rbIcons} setRbIcons={setRbIcons} />
          ) : (
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Options</Th>
                  <Th>Book Title</Th>
                  <Th>Book ISBN</Th>
                  <Th>Book Author</Th>
                  <Th>
                    {bookStatus === true ? "Availability" : "Date Published"}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {sectionList.map((sectionData, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        {inventory && (
                          <>
                            <IconButton
                              aria-label="Search database"
                              size="sm"
                              variant="outline"
                              marginRight="0.5rem"
                              icon={<BsTrash />}
                              onClick={() => {
                                setModalStatus({
                                  remove: true,
                                  edit: false,
                                  view: false,
                                });
                                setDeleteId({
                                  angTitleBook: sectionData.title,
                                  angIdBook: sectionData._id,
                                  angSectionBook: activeTable,
                                });
                              }}
                            />
                            <IconButton
                              aria-label="Search database"
                              size="sm"
                              variant="outline"
                              marginRight="0.5rem"
                              icon={<BsPencilSquare />}
                              onClick={() => {
                                setModalStatus({
                                  remove: false,
                                  edit: true,
                                  view: false,
                                });
                                setViewModalState({
                                  theId: sectionData._id,
                                  theTitle: sectionData.title,
                                  theQuantity: sectionData.quantity,
                                  theIsbn: sectionData.isbn,
                                  theAuthor: sectionData.author,
                                  theDatePublished: sectionData.datePublished,
                                  theDateAdded: sectionData.dateAdded,
                                  theTimeAdded: sectionData.timeAdded,
                                });
                              }}
                            />
                          </>
                        )}
                        {bookStatus && (
                          <IconButton
                            aria-label="Search database"
                            size="sm"
                            variant="outline"
                            marginRight="0.5rem"
                            icon={<BsEye />}
                            onClick={() => {
                              setModalStatus({
                                remove: false,
                                edit: false,
                                view: true,
                              });
                              setViewModalState({
                                theId: sectionData._id,
                                theTitle: sectionData.title,
                                theQuantity: sectionData.quantity,
                                theIsbn: sectionData.isbn,
                                theAuthor: sectionData.author,
                                theDatePublished: sectionData.datePublished,
                                theDateAdded: sectionData.dateAdded,
                                theTimeAdded: sectionData.timeAdded,
                              });
                            }}
                          />
                        )}
                      </Td>
                      <Td>{sectionData.title} </Td>
                      <Td>{sectionData.isbn}</Td>
                      <Td>{sectionData.author}</Td>

                      <Td>
                        {bookStatus === true ? (
                          <strong
                            className={
                              sectionData.quantity >= 1
                                ? "bg-green-300 py-0.5 px-2 rounded-full"
                                : "bg-red-300 py-0.5 px-2 rounded-full"
                            }
                          >
                            {sectionData.quantity}
                            {" Remaining"}
                          </strong>
                        ) : (
                          <>{sectionData.datePublished}</>
                        )}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          )}
        </TableContainer>
      )}

      {/* EDIT, VIEW AND REMOVE MODALS */}
      <RemoveInventoryModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        deleteId={deleteId}
        getSectionData={getSectionData}
      />
      <EditInventoryModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        activeTable={activeTable}
        viewModalState={viewModalState}
        getSectionData={getSectionData}
      />
      <ViewInventoryModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        activeTable={activeTable}
        viewModalState={viewModalState}
      />
    </div>
  );
}
