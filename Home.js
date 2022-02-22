import { EmpState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from './Filter';
import './style.css';
//import Table from 'react-bootstrap'

const Home=()=>{

    const { state:{employees}}  = EmpState();

   console.log(employees);
    return(
        <div className="home">
            <Filters/>
            <div className="productContainer">
                {/* {
                    products.map((prod)=>{
                    return <SingleProduct prod={prod} key={prod.id}/>
                    })
                } */}
                <SingleProduct/>
            </div>
            
        </div>
    );
};
export default Home;

// const Home=()=>{
//     const [contacts,setContacts]=useState(products);
//     return(
//         <div className="app-container">
//             <Filters/>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>phoneNumber</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {contacts.map((contact)=>(
//                         return<SingleProduct contact={contacts} key={contacts.id}/>
//                        <tr>
//                        <td>{contact.fullName}</td>
//                        <td>{contact.address}</td>
//                        <td>{contact.phoneNumber}</td>
//                        <td>{contact.email}</td>
//                    </tr>
//                     ))}
                   
//                 </tbody>
//             </table>
//         </div>
//     )
// }