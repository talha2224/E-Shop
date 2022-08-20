import React,{useState} from 'react'
import styled from 'styled-components'
import { useNavigate,Link } from 'react-router-dom'
const Container=styled.div`
::-webkit-scrollbar {
  display: none;
}
width: 100vw;
height: 100vh;
position: relative;
background: rgb(5,14,228);
background: linear-gradient(200deg, rgba(5,14,228,1) 40%, rgba(0,181,255,0.9192051820728291) 86%);
`
const SubContainer=styled.div`
::-webkit-scrollbar {
  display: none;
}
width: 30vw;
overflow: scroll;
height: 30vw;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: 2px solid white;
border-radius: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
 font-family: 'Roboto', sans-serif;
}
input{
  margin-bottom:1rem;
  border: 1rem;
  width: 16rem;
  outline: none;
  height: 1.9rem;
  border-radius: 4rem;
}
button{
  color:white;
  width: 12rem;
  background-color: #d40a80;
  height: 5vh;
  border-radius:30px;
  border: 12px solid  #d40a80;
  border: none;
  outline: none;
  cursor: pointer;
}
p{
  font-family: 'Roboto', sans-serif;
  span{
    text-decoration: underline;
    font-weight: bolder;
  }
}

`


const Login = () => {
    const navigate = useNavigate()
    const route=()=>{
      navigate("/signup")
    }
    const nav = useNavigate("/admin")
    const navs = useNavigate()
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const ema=(e)=>{
      setEmail(e.target.value)
    }
    let a=email
    let b=password
    const pass=(e)=>{
      setPassword(e.target.value)
    }
    console.log(email,password)
    const sub=()=>{
      if(a=="talhahaider074@gmail.com" && b=="talha123"){
        <Link to="/home"/>
      }else{
        <Link to="/home"/>
      }

    }
  return (
    <Container>
        <SubContainer>
            <h2>LOGIN</h2>
            <input type="email"placeholder='Enter Your Email' onChange={ema} value={email}/>
            <input type="password" placeholder='Enter Your Password' onChange={pass} value={password}/>
            <button onSubmit={sub}>Submit</button>
            <p>if you don't have an account please <span onClick={route}>Signup</span></p>
        </SubContainer>
    </Container>
  )
}

export default Login
