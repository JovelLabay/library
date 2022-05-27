import React, { useEffect, useState } from "react";

import { ActiveBtn } from "../modules/interface";

// CHAKRA UI
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  StackDivider,
  Input,
  IconButton,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

// ICONS
import {
  BsPlus,
  BsJournalArrowUp,
  BsNewspaper,
  BsJournalPlus,
  BsJournalBookmark,
  BsJoystick,
  BsCardChecklist,
  BsTrash,
  BsFillPlusCircleFill,
  BsFillCollectionPlayFill,
} from "react-icons/bs";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  Inventorybtns,
  PropActiveBtn,
  PropActiveBtn4,
} from "../modules/interface";
import AddInventoryModal from "./AddInventoryModal";

export default function DashboardMainTabCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
  addInventory,
  sectionList,
  setSectionList,
  getSectionData,
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
  addNotice,
  addBtn,
  // RETURN AND BORROW
  rbIcons,
  setRbIcons,
}: PropActiveBtn4) {
  // HANDLE SEARCH
  const [search, setSearch] = useState<number | undefined>();

  useEffect(() => {
    const lala = sectionList.filter((title) => {
      return title.isbn === search;
    });
    if (lala.length >= 1) {
      setSectionList(lala);
    }
    if (lala.length <= 0) {
      getSectionData();
    }
  }, [search]);

  // STATE OF THE BUTTONS
  const { inventory, bookStatus, studentList } = activeBtn;

  // ADD INVENTORY STATinventory
  const [addInventoryModal, setAddInventoryModal] = useState(false);

  // PROPS
  const props = {
    addInventoryModal,
    setAddInventoryModal,
    addInventory,
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
    addNotice,
    addBtn,
  };

  return (
    <div className="dashboard_main_tab">
      {/* TITLE */}
      <HStack divider={<StackDivider borderColor="gray.200" />}>
        <h1 className="dashboard_main_tab_title">
          {inventory === true
            ? "Inventory"
            : bookStatus === true
            ? "Book Status"
            : studentList === true
            ? "Student List"
            : ""}
        </h1>
        <h1 className="dashboard_main_tab_title">
          {studentList === true ? "Student List" : activeTable}
        </h1>
      </HStack>

      {/* ICON BTNS */}
      <HStack spacing="1rem">
        {/* SELECT LIBRARY SECTION */}
        {studentList !== true ? (
          <Menu>
            <Tooltip label="Library Section">
              <MenuButton>
                <IconButton
                  aria-label="Search database"
                  variant="outline"
                  icon={<BsFillCollectionPlayFill />}
                />
              </MenuButton>
            </Tooltip>

            <MenuList>
              {Inventorybtns.map((Inventorybtn, index) => {
                const icons = Inventorybtn.btnName;
                return (
                  <MenuItem
                    onClick={() => setActiveTable(Inventorybtn.btnName)}
                    icon={
                      icons === "Journals & Magazines" ? (
                        <BsJournalArrowUp />
                      ) : icons === "Newspapers" ? (
                        <BsNewspaper />
                      ) : icons === "Reading Books" ? (
                        <BsJournalPlus />
                      ) : icons === "Reference Section" ? (
                        <BsJournalBookmark />
                      ) : (
                        <BsJoystick />
                      )
                    }
                    key={index}
                  >
                    {Inventorybtn.btnName}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        ) : null}
        {/* ADD ONLY */}
        {inventory && (
          <Tooltip label="Add Inventory">
            <IconButton
              aria-label="Search database"
              variant="outline"
              icon={<BsFillPlusCircleFill />}
              onClick={() => setAddInventoryModal(true)}
            />
          </Tooltip>
        )}
        {/* FOR STUDENT */}
        {studentList && (
          <>
            <Tooltip label="Borrow Book">
              <IconButton
                onClick={() =>
                  setRbIcons({
                    borrow: true,
                    returnMe: false,
                  })
                }
                colorScheme="blue"
                aria-label="Search database"
                variant="outline"
                size="sm"
                icon={<IoPersonCircleOutline />}
              />
            </Tooltip>
            <Tooltip label="Return book">
              <IconButton
                onClick={() =>
                  setRbIcons({
                    borrow: false,
                    returnMe: true,
                  })
                }
                colorScheme="blue"
                aria-label="Search database"
                variant="outline"
                size="sm"
                icon={<MdOutlineAssignmentReturn />}
              />
            </Tooltip>
          </>
        )}

        {/* SEARCH DIRECT TO THE LIBRARY SECTION */}
        {studentList === false ? (
          <Input
            type="number"
            placeholder="Search ISBN here..."
            value={search}
            onChange={(e) => setSearch(e.target.valueAsNumber)}
          />
        ) : null}
      </HStack>

      {/* ADD INVENTORY MODAL */}
      <AddInventoryModal {...props} />
    </div>
  );
}
