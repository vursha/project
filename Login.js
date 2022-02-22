//import  './components/style.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp(props){
    const [email,setEmail]=useState('');
    let errorsObj={email:'',password:''};
    const[errors,setErrors]=useState(errorsObj);
    const [password,setpassword]=useState('');

    function onSignUp(e){
        e.preventDefault();
        let error=false;
        const errorObj={...errorsObj};
        if(email===''){
            errorObj.email="Email is Required";
            error=true;
        }
        if(password===''){
            errorObj.password="password is Required";
            error=true;
        }
        setErrors(errorObj);
        if(!error){
            console.log('Form submit')
        }
    }
    return(
        <div className="app">
            <div className="w-1/3">
                <h1 className="text-2xl font-extrabold">Sign Up</h1>

                <form onSubmit={onSignUp}>
                    <div>
                        <label>Email</label>
                        <div>
                             <input type='text'
                             className="border border-gray-600 p-1"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             />
                        </div>
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input type='password'
                            className="border border-gray-600 p-1"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <div className="my-3">
                        <Link  to ='Home'><button type='submit'
                         className="bg-green-700 text-black px-3 py-1" onClick={'/home'}>Sign Up</button></Link>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp