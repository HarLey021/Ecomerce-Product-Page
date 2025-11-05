import { createContext } from "react";

export const MainContext = createContext<MainContextType>({
  index: 0,
  setIndex: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartContent: false,
  setCartContent: () => {},
  quantityRef: { current: 0 },
});
