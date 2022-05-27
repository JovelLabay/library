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

// RETURN AND BORROW
export interface ReturnBorrow {
  rbIcons: {
    borrow: boolean;
    returnMe: boolean;
  };
  setRbIcons: React.Dispatch<
    React.SetStateAction<{
      borrow: boolean;
      returnMe: boolean;
    }>
  >;
}
export interface PropActiveBtn4 extends PropActiveBtn2, ReturnBorrow {
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
  addInventory: () => void;
  sectionList: SectionList[];
  setSectionList: React.Dispatch<React.SetStateAction<SectionList[]>>;
  getSectionData: () => void;
  // USESTATE PROPS
  addSection: string;
  setAddSection: React.Dispatch<React.SetStateAction<string>>;
  addQuantity: number;
  setAddQuantity: React.Dispatch<React.SetStateAction<number>>;
  addBook: string;
  setAddBook: React.Dispatch<React.SetStateAction<string>>;
  addIsbn: number;
  setAddIsbn: React.Dispatch<React.SetStateAction<number>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
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
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
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
  author: string;
  datePublished: string;
  dateAdded: string;
  timeAdded: string;
}

export interface PropActiveBtn5 extends PropActiveBtn2, ReturnBorrow {
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
  sectionList: SectionList[];
  // USESTATE PROPS
  addSection: string;
  setAddSection: React.Dispatch<React.SetStateAction<string>>;
  addQuantity: number;
  setAddQuantity: React.Dispatch<React.SetStateAction<number>>;
  addBook: string;
  setAddBook: React.Dispatch<React.SetStateAction<string>>;
  addIsbn: number;
  setAddIsbn: React.Dispatch<React.SetStateAction<number>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  addDatePublished: string;
  setAddDatePublished: React.Dispatch<React.SetStateAction<string>>;
  getSectionData: () => void;
}

export interface SectionQuantity {
  section: string;
  quantity: number;
}

// EDIT AND REMOVE MODALS

export interface RemoveEditView {
  remove: boolean;
  edit: boolean;
  view: boolean;
}

export interface TheViewModals {
  theId: string;
  theTitle: string;
  theQuantity: number;
  theIsbn: number;
  theAuthor: string;
  theDatePublished: string;
  theDateAdded: string;
  theTimeAdded: string;
}

export interface ModalsRemoveEditView_2 {
  modalStatus: RemoveEditView;
  setModalStatus: React.Dispatch<React.SetStateAction<RemoveEditView>>;
  deleteId: {
    angTitleBook: string;
    angIdBook: string;
    angSectionBook: string;
  };
  getSectionData: () => void;
}
export interface ModalsRemoveEditView {
  modalStatus: RemoveEditView;
  setModalStatus: React.Dispatch<React.SetStateAction<RemoveEditView>>;
}
export interface ModalsRemoveEditView2 {
  activeTable: String;
  modalStatus: RemoveEditView;
  setModalStatus: React.Dispatch<React.SetStateAction<RemoveEditView>>;
  viewModalState: TheViewModals;
  getSectionData: () => void;
}

export interface View extends ModalsRemoveEditView {
  activeTable: String;
  viewModalState: TheViewModals;
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
