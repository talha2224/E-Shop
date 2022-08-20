import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components';
const PopHead = styled.div`
h3{
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1.5rem;
    @media screen and (max-width:500px){
        font-size:2.5rem;
}
}
`
const MainPop = styled.div`
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
const SubPop = styled.div`
margin-left:0.2rem;
margin-bottom:1.2rem;
width: 20rem;
height: 20rem;
overflow: scroll;
::-webkit-scrollbar {
    display: none;
}
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media screen and (max-width:500px){ 
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
const PopImage = styled.div`
display: flex;
justify-content: center;
align-items: center;   
`
const PopButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
svg.icon5{
  margin-left: 0.3rem;
}   
`


const Popular = () => {
    const [POPS, setPOPS] = useState([]);
    console.log(POPS)
    useEffect(() => {
        apiss();
    },[])
    const apiss = async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=8");
        const datas = await response.json();
        setPOPS(datas);
    }
    return (
        <>
            <PopHead>
                <h3>Popular</h3>
            </PopHead>
            
            <MainPop>
                {
                    POPS.map((currElement) => {
                        return (
                            <SubPop key={currElement.id}>
                                <PopImage>
                                    <img src={currElement.image} alt="" />
                                </PopImage>
                                <h5><span>TITLE:</span> {currElement.title} </h5>
                                <h5><span>Price</span> {currElement.price} </h5>
                                <PopButton>
                                    <button>ADD TO CART <FaShoppingCart className='icon5' /></button>
                                </PopButton>
                            </SubPop>

                        )
                    })
                }
            </MainPop>


        </>
    )
}

export default Popular