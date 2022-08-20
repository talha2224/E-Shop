import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Head=styled.div`

height:60vh;
background-image:url("https://img.freepik.com/free-photo/black-friday-shopping-bag-yellow-copy-space-background_23-2148665780.jpg?w=2000");
background-position:100%;
background-repeat:no-repeat;
background-size:cover;
@media screen and (max-width:500px){
    width: 200vw;

}
h4{
    padding-top:2rem;
    margin-top: 2rem;
    font-family: 'Roboto', sans-serif;
    color: #fff7f7;
    margin-left: 1rem;
    @media screen and (max-width:687px){
    font-size: 1.9rem;
    margin-bottom:0.5rem;
}
}
h2{
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1.5rem;
    color: #fff7f7;
    margin-left: 1rem;
    @media screen and (max-width:687px){
    font-size: 1.9rem;
}
}
h5{
    font-family: 'Roboto', sans-serif;
    color: #fff7f7;
    margin-left: 1rem;
    @media screen and (max-width:687px){
    font-size: 1.4rem;
}
}
button{
    margin-top: 1rem;
    margin-left: 1rem;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color: #d40a80;
    height: 5vh;
  width: 9rem;
  border-radius: 23px;
  border: 48px;
    outline: none;
    cursor: pointer;
    @media screen and (max-width:687px){
    font-size: 1.2rem;
    height: 10vh;
    width: 12rem;
    border-radius: 28px;
    border: 50px;
}
    svg.icon3{
        margin-left:0.5rem;
        font-weight:1200;
        color: #fff7f7;
    }
}
`
const Header = () => {
    const nav=useNavigate()
    const navigate=()=>{
        nav("/product")
    }
  return (
    <Head>
        <h4>Has Just Arrived!</h4>
        <h2>Huge Collection On Brands</h2>
        <h5>Shirts,Pants,Glasses and much more</h5>
        <button onClick={navigate}>Shop Now <AiOutlineArrowRight className='icon3'/></button>

    </Head>
  )
}

export default Header
