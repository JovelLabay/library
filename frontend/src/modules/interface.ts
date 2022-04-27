export interface ActiveBtn {
  inventory?: boolean;
  bookStatus?: boolean;
  studentList?: boolean;
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
export interface PropActiveBtn4 extends PropActiveBtn2 {
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
  addInventory: () => void;
  // USESTATE PROPS
  addSection: string;
  setAddSection: React.Dispatch<React.SetStateAction<string>>;
  addQuantity: number;
  setAddQuantity: React.Dispatch<React.SetStateAction<number>>;
  addBook: string;
  setAddBook: React.Dispatch<React.SetStateAction<string>>;
  addIsbn: number;
  setAddIsbn: React.Dispatch<React.SetStateAction<number>>;
  addNumber: number;
  setAddNumber: React.Dispatch<React.SetStateAction<number>>;
  addDatePublished: string;
  setAddDatePublished: React.Dispatch<React.SetStateAction<string>>;
  addNotice: boolean;
  addBtn: string;
}

export interface AddInventoryModalInterface {
  addInventoryModal: boolean;
  setAddInventoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  addInventory: () => void;
  // USESTATE PROPS
  addSection: string;
  setAddSection: React.Dispatch<React.SetStateAction<string>>;
  addQuantity: number;
  setAddQuantity: React.Dispatch<React.SetStateAction<number>>;
  addBook: string;
  setAddBook: React.Dispatch<React.SetStateAction<string>>;
  addIsbn: number;
  setAddIsbn: React.Dispatch<React.SetStateAction<number>>;
  addNumber: number;
  setAddNumber: React.Dispatch<React.SetStateAction<number>>;
  addDatePublished: string;
  setAddDatePublished: React.Dispatch<React.SetStateAction<string>>;
  addNotice: boolean;
  addBtn: string;
}

export interface SectionList {
  _id: string;
  section: string;
  quantity: number;
  title: string;
  isbn: number;
  bookNo: number;
  datePublished: string;
}

export interface PropActiveBtn5 extends PropActiveBtn2 {
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
  sectionList: SectionList[];
}

export interface SectionQuantity {
  section: string;
  quantity: number;
}

// EDIT AND REMOVE MODALS
export interface RemoveEdit {
  remove: boolean;
  edit: boolean;
}

export interface ModalsRemoveEdit {
  modalStatus: RemoveEdit;
  setModalStatus: React.Dispatch<React.SetStateAction<RemoveEdit>>;
}

// USERNAME AND PASSWORD HANDLE
export interface UsernamePassword {
  isValid?: boolean;
  btnStatus?: string;
}

// BUTTONS FOR THE INVENTORY
export const Inventorybtns = [
  { id: 1, btnName: "Journals & Magazines" },
  { id: 2, btnName: "Newspapers" },
  { id: 3, btnName: "Reading Books" },
  { id: 4, btnName: "Reference Section" },
  { id: 5, btnName: "Text Books" },
];
