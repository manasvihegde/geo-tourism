import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import States from "./pages/States";
import StatePlaces from "./pages/StatePlaces";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
        <Route path="/states/:state" element={<StatePlaces />} />
      </Routes>
    </BrowserRouter>
  );
}
