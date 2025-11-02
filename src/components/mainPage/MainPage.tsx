import { useState } from "react";
import Header from "../header/Header";
import Product from "../product/Product";
import Menu from "../menu/Menu";

const MainPage: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => {
          setShowCart(false);
        }}
        className="w-full min-h-screen bg-white relative"
      >
        {showMenu && <Menu setShowMenu={setShowMenu} />}
        <Header
          showCart={showCart}
          setShowCart={setShowCart}
          setShowMenu={setShowMenu}
        />
        <Product />
      </div>
    </>
  );
};

export default MainPage;
