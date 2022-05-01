import React from 'react'
import { HeaderContainer } from './styledHeader'
import logo from '../../assets/logo/aws_grandetryagain.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <div className='links'>
       <img onClick={() => navigate('/')} src={logo} alt='TryAgain logo'/>
       <a href='/' id='home'>Home</a>
       <a href='/search'>Encontrar Parceiros</a>
       <a href='/'>Blog</a>
       <a href=''>Sobre</a>
      </div>
        <button onClick={() => navigate('/login')}>Login</button>
    </HeaderContainer>
  )
}
