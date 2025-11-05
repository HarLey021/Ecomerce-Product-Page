import MainPage from "./components/mainPage/MainPage";
import { useState } from "react";
import { useRef } from "react";
import { MainContext } from "./contexts/MainContext";

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
