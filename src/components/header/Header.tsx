import Cart from "../cart/Cart";

const Header: React.FC<HeaderProps> = ({
  showCart,
  setShowCart,
  setShowMenu,
}) => {
  return (
    <>
      <div className="w-full h-[68px] px-[24px] py-[20px] flex justify-between items-center relative">
        <div className="w-[170px] flex justify-between items-center">
          <button
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <img src="/logo.svg" alt="sneakers logo" />
        </div>

        <div className="w-[68px] flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCart(!showCart);
            }}
          >
            <img src="/icon-cart.svg" alt="cart" />
          </button>
          <img
            src="/image-avatar.png"
            alt="avatar"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default Header;
