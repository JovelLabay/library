export interface ActiveBtn {
  addBtn?: boolean;
  editBtn?: boolean;
  removeBtn?: boolean;
}

export interface ListModal {
  bookList: boolean;
  studentList?: boolean;
}

export interface PropActiveBtn3 {
  modal: ListModal;
  setModal: React.Dispatch<React.SetStateAction<ListModal>>;
}

export interface PropActiveBtn2 {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
}
export interface PropActiveBtn extends PropActiveBtn2 {
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
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
