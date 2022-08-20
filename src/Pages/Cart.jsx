import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import styled from 'styled-components'
const Main = styled.div`
background-color: #ffffff;
margin-top: 2rem; 
overflow: scroll;
::-webkit-scrollbar {
    display: none;
}
@media screen and (max-width:687px){
  width: 39rem;
  margin-left: 0.5rem;

}
`
const Sub = styled.div`
display: flex;
width: 100vw; 
height: 30rem;
overflow: scroll;
align-items: center;
flex-direction: row;
margin-left:0.2rem;
margin-bottom:1.2rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media screen and (max-width:687px){
  width: 100vh;
  height: 30rem;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
`
const Image = styled.div`
display: flex;
background-color: #ffff;
margin-top: 4rem;
justify-content: center;
align-items: center;
img{
  background-color: #fff;
  
  width: 10rem;
}
`

const Title = styled.div`
margin-top: 1rem;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width:687px){
  display: block;
}

h5{
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  @media screen and (max-width:687px){
    font-size: 1.5rem;
    margin-top: 1.5rem;


}
  span{
    font-family: 'Roboto', sans-serif;
    margin-right: .3rem;
    font-weight:900;
    @media screen and (max-width:687px){
    font-size: 1.5rem;
}
  }
}
`
const Btn = styled.div`
button{
  margin-right: 1rem;
  margin-left: 1rem;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: #d40a80;
  height: 5vh;
  width: 9rem;
  border-radius: 23px;
  border: 48px;
  outline: none;
  cursor: pointer;
  margin-bottom: .4rem;
  @media screen and (max-width:687px){
    font-size: 1.2rem;
    height: 10vh;
    width: 12rem;
    border-radius: 28px;
    border: 50px;
}
}
`
const Quantity = styled.div`
svg.icon7{
  font-size: 1.5rem;
  font-weight: 900;
  color: #443b3b;
  cursor: pointer;
  @media screen and (max-width:687px){
    margin-top: 0.5rem;
    font-size: 2.5rem;
}
  
}
svg.icon8{
  font-size: 1.5rem;
  font-weight: 900;
  color: #443b3b;
  cursor: pointer;
  @media screen and (max-width:687px){
    margin-top: 0.5rem;
    font-size: 2.5rem;
}
}
.increase{
  font-size: 1.3rem;
  margin-left:0.7rem;
  margin-right:0.7rem;
  @media screen and (max-width:687px){
    margin-top: 0.5rem;
    font-size: 2.5rem;
}
}
`
const Head = styled.div`
h2{
  font-size:2rem;
  font-family: 'Roboto', sans-serif;

}
`
const Total = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width:687px){
  display:inline-block;
}
h5{
  margin-top: 1rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  font-size: 1.2rem;
  @media screen and (max-width:687px){
    font-size: 1.9rem;
    margin-top: 1.5rem;
}
  span{
    font-family: 'Roboto', sans-serif;
    margin-right: .3rem;
    font-weight:900;
    @media screen and (max-width:687px){
    font-size: 2rem;
    width: fit-content;
}
  }
}
`
const Cart = ({ cart }) => {
  const [CART, setCART] = useState([])
  useEffect(() => {
    setCART(cart)
  }, [cart])
const nav=useNavigate()
const navigate=()=>{
  nav("/payment")
}


  return (
    <>
      <Head>
        <h2>Your Cart</h2>
      </Head>
      <Main>
        {
          CART?.map((val, parentindex) => {
            return (
              <Sub>
                <Image>
                  <img src={val.image} alt="" />
                </Image>
                <Title>
                  <h5><span>Title:</span>{val.title}</h5>
                  <h5><span>Price:</span>{val.price * val.quantity}</h5>
                </Title>
                <Btn>
                  <button>Remove</button>
                </Btn>
                <Quantity>
                  <h5><AiOutlinePlusCircle className='icon7 ' onClick={() => {
                    const _Cart = CART.map((item, index) => {
                      return parentindex === index ? { ...item, quantity: item.quantity + 1 } : item
                    })
                    setCART(_Cart)
                  }} />
                    <span className='increase'>{val.quantity}</span><AiOutlineMinusCircle className='icon8' onClick={() => {
                      const _Cart = CART.map((item, index) => {
                        return parentindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                      })
                      setCART(_Cart)
                    }} /></h5>
                </Quantity><hr />
              </Sub>
            )
          })
        }
      </Main>
      <Total>
        <h5>Total<span>          {
            CART.map(value => value.price * value.quantity).reduce((a, b) => a + b, 0)}</span></h5>

        <Btn>
          <button onClick={navigate}>Pay Now </button>
        </Btn>
      </Total>


    </>
  )
}

export default Cart
