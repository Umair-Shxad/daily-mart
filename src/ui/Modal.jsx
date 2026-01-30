import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <div className="relative">
        <button
          className="absolute right-0 rounded-2xl p-2 bg-gray-100 cursor-pointer transition-all duration-300 hover:text-gray-500 hover:bg-gray-50 z-9999"
          onClick={close}
        >
          close
          <CgClose />
        </button>
      </div>
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
