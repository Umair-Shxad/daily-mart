import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BurgerMenuProvider } from "./context/useMenuToggle";
import Homepage from "./pages/Homepage";
import Shop from "./pages/shop";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <BurgerMenuProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BurgerMenuProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
