import React, { useState } from "react";

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
} from "react-icons/bs";

import { Inventorybtns, InventoryName } from "../modules/interface";
import AddInventoryModal from "./AddInventoryModal";

interface PropActiveBtn {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
}

export default function DashboardMainTabCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  // STATE OF THE BUTTONS
  const { addBtn, editBtn, removeBtn } = activeBtn;

  // ADD INVENTORY STATE
  const [addInventoryModal, setAddInventoryModal] = useState<InventoryName>({
    modal: false,
    inventoryName: "",
  });

  // PROPS
  const props = { addInventoryModal, setAddInventoryModal };

  return (
    <div className="dashboard_main_tab">
      <HStack divider={<StackDivider borderColor="gray.200" />}>
        <h1 className="dashboard_main_tab_title">
          {addBtn === true
            ? "Add"
            : editBtn === true
            ? "Edit"
            : removeBtn === true
            ? "Remove"
            : ""}
          {" Inventory"}
        </h1>
        <h1 className="dashboard_main_tab_title">{activeTable}</h1>
      </HStack>
      <HStack>
        {/* SELECT LIBRARY SECTION */}
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            colorScheme="blue"
            variant="outline"
            rightIcon={<BsCardChecklist />}
          >
            Section
          </MenuButton>
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
        {/* ADD ONLY */}
        {addBtn && (
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              colorScheme="blue"
              variant="outline"
              rightIcon={<BsPlus />}
            >
              Add
            </MenuButton>
            <MenuList>
              {Inventorybtns.map((Inventorybtn, index) => {
                const icons = Inventorybtn.btnName;
                return (
                  <MenuItem
                    onClick={() => {
                      props.setAddInventoryModal({
                        modal: true,
                        inventoryName: Inventorybtn.btnName,
                      });
                    }}
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
        )}
      </HStack>

      {/* ADD INVENTORY MODAL */}
      <AddInventoryModal {...props} />
    </div>
  );
}
