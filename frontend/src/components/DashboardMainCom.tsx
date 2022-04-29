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
  const [addNumber, setAddNumber] = useState(0);
  const [addDatePublished, setAddDatePublished] = useState("");
  const [addBtn, setAddBtn] = useState("Upload");
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
          bookNo: addNumber,
          datePublished: addDatePublished,
        },
      })
        .then(function (response) {
          getSectionData();
          console.log(response.data);
          setAddSection("Select");
          setAddQuantity(0);
          setAddBook("");
          setAddIsbn(0);
          setAddNumber(0);
          setAddDatePublished("");
          setAddBtn("Upload");
          setAddNotice(false);
          toast({
            position: "bottom-right",
            variant: "subtle",
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch(function (error) {
          console.log(error);
          setAddBtn("Try Again");
        });
    }
  };

  // props
  const props = {
    activeBtn,
    setActiveBtn,
    activeTable,
    setActiveTable,
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
    addNumber,
    setAddNumber,
    addDatePublished,
    setAddDatePublished,
    addNotice,
    // BTN UPLOAD
    addBtn,
  };
  const props2 = {
    activeBtn,
    setActiveBtn,
    activeTable,
    setActiveTable,
    sectionList,
  };

  return (
    <div>
      <DashboardMainTabCom {...props} />
      <DashboardMainTableCom {...props2} />
    </div>
  );
}
