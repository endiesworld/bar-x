import React from "react";
import {
  ManagementFeaturesHolder,
  ManagementFeatures,
  IconHolder,
} from "./management.dashboard.styled";
import { managementFeatures } from "./management/management.features";
import { connect } from "react-redux";

function ManagementDashboard({ deviceType }) {
  return (
    <ManagementFeaturesHolder deviceType={deviceType}>
      {managementFeatures.map((value) => (
        <ManagementFeatures deviceType={deviceType} key={value.id}>
          <IconHolder deviceType={deviceType} key={value.id}>
            {value.image}
          </IconHolder>

          {value.message}
        </ManagementFeatures>
      ))}
    </ManagementFeaturesHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(ManagementDashboard);
