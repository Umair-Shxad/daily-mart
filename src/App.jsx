import { BurgerMenuProvider } from "./context/useMenuToggle";
import Homepage from "./pages/Homepage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <BurgerMenuProvider>
        <Header />
        <Homepage />
      </BurgerMenuProvider>
      <Footer />
    </>
  );
}

export default App;
