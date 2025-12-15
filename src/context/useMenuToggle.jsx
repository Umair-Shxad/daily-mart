import { createContext, useContext, useState } from "react";

const BurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  function toggleSidebar() {
    setIsOpenSidebar((open) => !open);
  }
  return (
    <BurgerMenuContext.Provider value={{ isOpenSidebar, toggleSidebar }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

function useMenuToggle() {
  const context = useContext(BurgerMenuContext);

  if (context === undefined) throw new Error("context used outside");

  return context;
}

export { BurgerMenuProvider, useMenuToggle };
