import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/home';
import Dashboard from './pages/dashboard';
import Update from './pages/update';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
      <Route path='/update/:id' element={<Update/>} ></Route>
    </Routes>
  )
}

export default App
