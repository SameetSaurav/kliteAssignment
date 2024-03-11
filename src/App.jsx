import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx'
import Development from './pages/development/development.jsx';
import Design from './pages/design/design.jsx';
import Marketing from './pages/marketing/marketing.jsx';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/development" element={<Development/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
