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

import { BsTrash, BsPencilSquare } from "react-icons/bs";

import { ActiveBtn, PropActiveBtn } from "../modules/interface";

export default function DashboardMainTableCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  // STATE OF THE BUTTONS
  const { addBtn, editBtn, removeBtn } = activeBtn;

  return (
    <div>
      {activeTable === "Select Table" ? (
        <h1 className="text-center">Select a table to display list</h1>
      ) : (
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                {editBtn || removeBtn === true ? <Th>Option</Th> : null}
                <Th>Book Title</Th>
                <Th>Book ISBN</Th>
                <Th>Book Number</Th>
                <Th>Book Items</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {editBtn || removeBtn === true ? (
                  <Td>
                    <IconButton
                      onClick={() => {
                        if (editBtn === true) {
                          alert("Edit");
                        } else {
                          alert("Remove");
                        }
                      }}
                      size="sm"
                      icon={editBtn === true ? <BsPencilSquare /> : <BsTrash />}
                      variant="outline"
                      aria-label={"Delete"}
                    />
                  </Td>
                ) : null}
                <Td>iuy</Td>
                <Td>nbvg</Td>
                <Td>25.4</Td>
                <Td>24 Items</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
