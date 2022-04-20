import React from "react";

import { ActiveBtn } from "../modules/interface";

interface PropActiveBtn {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
  activeTable: string;
  setActiveTable: React.Dispatch<React.SetStateAction<string>>;
}

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
