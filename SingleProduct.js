import React, { useContext }  from 'react';
import {Emp} from '../context/Context';
import {Table,Button} from 'react-bootstrap';
import {Link}from 'react-router-dom';

//import BsFillPeopleFill from 'react-icons/bs'

const SingleProduct=()=>{

    //const[contacts,setContacts]=useState(Context)
    const {employee}=useContext(Emp)
   
    
    return <div className="productContainer">
      <Table striped bordered hover variant="dark">
            <thead>
                <tr>
              
                    <th>Emp Id</th>
                    <th>Emp Name</th>
                    <th>Position</th>
                    <th>Gender</th>
                    
                    <th>View</th>
                    
                </tr>
            </thead>
            <tbody>
                {employee.map((empl)=>(
                    <tr>
                       
                       <td>{empl.id}</td> 
                       <td>{empl.fullName}</td> 
                       <td>{empl.Position}</td>
                       <td>{empl.Gender}</td>
                       
                       <td>
                          <Link to = 'Card'><Button type='submit' className="btn btn-primary" onClick={'/card'}>View</Button></Link>
                           
                       </td>
                    </tr>
                   
                ))}
                
                    
                
            </tbody>
        </Table>
    </div>
}
export default SingleProduct;

// import { createContext, useContext, useReducer } from "react";
// //import  faker  from "faker";
// import { cartReducer } from "./Reducers";

// const Cart = createContext();

// const Context = ({children}) => {
//     const products=[
//         {
//             id: '1',
//             name: 'Mobile',
//             price: 4400,
//             image: 'https://cdn.pixabay.com/photo/2017/07/04/08/22/iphone-2470313_960_720.png',
//           },
//           {
//             id: '2',
//             name: 'Shoes',
//             price: 2400,
//             image: 'https://cdn.pixabay.com/photo/2017/03/01/05/43/pink-shoes-2107618_960_720.jpg',
//           },
//           {
//             id: '3',
//             name: 'T-Shirt',
//             price: 1300,
//             image: 'https://media.istockphoto.com/photos/blank-mock-up-with-yellow-tshirt-isolated-on-white-background-picture-id1300884720?s=612x612',
//           },
//           {
//             id: '4',
//             name: 'Chudi',
//             price: 2000,
//             image:
//               'https://cdn.pixabay.com/photo/2021/04/19/13/23/suits-me-online-6191399_960_720.jpg',
//           },
//           {
//             id: '5',
//             name: 'Smart Watch',
//             price: 2300,
//             image: 'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_960_720.jpg',
//           },
        
      
//         ]
//     //console.log(products);
//     const[state,dispatch]=useReducer(cartReducer,{
//         products:products,
//         cart:[]
//     });
//     return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
// };

// export default Context;
// export const CartState=()=>{
//     return useContext(Cart)
// }
