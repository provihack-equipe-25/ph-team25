import styled from "styled-components"
import { colors } from "../../constants/theme"

export const ButtonContainer = styled.button`
  min-width: 182px;
  height: 60px;
  border: none;
  padding: 0 20px;
  background: ${(props) => {
    const setColor = props.color
    return props.color? colors[setColor] : colors.main}};
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;
  transition: 400ms ease;
  cursor: pointer;
  :hover {
    opacity: 80%;
  }
  :active {
    opacity: 100%;
  }
`