import React from 'react'
import styled from 'styled-components'
const Err= styled.div`
    background-color: #055664;
    height: 100vh;
h2{
    font-family: "Roboto", sans-serif;
    text-align: center;
    padding-top: 50vh;

}
`


const Error = () => {
  return (
    <Err>
        <h2>Sorry! This Page Does'nt Exits</h2>
    </Err>
  )
}

export default Error