import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import Learn from "./components/learn/learn";
import ChessGame from "./components/chess/chess";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/ChessGame" element={<ChessGame />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
