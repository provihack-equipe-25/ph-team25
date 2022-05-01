import styled from "styled-components"
import { colors } from "../../constants/theme"

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 400px;
    label {
      font-weight: 400;
      font-size: 24px;
      align-self: flex-start;
      margin: 16px 0;
      color: ${colors.gray3};
    }
    span {
      color: red;
      font-size: 12px;
      margin-top: -8px;
      text-align: left;
      width: 240px;
    }
    a {
      text-decoration: none;
      color: ${colors.main};
      align-self: center;
      margin: 16px;
      cursor: pointer;
    }
    input {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      margin: 2px 0 16px 0;
      color: black;
      border: 1px solid gray;
      border-radius: 3px;
      font-weight: 400;
      font-size: 16px;
      :focus {
        outline-color: ${colors.secondary};
      }

      ::placeholder {
        color: gray;
      }
    }
    button {
      margin-top: 16px;
      align-self: center;
    }
  }
`
