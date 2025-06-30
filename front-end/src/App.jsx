import { BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/register"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes path="/">
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin/*" element={<Admin/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
