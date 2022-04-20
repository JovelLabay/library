export interface ActiveBtn {
  addBtn?: boolean;
  editBtn?: boolean;
  removeBtn?: boolean;
}

export type InventoryName = {
  modal: boolean;
  inventoryName?: string;
};

export interface AddInventoryModalInterface {
  addInventoryModal: InventoryName;
  setAddInventoryModal: React.Dispatch<React.SetStateAction<InventoryName>>;
}

// BUTTONS FOR THE INVENTORY
export const Inventorybtns = [
  { id: 1, btnName: "Journals & Magazines" },
  { id: 2, btnName: "Newspapers" },
  { id: 3, btnName: "Reading Books" },
  { id: 4, btnName: "Reference Section" },
  { id: 5, btnName: "Text Books" },
];
