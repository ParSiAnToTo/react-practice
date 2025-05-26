import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Users from "./pages/Users"
import Header from "./component/Header"
import Counter from "./component/Counter"
import UserDetail from "./pages/UserDetail"

function App() { 

  return (
    <>
    <Header/>
    <Counter/>
    
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">introduce</Link> | <Link to="/login">login</Link> | <Link to="/users">user list</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/:id" element={<UserDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
