import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes,} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoutes from './PrivateRoutes';

function App() {
  
  return (
    <>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />

          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<Home/>}></Route>
          </Route>
    
      </Routes>
    </>
  );
}

export default App;