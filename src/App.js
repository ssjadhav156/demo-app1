import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
