import React from "react";

import { DashBoardParentDiv } from "./dashBoard.page.styled";
import Navbar from "../../../component/navbarComponent/desktop/desktop.navbar.component";
import DashBoardWorkSpace from "../../../component/dashBoard/dashBoard.component";
import { connect } from "react-redux";


function DashBoard({ deviceType, user }) {

console.log("the signed in user is: ", user)

  return (
    <div>
      <DashBoardParentDiv deviceType={deviceType}>
        <Navbar dashboard="dashboard" />
        <DashBoardWorkSpace />
      </DashBoardParentDiv>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { deviceType, user } = state;
    return { deviceType, user};
};

export default connect(mapStateToProps)(DashBoard);
