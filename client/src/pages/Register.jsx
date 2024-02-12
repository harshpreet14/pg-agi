import {useState} from 'react';

function Register() {
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        company : "",
        location : "",
        email : "",
        password: ""
    })

    return (
        <div>
            <form>
              <label> First Name </label> 
              <input type='text' placeholder="John" value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})}></input> 
              <label> Last Name </label> 
              <input type='text' placeholder="Doe" value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}></input>
              <label> Company </label> 
              <input type='text' placeholder="X Company" value={data.company} onChange={(e) => setData({...data, company: e.target.value})}></input> 
              <label> Location </label> 
              <input type='text' placeholder="Noida" value={data.location} onChange={(e) => setData({...data, location: e.target.value})}></input> 
              <label> Email </label> 
              <input type='text' placeholder="johndoe@xcompany.com" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input> 
              <label> Password </label> 
              <input type='password' placeholder="enter password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input> 
              <button type='submit'> Register</button>
            </form>
        </div>
    )
}

export default Register
