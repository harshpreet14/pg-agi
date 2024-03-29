import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';

function Login() {
    const [data, setData] = useState({
        email : "",
        password: ""
    })
    const navigate = useNavigate();

    const loginUser =  async(e) =>{
        e.preventDefault();
        const {email, password} = data
        try{
            const {data} = await axios.post('/login', {
                email, 
                password
            });
            if(data.error){
                toast.error(data.error)
            }else{
                setData({});
                navigate('/home');
            }
        }catch(error){
            console.log(error);
        }
        
    }

    return (
        <div>
            <form>
              <label> Email </label> 
              <input type='text' placeholder="johndoe@xcompany.com" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input> 
              <label> Password </label> 
              <input type='password' placeholder="enter password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input> 
              <button type='submit' onClick={loginUser}> Login </button>
            </form>
        </div>
    )
}

export default Login;
