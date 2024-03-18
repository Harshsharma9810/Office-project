import React from 'react'
import Home2 from '../Pages/Home2'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isLogin}) => {
    
    return(
        isLogin? <Home2/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes