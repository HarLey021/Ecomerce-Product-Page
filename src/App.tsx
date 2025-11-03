import MainPage from "./components/mainPage/MainPage";
import { createContext, useState } from "react";
import { useRef } from "react";

export const MainContext = createContext<MainContextType>({
  index: 0,
  setIndex: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartContent: false,
  setCartContent: () => {},
  quantityRef: 0,
});

function App() {
  const [index, setIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [cartContent, setCartContent] = useState<boolean>(false);

  let quantityRef = useRef<number>(0);
  return (
    <>
      <MainContext.Provider
        value={{
          index,
          setIndex,
          quantity,
          setQuantity,
          cartContent,
          setCartContent,
          quantityRef,
        }}
      >
        <MainPage />
      </MainContext.Provider>
    </>
  );
}

export default App;
