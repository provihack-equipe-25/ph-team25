import styled from "styled-components"
import { colors } from "../../constants/theme"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  .company {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url("https://thumbs.dreamstime.com/z/abstract-blurred-manufacturing-factory-equipment-background-industry-production-technical-128075041.jpg");
    background-position-x: top;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 300px;
    }
    .info{
      color: white;
      
    }
  }
`
