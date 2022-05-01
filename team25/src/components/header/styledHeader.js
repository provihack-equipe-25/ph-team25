import styled from "styled-components"
import { colors } from "../../constants/theme"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};
  padding-top: 40px;
  padding-bottom: 8px;
  .links {
    display: flex;
    align-items: center;
    #home {
      color: ${colors.secondary};
    }
    a {
      margin: 0 30px;
      text-decoration: none;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: white;
    }
    img {
      width: 156px;
      margin: 0 30px;
      cursor: pointer;
    }
  }
  button {
    width: 182px;
    height: 60px;
    border: none;
    background: ${colors.main};
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: white;
    transition: 400ms ease;
    cursor: pointer;
    :hover{
      opacity: 80%;
    }
    :active{
      opacity: 100%;
    }
  }
`
