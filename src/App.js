import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter } from "react-router-dom";
import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
         <Header />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
