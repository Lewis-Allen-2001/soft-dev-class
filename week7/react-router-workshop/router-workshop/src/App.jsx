import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Trending from "./Components/Pages/Trending";

export default function App() {
  return (
    <>
     <h1>Welcome To Video Game Libary!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<p>This is home route</p>} />
        <Route path="/trending" element={<Trending/>} />
      </Routes>
    </>
  )
}

