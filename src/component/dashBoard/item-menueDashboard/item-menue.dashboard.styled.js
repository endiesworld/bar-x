import styled from "styled-components";
import { ReactComponent as updateMenu } from "../../../assets/add-itemsAndMenu.svg";
import { ReactComponent as viewMenu } from "../../../assets/menu-list.svg";

export const ParentOptionsHolder = styled.div`
  width: ${(props) => (props.deviceType !== "large" ? "auto" : "100%")};

  height: 90vh;
  margin-bottom: ${(props) => (props.deviceType === "mobile" ? "10em" : "5em")};
  margin-top: 2em;
  display: grid;
  grid-template-columns: ${(props) =>
    props.deviceType === "mobile" ? "1fr" : "1fr 1fr"};

  justify-items: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 30px;
`;

export const OptionOne = styled.div`
  cursor: pointer;
  width: ${(props) => (props.deviceType === "mobile" ? "70%" : "80%")};
  max-width: 345px;
  height: ${(props) => (props.deviceType === "mobile" ? "150px" : "250px")};
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  :hover {
    box-shadow: 5px 5px 10px 7px #291563;
  }
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UpdateMenu = styled(updateMenu)`
  height: 50%;
  width: 50%;
`;

export const ViewMenu = styled(viewMenu)`
  height: 50%;
  width: 50%;
`;

export const Message = styled.h2`
  padding-right: 15px;
  text-align: center;
  color: #291563;
`;
