import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Header from "./component/Header"
import Counter from "./component/Counter"

function App() { 

  return (
    <>
    <Header/>
    <Counter/>
    
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">introduce</Link> | <Link to="/login">login</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
