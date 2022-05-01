import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: 35px;
  animation: loading-spin ease 1.2s infinite;
  img{
    width: 35px;
  }
  @keyframes loading-spin {
    from {transform: rotate(0deg)}
    to {transform: rotate(-360deg)}
  }
`