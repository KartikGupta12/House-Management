import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import EnterProducts from "./components/EnterProducts";
import Graphs from "./components/Graphs";
import ProductRecommendation from "./components/ProductRecommendation";
import Login from "./components/Login";
import Register from "./components/Register";
import "./CSS/Login.css"
import "./CSS/Navbar.css"
import "./CSS/EnterProduct.css"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/EnterProducts" element={<EnterProducts/>}/>
                        <Route path="/Graphs" element={<Graphs/>}/>
                        <Route path="/ProductRecommendation" element={<ProductRecommendation/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
