// import { createContext, useContext, useReducer } from "react";
// //import  faker  from "faker";
// import { empReducer } from "./Reducers";

// const Emp = createContext();

// const Context = ({children}) => {
    
//             const products=[
                
//                     {
//                       id: 1,
//                       fullName: "Jenny Chan",
//                       address: "3 waterfoot road",
//                       phoneNumber: "333-962-7516",
//                       email: "jenny.chan@email.com"
//                     },
//                     {
//                       id: 2,
//                       fullName: "Jessica warren",
//                       address: "4 tall town",
//                       phoneNumber: "011-211-7516",
//                       email: "jessica.warren@email.com"
//                     },
//                     {
//                       id: 3,
//                       fullName: "Tony Frank",
//                       address: "11 lesly road",
//                       phoneNumber: "788-962-7516",
//                       email: "tony.frank@email.com"
//                     },
//                     {
//                       id: 4,
//                       fullName: "Jeremy Clark",
//                       address: "333 miltown manor",
//                       phoneNumber: "011-962-111",
//                       email: "jeremy.clark@email.com"
//                     },
//                     {
//                       id: 5,
//                       fullName: "Raymond Edwards",
//                       address: "99 blue acres",
//                       phoneNumber: "3231-962-7516",
//                       email: "raymon.edwards@email.com"
//                     }
                  
//                 ]
            
//     //console.log(products);
//     const[state,dispatch]=useReducer(empReducer,{
//         products:products,
//         emp:[]
//     });
//     return <Emp.Provider value={{state,dispatch}}>{children}</Emp.Provider>
// };

// export default Context;
// export const EmpState=()=>{
//     return useContext(Emp)
// }
import React,{createContext,useState,useReducer,useContext}from 'react';
 import { empReducer } from "./Reducers";
//import BsFillPeopleFill from 'react-icons/bs'

export const Emp=createContext();
export const Context=(props)=>{
  const [employee,setEmployee]=useState([
                        {
                            //img:BsFillPeopleFill,
                            id: 101,
                            fullName: "Jenny Chan",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "jenny.chan@email.com"
                            
                          },
                          {
                            id: 102,
                            fullName: "Jessica warren",
                            Position: "Developer",
                            Gender:"Female",
                            email: "jessica.warren@email.com"
                          },
                          {
                            id: 103,
                            fullName: "Tony Frank",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "tony.frank@email.com"
                          },
                          {
                            id: 104,
                            fullName: "Jeremy Clark",
                            Position: "Developer",
                            Gender:"Female",
                            email: "jeremy.clark@email.com"
                          },
                          {
                            id:105,
                            fullName: "Raymond Edwards",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "raymon.edwards@email.com"
                          },
                        
  ]);
              const[state,dispatch]=useReducer(empReducer,{
                employees:employee
              
         });
  return(
    <div>
      <Emp.Provider value={{employee,setEmployee,state,dispatch}}>
        {props.children}
      </Emp.Provider>
    </div>
  )
}
export const EmpState=()=>{
    return useContext(Emp)
}