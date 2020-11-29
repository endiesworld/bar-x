import React from 'react' ;
import { connect } from "react-redux";

import {
  InventoryFeaturesHolder,
  InventoryFeatures,
  IconHolder,
  Link,
} from "./inventory.features.styled";
import { inventoryFeatures } from "./inventory.features";

function InventoryHome({ deviceType }) {
  return (
    <InventoryFeaturesHolder deviceType={deviceType}>
      {inventoryFeatures.map((value) => (
        
         <InventoryFeatures deviceType={deviceType} key={value.id}>
              <Link to={value.linkTo} >
                <IconHolder deviceType={deviceType}>{value.image}</IconHolder>
                 {value.message}
            </Link>
         </InventoryFeatures>
        
      ))}
    </InventoryFeaturesHolder>
  );
}


const mapStateToProps = (state) => {
  const { deviceType } = state.deviceType;
  return { deviceType };
};

export default connect(mapStateToProps)(InventoryHome);

