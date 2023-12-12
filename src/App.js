import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Ourservice from "./pages/Ourservice/Ourservice";
import Call from "./pages/Call/Call";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/service" element={<Ourservice />} />
        </Routes>
        <Call />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
