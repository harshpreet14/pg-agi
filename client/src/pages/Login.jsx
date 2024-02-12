import { useState } from "react";
import axios from 'axios';


function Login() {
    const [data, setData] = useState({
        email : "",
        password: ""
    })

    const loginUser = (e) =>{
        e.preventDefault();
        axios.get('/');
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
