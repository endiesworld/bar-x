import styled from "styled-components";

export const WorkEnvironmentDiv = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "100%" : "80%")};
  height: ${(props) => (props.deviceType === "mobile" ? "auto" : "90vh")};
  margin-left: ${(props) => (props.deviceType === "medium" ? "70px" : "0px")};
  background: white;
`;
