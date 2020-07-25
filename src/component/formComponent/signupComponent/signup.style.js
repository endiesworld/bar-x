import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 85%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) => props.borderColor || "#291563"};
  width: 100%;
  height: 2em;
`;

export const Label = styled.label`
  color: #291563;
  margin-top: 0.2em;
  font-size: 13px;
`;

export const Strength = styled.span`
  color: ${(props) => props.colour || "#291563"};
  font-size: 0.7em;
`;

export const Select = styled.select`
  width: 100%;
  height: 2em;
`;

export const GroupElement = styled.div`
  margin-top: 0.5em;
  height: 3em;
  width: 12em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const SubmitBotton = styled.button`
  background-color: #291563;
  color: #ffffff;
  font-size: 13px;
  width: 8.5em;
  border: 1px solid #291563;
  border-radius: 4px;
  height: 2em;
`;
