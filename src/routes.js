import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Sobre from "./Components/Pages/Sobre";
import Professor from "./Components/Pages/Professor";
import Igreja from "./Components/Pages/Igreja";
import Login from "./Components/Pages/Login"
import Signup from "./Components/Pages/Signup"


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Professor" element={<Professor/>}/>
                <Route path="/Igreja" element={<Igreja/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;