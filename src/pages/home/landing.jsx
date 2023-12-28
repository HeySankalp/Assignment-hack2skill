import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import Mainsection from '../../components/Mainsection/mainsection'
import { useUserdata } from '../../hooks/useUserdata'

const Landing = () => {
 
    const {currentUser, isLoggedIn} = useUserdata()

    console.log(currentUser, isLoggedIn);

    return (
        <div>
            <NavBar />
            <Mainsection />
        </div>
    )
}

export default Landing