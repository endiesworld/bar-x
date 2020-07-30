import React from "react";

import { DashBoardParentDiv } from "./dashBoard.page.styled";
import Navbar from "../../../component/navbarComponent/desktop/desktop.navbar.component";
import DashBoardWorkSpace from "../../../component/dashBoard/dashBoard.component" ;


function DashBoard() {
  return (
    <DashBoardParentDiv>
      <Navbar dashboard="dashboard" />
      <DashBoardWorkSpace/>
    </DashBoardParentDiv>
  );
}

export default DashBoard;
