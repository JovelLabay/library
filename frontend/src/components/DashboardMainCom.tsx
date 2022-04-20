import React, { useState } from "react";

import DashboardMainTabCom from "./DashboardMainTabCom";
import DashboardMainTableCom from "./DashboardMainTableCom";

import { ActiveBtn } from "../modules/interface";

interface PropActiveBtn {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
}

export default function DashboardMainCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  // props
  const props = { activeBtn, setActiveBtn, activeTable, setActiveTable };
  return (
    <div>
      <DashboardMainTabCom {...props} />
      <DashboardMainTableCom {...props} />
    </div>
  );
}
