const Menu: React.FC<MenuProps> = ({ setShowMenu }) => {
  return (
    <>
      <div
        onClick={() => {
          setShowMenu(false);
        }}
        className="fixed w-full min-h-screen bg-black/75 z-5 "
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[250px] min-h-screen bg-white p-[25px]"
        >
          <button
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <img src="/icon-close.svg" alt="close menu" className="mb-[54px]" />
          </button>
          <ul className="text-[18px] font-bold text-black flex flex-col gap-[20px]">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
