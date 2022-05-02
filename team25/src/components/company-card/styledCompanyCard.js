import styled from "styled-components"
import { colors } from "../../constants/theme"

export const CardContainer = styled.div`
  color: white;
  width: 212px;
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${(props) => props.image});
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  .info {
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(26px);
  }
  .materials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  h1 {
    margin: 4px 0;
    font-weight: 600;
    font-size: 20px;
    color: white;
  }
  h2 {
    margin: 4px 0;
    font-weight: 600;
    font-size: 18px;
    color: white;
  }
`