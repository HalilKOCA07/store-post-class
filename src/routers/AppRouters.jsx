import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"

const AppRouters = () => {
    return(
        <div>
            <Routes>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
    )
}

export default AppRouters