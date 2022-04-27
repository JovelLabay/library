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
  RemoveEdit,
  PropActiveBtn5,
} from "../modules/interface";
import EditInventoryModal from "./EditInventoryModal";
import RemoveInventoryModal from "./RemoveInventoryModal";

export default function DashboardMainTableCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
  sectionList,
}: PropActiveBtn5) {
  // STATE OF THE BUTTONS
  const { inventory, bookStatus, studentList } = activeBtn;

  // MODALS FOR EDIT AND REMOVE
  const [modalStatus, setModalStatus] = useState<RemoveEdit>({
    remove: false,
    edit: false,
  });

  return (
    <div className="">
      {activeTable === "Select Table" ? (
        <h1 className="text-center">Select a table to display list</h1>
      ) : (
        <TableContainer>
          {studentList === true ? (
            <h1>Student Table</h1>
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
                              onClick={() =>
                                setModalStatus({
                                  remove: true,
                                  edit: false,
                                })
                              }
                            />
                            <IconButton
                              aria-label="Search database"
                              size="sm"
                              variant="outline"
                              marginRight="0.5rem"
                              icon={<BsPencilSquare />}
                              onClick={() =>
                                setModalStatus({
                                  remove: false,
                                  edit: true,
                                })
                              }
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
                          />
                        )}
                      </Td>
                      <Td>{sectionData.title} </Td>
                      <Td>{sectionData.isbn}</Td>
                      <Td>{sectionData.bookNo}</Td>

                      <Td>
                        {bookStatus === true ? (
                          <strong className="bg-green-300 py-0.5 px-2 rounded-full">
                            {sectionData.quantity}
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
      />
      <EditInventoryModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
    </div>
  );
}
