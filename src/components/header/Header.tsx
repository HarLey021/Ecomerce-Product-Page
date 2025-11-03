import Cart from "../cart/Cart";

const Header: React.FC<HeaderProps> = ({
  showCart,
  setShowCart,
  setShowMenu,
}) => {
  return (
    <>
      <div className="w-full h-[68px] px-[24px] py-[20px] flex justify-between items-center relative lg:p-0 lg:h-[50px] lg:mb-[34px] ">
        <div className="w-[170px] flex justify-between items-center">
          <button
            onClick={() => {
              setShowMenu(true);
            }}
            className="lg:hidden"
          >
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <img src="/logo.svg" alt="sneakers logo" />
          <ul className="hidden text-[15px] text-grey lg:flex gap-[20px] ml-[56px]">
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="w-[68px] flex justify-between items-center lg:w-[120px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCart(!showCart);
            }}
          >
            <img src="/icon-cart.svg" alt="cart" className="cursor-pointer" />
          </button>
          <img
            src="/image-avatar.png"
            alt="avatar"
            className="w-[24px] h-[24px] lg:w-[50px] lg:h-[50px] cursor-pointer"
          />
        </div>
      </div>
      <div className="hidden lg:flex w-[full] h-[1px] bg-[#E4E9F2] mb-[90px]"></div>
      {showCart && <Cart />}
    </>
  );
};

export default Header;
