const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-[68px] px-[24px] py-[20px] flex justify-between items-center">
        <div className="w-[170px] flex justify-between items-center">
          <button>
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <img src="/logo.svg" alt="sneakers logo" />
        </div>

        <div className="w-[68px] flex justify-between items-center">
          <button>
            <img src="/icon-cart.svg" alt="cart" />
          </button>
          <img
            src="/image-avatar.png"
            alt="avatar"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
