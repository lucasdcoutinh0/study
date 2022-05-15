import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes/Routes'
import { BrowserRouter} from "react-router-dom"
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Rotas/>
  </BrowserRouter>
);
