import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import WelcomePage from "./pages/welcome/WelcomePage";
import HomePage from "./pages/home/HomePage";
import PricingPage from "./pages/pricing/PricingPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  return (
    <>
      {!isWelcomePage && <NavBar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
