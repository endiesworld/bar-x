import React from "react";

import { connect } from "react-redux";

import DesktopHomeComponent from "../../../component/homeComponent/desktop/desktop.home.component";

function HomePage(props) {
  return (
    <div id="home-page">
      <DesktopHomeComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(HomePage);
