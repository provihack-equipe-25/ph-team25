import styled from "styled-components"
import { colors } from "../../constants/theme"
import hero from "../../assets/Hero-2.png"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
`

export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  padding: 78px 120px 106px 120px;
  background-image: url(${hero});
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 70vh;
  .info {
    display: flex;
    flex-direction: column;
    width: 50%;
    h1 {
      margin: 15px 0;
      color: ${colors.mainYellow};
      font-style: normal;
      font-weight: 800;
      font-size: 72px;
      line-height: 100px;
    }
    p {
      margin: 15px 0;
      color: white;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
    }
    #source{
      margin: 0;
      font-size: 12px;
      font-style: italic;
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
   
  }
`
