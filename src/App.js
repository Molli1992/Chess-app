import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import SingUp from "./components/sing-up/sing-up";
import Profile from "./components/profile/profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
