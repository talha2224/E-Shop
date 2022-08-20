import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@1,600&family=Roboto:wght@500&display=swap');
</style>
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

svg.icon2{
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
    color: #4e444487;
    font-weight: 900;
    margin-right: 0.8rem;
    margin-top: -1.5rem;
    @media screen and (max-width:500px){
        position: absolute;
        left: 35rem;
        font-size:3rem;
        margin-top:-3.8rem;
}
}
/* span{
    position: relative;
    left: 8.5rem;
    top: -1.6rem;
    font-weight: 800;
    font-size: larger;
    color: red;
    @media screen and (max-width:500px){
        left: 11rem;
        top:-0.6rem;
        font-weight: 800;
        font-size: larger;
        color: red;
    }
} */
`
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -20rem;

input{
    width: 50vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-input-placeholder {
    color: "red";
  }
    @media screen and (max-width:500px){
        margin-right:-8rem;
        height: 3rem;
        width: 17rem;
}

}
svg.icon{
    position: relative;
    left: -1.5rem;
    cursor: pointer;
    @media screen and (max-width:500px){
        left:5.5rem;
        font-size: 2rem;
    }
}
`
const Image = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width:687px){
    margin-top:-4.6rem;
}

 img{
    

    width: 30%;
    height: 10%;
    @media screen and (max-width:687px){
        width: 16rem;
        margin-right: 20rem;
        height: 16rem;
        background-color: #db3636;
        background-size:contain;

    }
}
`
const Home = styled.div`
margin-top: -1.3rem;
text-align: center;
@media screen and (max-width:500px){
    margin-top: -4rem;
    width: 40rem;

}

a.link{
    color: black;
    margin-right: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-decoration:none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    @media screen and (max-width:500px){
        font-size:1.5rem;
    }
}
`

const Navbar = () => {
    const nav=useNavigate()
    const navigates=()=>{
        nav("/")
    }

    return (
        <>
            <Container>
                <Image>
                    <img onClick={navigates} src="https://www.logolynx.com/images/logolynx/fb/fbc1bf6d8f9b9670c23a9417457d6e68.png" alt="" />
                    <Search>
                        <input type="text" />
                        <AiOutlineSearch className='icon' />
                    </Search>
                </Image>
                {/* <span>0</span> */}
                <Link to={"/"}>
                    <FaShoppingCart className='icon2' />
                </Link>
            </Container>
            <Home>
                <Link to="/" className='link'>Home</Link>
                <Link to="/product" className='link'>Products</Link>
                <Link to="/categories" className='link'>Categories</Link>
                {/* <Link to="/addproduct" className='link' style={{ "letterSpacing": "1px" }}> add product</Link> */}
            </Home>
        </>
    )
}

export default Navbar