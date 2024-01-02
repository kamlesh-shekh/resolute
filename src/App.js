// import Nevbar from "./Components/Nevbar";
import AllPages from "./Components/AllPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllPages />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
