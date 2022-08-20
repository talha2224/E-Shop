import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Main=styled.div`
background-image:url("https://i.pinimg.com/originals/6c/ef/f9/6ceff9373af907010ca0cc47190601f3.jpg");
background-repeat:no-repeat;
background-size:cover;
width: 100vw;
height:100vh;
background-repeat: no-repeat;

`
const SubMain=styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
h3{
    color: #363533;
    text-transform: uppercase;
    margin-right: 0.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width:687px){
        width: 14rem;

    }
}
button{
    text-align: center;
    color: white;
  padding-top: 0.1rem;
  background-color: #d40a80;
  height: 6vh;
  width: 10rem;
  border-radius: 23px;
  border: 48px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width:687px){
    font-size: 1.2rem;
    height: 8vh;
    width: 60vw;
    border-radius: 28px;
    border: 50px;
}
}
`

const Thanks = () => {
    const nav=useNavigate()
    const navigate=()=>{
        nav("/")
    }
  return (
    <Main>
        <SubMain>
            <h3>THANKS FOR SHOPPING</h3>
            <button onClick={navigate}>BACK TO HOME</button>
        </SubMain>

    </Main>
    
  )
}

export default Thanks