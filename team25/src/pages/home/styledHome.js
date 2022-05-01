import styled from "styled-components"
import { colors } from "../../constants/theme"
import hero from "../../assets/home/Hero-2.png"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: ${colors.main};
  background-color: #FAFAFA;
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
  height: 50vh;
  .info {
    display: flex;
    flex-direction: column;
    width: 50%;
    h1 {
      max-width: 75%;
      margin: 15px 0;
      color: ${colors.gray1};
      font-style: normal;
      font-weight: 800;
      font-size: 62px;
    }
    p {
      margin: 15px 0;
      color: white;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
    }
    #source {
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
  padding: 78px 120px 0 120px;
  .title-subtitle {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
      width: 45%;
      font-weight: 700;
      font-size: 48px;
    }
    p {
      width: 40%;
      font-weight: 600;
      font-size: 18px;
      color: ${colors.gray2};
    }
  }
  .rs {
    margin: 56px 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 30%;
      margin: 7.5px;
    }
  }
`

export const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 120px;
  h2 {
    font-weight: 700;
    font-size: 48px;
  }
  p {
    margin: 40px 0 56px 0;
    max-width: 556px;
    font-weight: 600;
    font-size: 18px;
    color: ${colors.gray2};
    text-align: center;
  }
  .process {
    display: flex;
    justify-content: space-between;
    img {
      width: 25%;
    }
  }
`

export const MockSections = styled.img`
  width: 100%;
`