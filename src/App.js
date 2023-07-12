import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import SingUp from "./components/sing-up/sing-up";
import Profile from "./components/profile/profile";
import Learn from "./components/learn/learn";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learn" element={<Learn />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
