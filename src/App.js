import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Member1 from "./pages/Member1";
import Member2 from "./pages/Member2";
import Member3 from "./pages/Member3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member1" element={<Member1 />} />
        <Route path="/member2" element={<Member2 />} />
        <Route path="/member3" element={<Member3 />} />
      </Routes>
    </Router>
  );
}

export default App;