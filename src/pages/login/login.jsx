import React, { useLayoutEffect, useState } from 'react'
import styles from './login.module.css'
import Data from '../../Data/User';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/useAlert';
import userReducer from '../../redux/reducers/user.reducer';
import authReducer from '../../redux/reducers/auth.reducer';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useUserdata } from '../../hooks/useUserdata';

const Login = () => {


    const setUser = userReducer.actions.setUser;
    const login = authReducer.actions.login;
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Alert = useAlert()


    useLayoutEffect(() => { 
        if (Cookies.get("tokenId")) {
            const tk = Cookies.get('tokenId').split("_")[1];
            dispatch(setUser(Data.users.filter((user) => user.id == tk)[0]));
            dispatch(login());
            navigate('/landing')
        }
    }, [])

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isUser = Data.users.filter((user) => user.name.replace(' ', '').toLowerCase() === username.replace(' ', '').toLowerCase())
        if (isUser.length > 0) {
            Alert('success', "Logged in successfully")
            dispatch(setUser(isUser[0]));
            dispatch(login());
            Cookies.set('tokenId', new Date().getTime() + "_" + isUser[0].id, {
                expires: 1
            });
            navigate('/landing', {
                replace: true
            })

        } else {
            Alert('error', "Please check your username")
            setUsername("")
        }
    };

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg" alt="" />
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    className={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleInputChange}
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    )
}

export default Login