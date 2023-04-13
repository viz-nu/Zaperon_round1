import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import PrivatesRoutes from './utils/Privateroutes';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />}></Route>
      <Route element={<PrivatesRoutes />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
