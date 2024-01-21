import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
