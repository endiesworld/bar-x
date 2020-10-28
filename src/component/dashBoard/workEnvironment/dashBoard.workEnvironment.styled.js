import styled from "styled-components";

export const WorkEnvironmentDiv = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "100%" : "80%")};
  height: ${(props) => (props.deviceType === "mobile" ? "auto" : "90vh")};
`;
