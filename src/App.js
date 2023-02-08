import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import EnterProducts from "./components/EnterProducts";
import Graphs from "./components/Graphs";
import ProductRecommendation from "./components/ProductRecommendation";

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
