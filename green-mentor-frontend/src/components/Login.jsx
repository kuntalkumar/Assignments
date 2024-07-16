    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { login } from '../store/actions/authActions';

    function Login() {
        const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ email, password }))
        .then(() => {
            navigate('/todos');
        })
        .catch(error => {
            console.error('Login error:', error);
        });
    };

    return (
        <div className='login-container'>
        <h2>Login</h2>
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button onClick={handleLogin} >Login</button>
        </div>
    );
    }

    export default Login;
