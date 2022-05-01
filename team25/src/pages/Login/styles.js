import styled, { keyframes } from "styled-components";

const appearFrom = keyframes`
from{
    opacity:0;
    
}
to {
    opacity: 1;
    
}
`;
const appearFromLeft = keyframes`
from{
    opacity:0;
    transform:translateX(50px)
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  img {
    display: none;
    animation: ${appearFrom} 2s;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      width: 600px;
    }
  }
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding-left: 10px;
  margin: 10px 0;
  color: black;
  border-radius: 5px;
  border: 1px solid gray;

  :focus {
    outline-color: #219ebc;
  }

  ::placeholder {
    color: gray;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #ffb703;
  width: 300px;
  height: 350px;
  animation: ${appearFromLeft} 1s;

  h1 {
    margin: 20px 0;
    color: white;
    font-size: 45px;
    text-shadow: 3px 2px 2px #474747, 25px 0px 2px rgba(206, 89, 55, 0);
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: -8px;
    text-align: left;
    width: 240px;
  }

  p {
    font-size: 15px;
    color: white;
    font-weight: 600;
    text-shadow: 2px 1px 2px #474747, 25px 0px 2px rgba(206, 89, 55, 0);
    margin: 10px 0 0 0;
    a {
      text-decoration: none;
      color: #219ebc;
      text-shadow: 1px 2px 3px #ffffff;
    }
  }
`;
