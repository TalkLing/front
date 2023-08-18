import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ children, toggleModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <AiOutlineClose className="close" onClick={toggleModal} />
        {children}
      </div>
    </div>,
    modalRoot
  );
}
