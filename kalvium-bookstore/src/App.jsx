import React from 'react';
import MainPage from './components/mainPage';
import Register from './components/register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/registration' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;