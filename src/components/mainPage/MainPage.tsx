import { useState } from "react";
import Header from "../header/Header";
import Product from "../product/Product";
import Menu from "../menu/Menu";
import Gallery from "../gallery/Gallery";

const MainPage: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  return (
    <>
      {showGallery && <Gallery setShowGallery={setShowGallery} />}
      <div
        onClick={() => {
          setShowCart(false);
        }}
        className="w-full min-h-screen bg-white relative lg:px-[165px] lg:pt-[28px] lg:pb-[132px]"
      >
        {showMenu && <Menu setShowMenu={setShowMenu} />}

        <Header
          showCart={showCart}
          setShowCart={setShowCart}
          setShowMenu={setShowMenu}
        />
        <Product setShowGallery={setShowGallery} />
      </div>
    </>
  );
};

export default MainPage;
