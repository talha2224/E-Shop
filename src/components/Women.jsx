import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa";
const Womens = styled.div`
 h3{   
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width:500px){
        font-size:2.5rem;

}
} 
`
const MainWomen = styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
height: 100%;  
@media screen and (max-width:687px){
    width: 39rem;
    margin-left: 0.5rem;
}
`
const SubWomen = styled.div`
margin-left:0.2rem;
margin-bottom:1.2rem;
width: 20rem;
height: 20rem;
overflow: scroll;
::-webkit-scrollbar {
    display: none;
}
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media screen and (max-width:687px){
    width: 100vh;
    height: 30rem;
}

img{
  padding-top: 0.5rem;
width: 10rem;
display: flex;
align-items: center;
justify-content: center;
}
h5{
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  @media screen and (max-width:687px){
    font-size: 1.5rem;
    margin-top: 1.5rem;
}
  span{
    margin-right: .3rem;
    font-weight:900;
  }
}
button{
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
const WomenImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const WomenBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
svg.icon5{
  margin-left: 0.3rem;
}
`


const Women = () => {
    useEffect(() => {
        women();
    }, [])

    const [call, setcall] = useState([])
    const women = async () => {
        const fetching = await fetch("https://fakestoreapi.com/products/category/jewelery")
        const res = await fetching.json();
        setcall(res)
    }
    return (
        <>
            <Womens>
                <h3>Women</h3>
            </Womens>
            <MainWomen >
                {
                    call.map((val) => {
                        return (
                            <SubWomen key={val.id}>
                                <WomenImage>
                                    <img src={val.image}alt="" />
                                </WomenImage>
                                <h5><span>TITLE:</span>{val.title}</h5>
                                <h5><span>Price</span>{val.price}</h5>
                                <WomenBtn>
                                    <button>ADD TO CART <FaShoppingCart className='icon5' /></button>
                                </WomenBtn>
                            </SubWomen>

                        )
                    })
                }
            </MainWomen>



        </>

    )
}

export default Women