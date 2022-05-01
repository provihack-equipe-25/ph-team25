import styled from "styled-components"
import { colors } from "../../constants/theme"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
`

export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  padding: 78px 120px 106px 120px;
  background-color: ${colors.mainlight};
  .info {
    display: flex;
    flex-direction: column;
    h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 72px;
    }
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
    }
  }
`

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 78px 120px 106px 120px;
  .title-subtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      width: 45%;
      font-weight: 700;
      font-size: 48px;
    }
    p {
      width: 40%;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .rs {
    display: flex;
    div {
      margin: 0 ;
      width: 386px;
      height: 386px;
      left: 120px;
      top: 315px;

      background: #ebebeb;
      border-radius: 4px;
    }
  }
`
