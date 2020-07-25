import React from "react";

import { ParentDiv } from "./dashBoard.styled";
import Navbar from "../../../component/navbarComponent/desktop/desktop.navbar.component";

function DashBoard() {
  return (
    <ParentDiv>
      <Navbar dashboard="dashboard" color="#F5F5F5" />
      DASHBOARD
    </ParentDiv>
  );
}

export default DashBoard;
