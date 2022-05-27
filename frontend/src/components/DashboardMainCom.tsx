import React, { useEffect, useState } from "react";

import DashboardMainTabCom from "./DashboardMainTabCom";
import DashboardMainTableCom from "./DashboardMainTableCom";

import { ActiveBtn, PropActiveBtn, SectionList } from "../modules/interface";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function DashboardMainCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  // TOAST
  const toast = useToast();
  const [sectionList, setSectionList] = useState<SectionList[]>([]);

  const getSectionData = () => {
    const urlEndpoint =
      activeTable === "Journals & Magazines"
        ? "/api/get-inventory-jm"
        : activeTable === "Newspapers"
        ? "/api/get-inventory-np"
        : activeTable === "Reading Books"
        ? "/api/get-inventory-rb"
        : activeTable === "Reference Section"
        ? "/api/get-inventory-rfb"
        : "/api/get-inventory-tb";

    axios
      .get(urlEndpoint)
      .then(function (response) {
        const koko: SectionList[] = [];
        response.data.forEach((qq: any) => {
          koko.push(qq);
        });
        setSectionList(koko);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSectionData();
  }, [activeTable]);

  // ADD TO INVENTORY
  const [addSection, setAddSection] = useState("Select");
  const [addQuantity, setAddQuantity] = useState(0);
  const [addBook, setAddBook] = useState("");
  const [addIsbn, setAddIsbn] = useState(0);
  const [author, setAuthor] = useState("");
  const [addDatePublished, setAddDatePublished] = useState("");
  const [addBtn, setAddBtn] = useState("Upload Book");
  const [addNotice, setAddNotice] = useState(false);

  //  ADD INVENTORY TO SERVER | HTTP REQUEST
  const addInventory = async () => {
    if (addQuantity <= 0) {
      setAddNotice(true);
    } else {
      setAddBtn("Uploading...");
      axios({
        method: "post",
        url: "/api/add-inventory",
        data: {
          section: addSection,
          quantity: addQuantity,
          title: addBook,
          isbn: addIsbn,
          author: author,
          datePublished: addDatePublished,
        },
      })
        .then(function (response) {
          getSectionData();
          setAddSection("Select");
          setAddQuantity(0);
          setAddBook("");
          setAddIsbn(0);
          setAuthor("");
          setAddDatePublished("");
          setAddBtn("Upload Book");
          setAddNotice(false);

          if (response.data._message === undefined) {
            toast({
              position: "bottom-right",
              variant: "subtle",
              title: "Added Successfully",
              description: "Book has been added successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
              containerStyle: {
                marginBottom: "1.5rem",
              },
            });
          } else {
            toast({
              position: "bottom-right",
              variant: "subtle",
              title: `${response.data._message}.`,
              description: "All field is required to submit book information",
              status: "error",
              duration: 3000,
              isClosable: true,
              containerStyle: {
                marginBottom: "1.5rem",
              },
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          setAddBtn("Try Again");
        });
    }
  };

  // RETURN AND BORROW ICONS
  const [rbIcons, setRbIcons] = useState({
    borrow: true,
    returnMe: false,
  });

  // props
  const props = {
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
    // BTN UPLOAD
    addBtn,
    // RETURN AND BORROW
    rbIcons,
    setRbIcons,
  };
  const props2 = {
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
  };

  return (
    <div>
      <DashboardMainTabCom {...props} />
      <DashboardMainTableCom {...props2} />
    </div>
  );
}
