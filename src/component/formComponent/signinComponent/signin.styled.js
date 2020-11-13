import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Form = styled.form`
  width: 95%;
  height: 60%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const Input = styled.input`
  border: 0px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.borderColor || "#291563"};
  width: 80%;
  height: 2em;
`;

export const Label = styled.label`
  color: #291563;
  margin-top: 0.2em;
  font-size: 13px;
  margin-right: 0.5em;
`;

export const GroupElement = styled.div`
  margin-top: 0.5em;
  height: 3em;
  width: 90%;
  max-width: 300px ;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DontHaveAccount = styled.div`
  margin-top: 0.5em;
  height: 20%;
  width: 90%;
  max-width: 300px ;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
`;

export const SubmitBotton = styled.button`
  background-color: #291563;
  color: #ffffff;
  font-size: 13px;
  width: 100px;
  border: 1px solid #291563;
  border-radius: 4px;
  height: 2em;
  margin-right: 0.5em;
`;

export const Register = styled.p`
font-size: 0.7rem;
margin-left: 5px ;
    font-family: Regular "Montserrat";
`;

export const Link = styled(link)`
  text-decoration: none;
  cursor: pointer;
`;