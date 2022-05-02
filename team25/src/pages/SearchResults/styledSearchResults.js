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

export const CompaniesContainer = styled.div`
    margin: 16px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
`