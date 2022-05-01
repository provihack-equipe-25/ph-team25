import styled, { keyframes } from "styled-components"
import { colors } from "../../constants/theme"

const appearFrom = keyframes`
from{
    opacity:0;
    
}
to {
    opacity: 1;
    
}
`
const appearFromLeft = keyframes`
from{
    opacity:0;
    transform:translateX(50px)
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-top: 20vh;
  }
`

export const DecorationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
  width: 40%;
  height: 100%;
  background: linear-gradient(
      32.73deg,
      rgba(255, 255, 255, 0.158) 45.71%,
      rgba(0, 0, 0, 0.12) 99.97%
    ),
    #18c9b2;
  h1 {
    margin: 8px 0;
    margin-top: 20vh;
    color: white;
    font-weight: 700;
    font-size: 64px;
    text-align: center;
    z-index: 1;
  }
  h2 {
    margin: 8px 0;
    color: white;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    z-index: 1;
    max-width: 400px;
  }
  img {
    max-width: 600px;
    position: fixed;
    z-index: 0;
    right: 0;
    top: 45vh;
    align-self: flex-end;
  }
  @media screen and (max-width: 900px) {
    margin-top: 40px;
    width: 100%;
    img{
display: none;
    }
    h1{
      margin-top: 40px;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin: 10px 0;
  color: black;
  border: none;
  border-bottom: 1px solid gray;
  font-weight: 400;
  font-size: 16px;
  :focus {
    outline-color: ${colors.secondary};
  }

  ::placeholder {
    color: gray;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 400px;
  animation: ${appearFromLeft} 1s;
  h1 {
    font-weight: 400;
    font-size: 34px;
    align-self: flex-start;
    margin: 32px 0;
    color: ${colors.gray3};
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: -8px;
    text-align: left;
    width: 240px;
  }

  p {
    margin: 8px 0;
    color: ${colors.gray2};
    a {
      text-decoration: none;
      color: ${colors.main};
    }
  }
`

export const ActionContainer = styled.div`
  margin: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${colors.main};
    text-shadow: 1px 2px 3px #ffffff;
  }
`
