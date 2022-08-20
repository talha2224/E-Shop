import React, { useState,useEffect} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import styled from 'styled-components'
const ProContainer = styled.div`
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
const SubCont = styled.div`
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
    margin-left: auto;
  margin-right: auto;
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
const ProImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProButton = styled.div`
display: flex;
justify-content: center;
align-items: center;

svg.icon6{
  margin-left: 0.3rem;
}  
`
const ProHeading = styled.div`
h3{
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1.5rem;
    @media screen and (max-width:500px){
        font-size:2rem;
        margin-top: 1rem;}
}
`
const Product = () => {
    useEffect(() => {
        call();
    },[])
    const [request, setRequest] = useState([])
    const call = async () => {
        const get = await fetch("https://fakestoreapi.com/products")
        const req = await get.json()
        setRequest(req)
    }

    const [cart, setcart] = useState([])
    const addtocart=(data)=>{
      setcart([...cart,{...data,quantity:1}])
    }
    return (
        <>
            <Navbar />
            <ProHeading>
                <h3>ALL PRODUCTS</h3>
            </ProHeading>
            <ProContainer>
                {
                    request.map((currentelement) => {
                        return (

                            <SubCont key={currentelement.id}>
                                <ProImg>
                                    <img src={currentelement.image} alt="" />
                                </ProImg>
                                <h5><span>TITLE:</span>{currentelement.title}</h5>
                                <h5><span>Price</span>{currentelement.price}</h5>
                                <ProButton>
                                    <button onClick={()=>addtocart(currentelement)}>ADD TO CART < FaShoppingCart className='icon6' /></button>
                                </ProButton>
                            </SubCont>
                        )
                    })
                }
            </ProContainer>
            <Cart cart={cart }/>
            <Footer />


        </>
    )
}

export default Product