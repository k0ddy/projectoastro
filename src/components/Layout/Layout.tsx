import React, {useState} from "react";
import {Header} from "../Header";

//todo: substitute plugin
/* import '../../styles/monokai.css'; */
import {Footer} from "../Footer";
import {ModalMenu} from "../ModalMenu";
import {ThemeIcon} from "../ThemeIcon";

/* import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'; */
/* deckDeckGoHighlightElement(); */

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isContactShown, setIsContactShown] = useState(false);
  const [scrolledY, setScrolledY] = useState(0);

  function toggleMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!(e.target instanceof HTMLElement || e.target instanceof SVGElement)) {
      return;
    }
    let targetId = e.target.id;
    if (targetId === "modal-menu") return;
    document.body.classList.toggle("modal");
    setIsModalShown(!isModalShown);
  }

  function toggleContact(e: any) {
    document.body.classList.toggle("modal");
    setIsContactShown(!isContactShown);
  }

  return (
    <div className="relative w-full">
      <ModalMenu
        isModalShown={isModalShown}
        toggleMenu={toggleMenu}
        scrolledY={scrolledY}
        setScrolledY={setScrolledY}
      />
      <Header toggleMenu={toggleMenu} />
      {children}
      <ThemeIcon />
      <Footer />
    </div>
  );
};

export default Layout;
