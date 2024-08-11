import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import Signup from "./Components/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
