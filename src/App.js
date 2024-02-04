import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;