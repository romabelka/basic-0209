import { useState } from "react";

export const useTabs = (type, selectedItem) => {
  const [activeItem, setActiveItem] = useState(selectedItem);

  const changeActiveItem = id => {
    const isTabs = type === "tabs";
    const isAlreadyActive = activeItem === id;
    const idSelected = isAlreadyActive && !isTabs ? 0 : id;
    setActiveItem(idSelected);
  };

  return [activeItem, changeActiveItem];
};
