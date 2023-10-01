import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import WelcomePage from "./pages/welcome/WelcomePage";
import HomePage from "./pages/home/HomePage";

function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  return (
    <main>
      {!isWelcomePage && <NavBar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
