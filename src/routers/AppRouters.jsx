import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Products from "../pages/Products"
import About from "../pages/About"
import AppNav from "../components/AppNav"

const AppRouters = () => {
    return(
        <div>
            <AppNav />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Home />}/>
                <Route path="/dashboard/products" element={<Products />}/>
                <Route path="/dashboard/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default AppRouters