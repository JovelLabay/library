import React from "react";
import DashboardMainCom from "../components/DashboardMainCom";
import SideNavCom from "./SideNavCom";

import { ActiveBtn, PropActiveBtn } from "../modules/interface";

export default function MainCom({
  activeBtn,
  setActiveBtn,
  activeTable,
  setActiveTable,
}: PropActiveBtn) {
  // props
  const props = { activeBtn, setActiveBtn, activeTable, setActiveTable };
  return (
    <div className="dashboard_container">
      {/* SIDEBAR NAV */}
      <aside className="aside">
        <SideNavCom activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </aside>
      {/* MAIN NAVIGATION */}
      <main className="main_navigation">
        <DashboardMainCom {...props} />
      </main>
    </div>
  );
}
