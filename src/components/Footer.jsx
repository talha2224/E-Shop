import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components'
const FootContainer = styled.div`
display: flex;
justify-content: space-evenly;
height: 60vh;
padding-top: 3rem;
flex-wrap: wrap; 
background-color: #575151;
margin-top: 1rem;

@media screen and (max-width:500px){
    width: 40rem;
    height: 60vh;
}
`
const FootChild = styled.div`
margin-right: 1rem;

h2{
    color: #04b0ff;
    margin-bottom:1rem;
    font-family: 'Roboto', sans-serif;
    font-size:1.3rem;
    @media screen and (max-width:500px){
        font-size:1.8rem;

}
}
h5{
    font-size:1rem;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    span{
        font-family: 'Roboto', sans-serif;
        margin-bottom: 1rem;
    }
    @media screen and (max-width:500px){
        font-size:1.3rem;

}
    
}
h3{
    color:white;
    margin-bottom: 1rem;
    font-family: 'Roboto', sans-serif;

}
`
const FootChild2 = styled.div`


margin-right: 1rem;

h2{
    color: #04b0ff;    
    font-family: 'Roboto', sans-serif;
    font-size:1.3rem;
    margin-bottom:1rem;
    @media screen and (max-width:500px){
        font-size:1.8rem;

}
}
h5{
    font-size:1rem;
    color: white;
    margin-bottom: 1rem;
    font-family: 'Roboto', sans-serif;
    span{
        font-family: 'Roboto', sans-serif;
        margin-bottom: 1rem;
    }
    @media screen and (max-width:500px){
        font-size:1.3rem;

}
}
h3{
    margin-bottom: 1rem;
    color:white;
    font-family: 'Roboto', sans-serif;

}
`
const FootChild3 = styled.div`

margin-right: 1rem;

h2{
    color: #04b0ff;
    margin-bottom:1rem;
    font-family: 'Roboto', sans-serif;
    font-size:1.3rem;
    @media screen and (max-width:500px){
        font-size:1.8rem;

}
}
h5{
    margin-bottom: 1rem;
    font-size:1rem;
     color: white;
    font-family: 'Roboto', sans-serif;
    span{
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width:500px){
        font-size:1.3rem;

}
}
h3{
    color:white;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
}
`
const FootChild4 = styled.div`

margin-right:-0.3rem;

h2{
    color: #04b0ff;
    font-family: 'Roboto', sans-serif;
    font-size:1.3rem;
    margin-bottom:1rem;
    @media screen and (max-width:500px){
        font-size:1.8rem;

}
}
h5{
    font-size:1rem;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    span{
        font-family: 'Roboto', sans-serif;
        color: red;
        margin-bottom: 1rem;
    }
    @media screen and (max-width:500px){
        font-size:1.3rem;

}
}
h3{
    color:white;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;

}
`



const Footer = () => {
    return (
        <>
            <FootContainer>
                <FootChild>
                    <h2>SHOP</h2>
                    <h3>BY CATEGORY</h3>
                    <h5>Men</h5>
                    <h5>Women</h5>
                    <h5>Kids</h5>
                    <h5>Shop Home</h5>
                </FootChild>

                <FootChild2>
                    <h2>SPORT</h2>
                    <h5>Skate</h5>
                    <h5>Surf</h5>
                    <h5>Women Surf</h5>
                    <h5>Snow</h5>
                </FootChild2>

                <FootChild3>
                    <h2>SUPPORT</h2>
                    <h5>Store Locator</h5>
                    <h5>Order Status</h5>
                </FootChild3>

                <FootChild4>
                    <h2>CONTACT</h2>
                    <h3>Email</h3>
                    <h5><span>e-shop@gmail.com</span></h5>
                    <h3>TELEPHONE</h3>
                    <h5><span>855-909-8267</span></h5>
                </FootChild4>
            </FootContainer>
        </>
    )
}

export default Footer