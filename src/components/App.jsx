import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Menu from "./menu/Menu"

const App = () =>{

    if(!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login"/> 
    return (
        <>
           <Menu/>
           <Outlet/>
        </>
    )
}

export default App