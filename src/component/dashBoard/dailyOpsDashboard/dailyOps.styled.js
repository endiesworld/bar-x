import styled from "styled-components";

export const DailyOpsFeaturesHolder = styled.div`
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

export const DailyOpsFeatures = styled.div`
  background: #f5f5f5;
  cursor: pointer;
  width: ${(props) => (props.deviceType === "mobile" ? "60%" : "80%")};
  height: 130px;
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
