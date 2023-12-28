import React from 'react';
import './Navbar.css'; // Import CSS for styling
import { useDispatch } from 'react-redux';
import authReducer from '../../redux/reducers/auth.reducer';
import userReducer from '../../redux/reducers/user.reducer';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../utility/utils';
import { useUserdata } from '../../hooks/useUserdata';
import { useAlert } from '../../hooks/useAlert';


const NavBar = () => {

    const {currentUser} = useUserdata()
    const logout = authReducer.actions.logout;
    const removeUser = userReducer.actions.removeUser;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Alert = useAlert();


    const handleLogout = () => {
        dispatch(logout());
        dispatch(removeUser());
        navigate('/', {
            replace: true
        })
        Alert('info',"Logged successfully")
    }

    return (
        <nav className="navbar">
            <div className="left">
                {/* Company Logo */}
                <img src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg" alt="Company Logo" className="company-logo" />
            </div>
            <div className="right">
                {/* User Avatar/Logo */}
                <Avatar {...stringAvatar(currentUser?.name)} />
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default NavBar;
