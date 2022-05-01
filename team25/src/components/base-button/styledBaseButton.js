import styled from "styled-components"
import { colors } from "../../constants/theme"

export const ButtonContainer = styled.button`
  min-width: 182px;
  max-width: fit-content;
  height: 60px;
  border: none;
  padding: 0 20px;
  color: ${(props) => {
    const setText = props.textColor
    return props.textColor ? colors[setText] : "white"
  }};
  background: ${(props) => {
    const setColor = props.color
    return props.color ? colors[setColor] : colors.main
  }};
  border-radius: 4px;
  font-style: bold;
  font-weight: 900;
  font-size: 18px;
  box-shadow: ${props => props.shadow ? props.shadow : "0 2px 2px rgba(0, 0, 0, 0.25)"};
  transition: 400ms ease;
  cursor: pointer;
  :hover {
    opacity: 95%;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.25);
  }
  :active {
    opacity: 100%;
  }
`
