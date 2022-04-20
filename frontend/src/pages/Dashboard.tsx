import React, { useState } from "react";

// LAYOUTS
import TopNavCom from "../layouts/TopNavCom";
import MainCom from "../layouts/MainCom";

import { ActiveBtn } from "../modules/interface";

export default function Dashboard() {
  // ACTIVE BUTTONS
  const [activeBtn, setActiveBtn] = useState<ActiveBtn>({
    addBtn: true,
    editBtn: false,
    removeBtn: false,
  });

  // ACTIVE TABLES
  const [activeTable, setActiveTable] = useState("Select Table");

  // props
  const props = { activeBtn, setActiveBtn, activeTable, setActiveTable };

  return (
    <>
      <nav className="top_nav">
        <TopNavCom activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </nav>
      <main className="sub_container">
        <MainCom {...props} />
      </main>
    </>
  );
}
