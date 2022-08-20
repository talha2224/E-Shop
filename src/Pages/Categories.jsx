import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Navbar from '../components/Navbar'
import styled from 'styled-components'
const CateHead = styled.div`
@media screen and (max-width:687px){
    width: 39rem;
    margin-left: 1rem;
}
h2{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin-top:2rem;
    text-transform: uppercase;
    @media screen and (max-width:687px){
        width: 100vh;
        font-size: xx-large;
        margin-bottom: 1rem;
}
}
`
const CatMain = styled.div`
display: flex;
justify-content:space-evenly;
flex-wrap: wrap;
width: 100%;
@media screen and (max-width:687px){
    width: 39rem;
    margin-left: 1rem;
}
h5{
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-weight: bold;

    @media screen and (max-width:687px){
        font-size: 1.5rem;
        margin-top: 1.5rem;

    }
    span{
        text-transform: uppercase;
    margin-right: 1rem;
    font-weight:900;
  }
    }
`
const CatCart = styled.div`
margin-right: 1rem;
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
    height: 25rem;
}
img{
    padding-top: 0.5rem;
    width: 10rem;
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
const Catimg = styled.div`
display: flex;
justify-content: center;
align-items: center;

img{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
`
const CatButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
.icon7{
    margin-left: 0.3rem;
}
`
const ButtonChild = styled.div`  
`
const Cat = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width:687px){
    width: 39rem;
}

button{
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    height: 7vh;
    width: 8rem;
    border-radius: 37px;
    border: 1px;
    cursor: pointer;
    background-color: #615d5d;
    color: whitesmoke;
    @media screen and (max-width:687px){
        font-size: 1.2rem;
    height: 10vh;
    width: 8rem;
    border-radius: 28px;
    border: 50px;
    }
}
`

const Categories = ({addtocart}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        cate()
    }, [setData])
    const cate = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const dat = await res.json();
        setData(dat)
    }
    const filters = (catItem) => {
        const result = data.filter((currData) => {
            return currData.category === catItem;
        })
        setData(result);
    }
    return (
        <>
            <Navbar />
            <CateHead>
                <h2>Our PRODUCTS</h2>
            </CateHead>
            <Cat>
                <ButtonChild>
                    <button onClick={() => { filters("men's clothing") }}>Men </button>
                </ButtonChild>
                <ButtonChild>
                    <button onClick={() => { filters("women's clothing") }}>Women</button>
                </ButtonChild>
                <ButtonChild>
                    <button onClick={() => { filters("jewelery") }}>Jwelery</button>
                </ButtonChild>
                <ButtonChild>
                    <button onClick={() => { filters("electronics") }}>Electronics</button>
                </ButtonChild>
            </Cat>
            <CatMain >
                {
                    data.map((curr) => {
                        return (
                            <CatCart key={curr.id}>
                                <Catimg>
                                    <img src={curr.image} alt="" />
                                </Catimg>
                                <h5 className='first'><span>Title</span>{curr.title}</h5>
                                <h5><span>Price</span>{curr.price}</h5>
                                <CatButton>
                                    <button>ADD TO CART<FaShoppingCart className='icon7' /></button>
                                </CatButton>
                            </CatCart>

                        )
                    })
                }

            </CatMain>



        </>
    )
}

export default Categories