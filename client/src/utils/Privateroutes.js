import { Outlet, Navigate } from "react-router-dom";

function PrivatesRoutes() {
    let auth = localStorage.getItem("token");
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )

}

export default PrivatesRoutes; 