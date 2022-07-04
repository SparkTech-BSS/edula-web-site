import { useState } from "react";

export function useAppConfig() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  function handleToogleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return {
    toggleMenu,
    setToggleMenu,
    handleToogleMenu,
  };
}