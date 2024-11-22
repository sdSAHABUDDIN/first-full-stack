import { BrowserRouter,Routes,Route } from "react-router-dom";

import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}
