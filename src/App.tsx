import MainPage from "./components/mainPage/MainPage";
import { createContext, useState } from "react";

export const MainContext = createContext<MainContextType>({
  index: 0,
  setIndex: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartContent: false,
  setCartContent: () => {},
});

function App() {
  const [index, setIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [cartContent, setCartContent] = useState<boolean>(false);
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
        }}
      >
        <MainPage />
      </MainContext.Provider>
    </>
  );
}

export default App;
