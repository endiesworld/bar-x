import React from "react";
import {
  ParentOptionsHolder,
  OptionOne,
  ViewMenu,
  UpdateMenu,
  Message,
} from "./item-menue.dashboard.styled";
import { connect } from "react-redux";

function ItemMenueDashboard({ deviceType }) {
  return (
    <ParentOptionsHolder deviceType={deviceType}>
      <OptionOne deviceType={deviceType}>
        <UpdateMenu />
        <Message> Update item/menu list</Message>
      </OptionOne>
      <OptionOne deviceType={deviceType}>
        <ViewMenu />
        <Message> view today's menu </Message>
      </OptionOne>
    </ParentOptionsHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(ItemMenueDashboard);
