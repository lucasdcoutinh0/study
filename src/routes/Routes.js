import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home';
import Counter from '../pages/Counter';
import Toaster from '../pages/Toaster';
import ToDoList from "../pages/ToDoList";
import PassGem from '../pages/PassGem'
const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/toaster" element={<Toaster/>}/>
            <Route path="/todolist" element={<ToDoList/>}/>
            <Route path="/passgem" element={<PassGem/>}/>
        </Routes>
    )
}
export default Rotas