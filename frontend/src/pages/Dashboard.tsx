import React, { useEffect, useState, Suspense } from "react";

// LAYOUTS
import TopNavCom from "../layouts/TopNavCom";
import MainCom from "../layouts/MainCom";

import { ActiveBtn } from "../modules/interface";
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";

export default function Dashboard() {
  const navigation = useNavigate();

  // ACTIVE BUTTONS
  const [activeBtn, setActiveBtn] = useState<ActiveBtn>({
    inventory: true,
    bookStatus: false,
    studentList: false,
  });

  // ACTIVE TABLES
  const [activeTable, setActiveTable] = useState("Select Table");

  // props
  const props = { activeBtn, setActiveBtn, activeTable, setActiveTable };

  const serverToken = sessionStorage.getItem("Server Token");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (serverToken) {
      setTimeout(() => {
        setLoader(true);
      }, 2000);
    } else {
      sessionStorage.removeItem("Server Token");
      navigation("/");
    }
  }, []);

  return (
    <>
      {loader === false ? (
        <Loader />
      ) : (
        <>
          <nav className="top_nav">
            <TopNavCom activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
          </nav>
          <main className="sub_container">
            <MainCom {...props} />
          </main>
        </>
      )}
    </>
  );
}
