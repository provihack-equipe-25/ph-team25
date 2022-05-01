import styled from "styled-components"
import { colors } from "../../constants/theme"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.mainYellow};
  padding-top: 20px;
  padding-bottom: 8px;
  .links {
    display: flex;
    align-items: center;
    #home {
      color: ${colors.secondary};
    }
    a {
      cursor: pointer;
      margin: 0 1.2vw;
      text-decoration: none;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: ${colors.gray3};
    }
    img {
      width: 156px;
      margin: 0 30px;
      cursor: pointer;
    }
  }
  button{
    transform: scale(0.8);
  }
`
