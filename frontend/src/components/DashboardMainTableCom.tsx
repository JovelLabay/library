import React from "react";

import { ActiveBtn, PropActiveBtn } from "../modules/interface";

export default function DashboardMainTableCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  return (
    <div>
      <h1>{activeTable}</h1>
    </div>
  );
}
