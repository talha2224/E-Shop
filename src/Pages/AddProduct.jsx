// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import { FaStackExchange } from 'react-icons/fa'
// const ADD_PRODUCT_CONTAINER = styled.div`
// display: flex;

// `
// const Sub_Container = styled.div`
// height: 100vh;
// flex: 1;
// h2{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: 'Roboto', sans-serif;
//     margin-top: 2rem;
//     margin-bottom: 1rem;
// }
// `
// const Parts = styled.div`
// li{
//     margin-left: 1rem;
//     list-style: none;
//     text-decoration: none;
//     font-family: 'Roboto', sans-serif;
//     margin-top:2rem ;
//     margin-right: 1rem;
//     cursor: pointer; 
//     color: blue;
//     &:hover{
//         color: white;
//         background: #585757;
//         transition: 0.3s ease;
//     }
// }
// `
// const Add_Main = styled.div`
// position: relative;
// flex: 3;
// height: 100vh;

// `
// const Sub_Main = styled.div`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%,-50%);
// h2{
//     font-family: 'Roboto', sans-serif;
//     margin-bottom: 1rem;
//     text-align: center;
// }
// `

// const SUB = styled.div`
// input{
//     margin-bottom: 1rem;
//     width: 30rem;
//     height: 2rem;
//     border: 2px solid gray;
//     outline:none;
//     padding-right:0.5rem;
//     ::placeholder{
//         padding-left:1rem;
//         text-transform: uppercase;
//         font-family: 'Roboto', sans-serif;
//         color: #1d1c1c;
//     }
// }
// `
// const SU = styled.div`
// input{
//     margin-bottom: 1.5rem;
// }
// `
// const BTN = styled.div`
//     text-align: center;
// button{
//     outline:none;
//     width: 10rem;
//     height: 2rem;
//     background-color:white;
//     color:black;
//     cursor:pointer;
//     span{
//         font-family: 'Roboto', sans-serif;
//         font-weight:500;
//         font-size: 1rem;
//     }
// }
// `
// const AddProduct = () => {
//     const [title, setTitle] = useState("")
//     const [desc, setDesc] = useState("")
//     const [img, setImg] = useState()
//     const [price, setprice] = useState("")
//     const [cat,setCat]=useState("")
//     const changetitle = (e) => {
//         e.preventDefault()
//         setTitle(e.target.value)
//     }
//     const changeimg = (e) => {
//         e.preventDefault()
//         setImg(e.target.value)
//     }
//     const changedesc = (e) => {
//         e.preventDefault()
//         setDesc(e.target.value)
//     }
//     const changeprice = (e) => {
//         setprice(e.target.value)
//     }
//     const changecat=(e)=>{
//         setCat(e.target.value)
//     }
    
//     return (
//         <ADD_PRODUCT_CONTAINER>
//             <Sub_Container>
//                 <h2>Admin</h2>
//                 <Parts>
//                     <ul>
//                         <li>Add a product</li>
//                         <li>Update a product </li>
//                         <li>Delete a product</li>
//                         <li>Chart</li>
//                     </ul>
//                 </Parts>
//             </Sub_Container><hr />
//             <Add_Main>
//                 <Sub_Main>
//                     <h2>ADD PRODUCTS </h2>
//                     <SUB>
//                         <input type="text" placeholder='add product title' value={title} onChange={changetitle} />

//                     </SUB>
//                     <SUB>

//                         <input type="text" placeholder='add product description' value={desc} onChange={changedesc} />
//                     </SUB>
//                     <SUB>

//                         <input type="text" placeholder='price' value={price} onChange={changeprice} />
//                     </SUB>
//                     <SUB>

//                         <input type="text" placeholder='category' value={cat} onChange={changecat} />
//                     </SUB>
//                     <SU>

//                         <input type="file" value={img} onChange={changeimg} />
//                     </SU>
//                     <BTN>
//                         <button  > <span>SUBMIT</span></button>
//                     </BTN>

//                 </Sub_Main>
//             </Add_Main>

//         </ADD_PRODUCT_CONTAINER>
//     )
// }

// export default AddProduct
