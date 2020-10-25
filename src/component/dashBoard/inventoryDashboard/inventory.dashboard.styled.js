import styled from "styled-components";

export const InventoryFeaturesHolder = styled.div`
  margin-bottom: 2em;
  margin-top: 5em;
  width: ${(props) => (props.deviceType === "mobile" ? "auto" : "100%")};

  height: auto;
  display: grid;
  grid-template-columns: ${(props) =>
    props.deviceType === "mobile" ? "1fr " : "1fr 1fr 1fr"};
  justify-items: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
`;

export const InventoryFeatures = styled.div`
  background: #f5f5f5;
  cursor: pointer;
  width: ${(props) => (props.deviceType === "mobile" ? "60%" : "80%")};
  height: ${(props) => (props.deviceType === "mobile" ? "100px" : "120px")};
  max-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #291563;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  :hover {
    box-shadow: 5px 5px 10px 7px #291563;
  }
`;

export const IconHolder = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "50%" : "65%")};
  height: ${(props) => (props.deviceType === "mobile" ? "30%" : "35%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
