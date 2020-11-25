import React from "react";

import { DashBoardParentDiv } from "./dashBoard.page.styled";
import Navbar from "../../../component/navbarComponent/desktop/desktop.navbar.component";
import DashBoardWorkSpace from "../../../component/dashBoard/dashBoard.component";
import { connect } from "react-redux";
import {getBarName} from "../../../redux/user/user.selector" ;
import {  Navigate } from 'react-router-dom';



function DashBoard({ deviceType, barName }) {
 
  return (
    <>
     {(barName) ? (     
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
  const { deviceType } = state ;
  const barName = getBarName(state) ;
  return { deviceType, barName };
};

export default connect(mapStateToProps)(DashBoard);
