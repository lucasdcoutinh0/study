import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home';
import Counter from '../pages/Counter'
import Toaster from '../pages/Toaster'
const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/toaster" element={<Toaster/>}/>
        </Routes>
    )
}
export default Rotas