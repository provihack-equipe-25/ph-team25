import styled from "styled-components"
import { colors } from "../../constants/theme"

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  .choice {
    display: flex;
  }
  .material {
    margin-bottom: 24px;
    display: flex;
    max-width: 450px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
  h1 {
    font-weight: 700;
    font-size: 48px;
    margin: 9px;
    color: ${colors.gray3};
  }
  p {
    color: ${colors.gray2};
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 18px;
  }
  h2 {
    font-weight: 800;
    font-size: 18px;
    margin: 16px 0 12px 0;
  }
`

export const SelectButton = styled.button`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  padding: 6px 20px;
  background-color: ${(props) =>
    props.selected === true ? colors.main : colors.gray1};
  font-style: bold;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`
