import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  );
}

export default App;
