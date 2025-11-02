const Cart: React.FC = () => {
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full min-h-[256px] absolute top-[76px] z-2 p-[8px]"
      >
        <div className="w-full h-[68px] bg-white rounded-t-[10px] p-[24px]">
          <h4 className="text-[16px] text-black font-bold ">Cart</h4>
        </div>
        <div className="w-full h-[1px] bg-[#E4E9F2] "></div>
        <div className="w-full min-h-[188px] bg-white rounded-b-[10px] p-[24px] shadow-[0_20px_50px_-20px_rgba(29,32,38,0.5)] flex justify-center items-center">
          <span className="text-[16px] text-grey font-bold ">
            Your cart is empty.
          </span>
        </div>
      </div>
    </>
  );
};

export default Cart;
