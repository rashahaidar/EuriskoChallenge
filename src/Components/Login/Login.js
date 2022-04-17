import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginUrl } from '../../Helper/AppHelper';
import ApiServices from '../../Services/ApiServices';
import './Login.css'
import { login } from '../../features/userSlice'
import { setError, clearError } from '../../features/errorSlice'

const Login = () => {
    const { post } = ApiServices();
    const navigate = useNavigate();
  
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch();

    const label = useSelector(state => state.error.label)


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }

        post(LoginUrl, data).then((response) => {
            //debugger;
            dispatch(login({token: response.data.accessToken}))
            dispatch(clearError())
            navigate(`/dashboard`)
           
        }).catch(error=>{ 
            dispatch(setError())
        });
      
    }

    return (
        <div className='Login'>
            <h3>Sign In</h3>
            <div className="error-message">{label}</div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" onChange={(e) => { setUsername(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>
                <Button type="submit" disabled={username || password ? false : true}>
                    Submit
                </Button>
                
            </Form>
        </div>
    )
}

export default Login