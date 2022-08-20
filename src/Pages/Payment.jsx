import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const MainContainer = styled.div`
background-image: url("https://i.pinimg.com/originals/6c/ef/f9/6ceff9373af907010ca0cc47190601f3.jpg");
width: 100vw;
height:100vh;
position: relative;
background-repeat: no-repeat;
background-size:cover;
`
const SubMain=styled.div``
const SubContainer = styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 50vw;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
@media screen and (max-width:687px){
  width: 100%;
  height: 100%;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
`
const Heading = styled.div`

h3{
  color: #524c41;
  text-transform: uppercase;
  margin-right: 0.5rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
}
`
const DataContainer = styled.div`
overflow: scroll;
`
const First = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Second = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Third = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Fourth = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Fifth = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Sixth = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;  
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Seventh = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Eight = styled.div`
input{
  border: 1px solid gray;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.9rem;
  padding-right: 0.7rem;
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  @media screen and (max-width:687px){
    width: 15rem;
    height: 2rem;
  }
}
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
button{
  color: white;
  padding-top: 0.1rem;
  background-color: #d40a80;
  height: 6vh;
  width: 10rem;
  border-radius: 23px;
  border: 48px;
  outline: none;
  cursor: pointer;
  margin-bottom: .4rem;
  }
  @media screen and (max-width:687px){
    font-size: 1.2rem;
    height: 10vh;
    width: 12rem;
    border-radius: 28px;
    border: 50px;
}
`

const Payment = () => {
  const nav=useNavigate()
  const navigate=()=>{
    nav("/thanks")
}

  return (
    <MainContainer>
      <SubMain>
        <SubContainer>
          <Heading>
            <h3>Payment Details</h3>
          </Heading>
          <DataContainer>
            <First>
              <input type="text" placeholder='Enter Your Full Name' required />
            </First>
            <Second>
              <input type="tel" placeholder='Enter Your PhoneNumber' required/>
            </Second>
            <Third>
              <input type="text" placeholder='Enter Your Country' required />
            </Third>
            <Fourth>
              <input type="text" placeholder='Enter Your City' required />
            </Fourth>
            <Fifth>
              <input type="text" placeholder='Enter Your Address' required />
            </Fifth>
            <Sixth>
              <input type="datetime-local" required />
            </Sixth>
            <Seventh>
              <input type="text" placeholder='Enter Your Card Number' required />
            </Seventh>
            <Eight>
              <input type="text" placeholder='Enter CCV' required />
            </Eight>
            <Button>
              <button onClick={navigate}>SUBMIT</button>
            </Button>
          </DataContainer>
        </SubContainer>
      </SubMain>
    </MainContainer>
  )
}

export default Payment
