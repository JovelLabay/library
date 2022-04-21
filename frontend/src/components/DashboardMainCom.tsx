import React, { useState } from "react";

import DashboardMainTabCom from "./DashboardMainTabCom";
import DashboardMainTableCom from "./DashboardMainTableCom";

import { ActiveBtn, PropActiveBtn } from "../modules/interface";

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
