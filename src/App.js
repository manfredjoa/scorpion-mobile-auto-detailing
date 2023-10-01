import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome/WelcomePage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
