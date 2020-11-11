import React from "react";

import { DashBoardParentDiv } from "./dashBoard.page.styled";
import Navbar from "../../../component/navbarComponent/desktop/desktop.navbar.component";
import DashBoardWorkSpace from "../../../component/dashBoard/dashBoard.component";
import { connect } from "react-redux";
import {  Navigate } from 'react-router-dom';



function DashBoard({ deviceType, user }) {
 
  return (
    <>
     {(user.user) ? (     
      <DashBoardParentDiv deviceType={deviceType}>
        <Navbar dashboard="dashboard" />
        <DashBoardWorkSpace />
      </DashBoardParentDiv>
       ) :
     <Navigate to = '/signin' /> }
    </>
  );
}

const mapStateToProps = (state) => {
  const { deviceType, user } = state;
    return { deviceType, user};
};

export default connect(mapStateToProps)(DashBoard);
