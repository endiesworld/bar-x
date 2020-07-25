import React from "react";

import { NameHolder, Text } from "./narName.styled";

function BarName(props) {
  return (
    <NameHolder backgroundColor={props.backgroundColor}>
      <Text textColor={props.textColor}> {props.name || "company Name"} </Text>
    </NameHolder>
  );
}

export default BarName;
