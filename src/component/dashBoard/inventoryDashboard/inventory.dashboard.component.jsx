import React from "react";
import {
  InventoryFeaturesHolder,
  InventoryFeatures,
  IconHolder,
} from "./inventory.dashboard.styled";

import { inventoryFeatures } from "./inventory/inventory.features";
import { connect } from "react-redux";

function InventoryDashboard({ deviceType }) {
  return (
    <InventoryFeaturesHolder deviceType={deviceType}>
      {inventoryFeatures.map((value) => (
        <InventoryFeatures deviceType={deviceType} key={value.id}>
          <IconHolder deviceType={deviceType}>{value.image}</IconHolder>

          {value.message}
        </InventoryFeatures>
      ))}
    </InventoryFeaturesHolder>
  );
}

const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(InventoryDashboard);
