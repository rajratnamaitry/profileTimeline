import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
    </Routes>
  )
}

export default App
