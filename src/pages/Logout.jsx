/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { logout } from "../services/auth.service";

const Logout = ({onLogout}) => {
    useEffect(() => {
        onLogout();
        logout();
    }, []);

    return (
        <div>Logout</div>
    )

}

export default Logout