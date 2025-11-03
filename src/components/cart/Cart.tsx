import { useContext } from "react";
import { MainContext } from "../../App";

const Cart: React.FC = () => {
  const { quantity, cartContent, setCartContent } =
    useContext<MainContextType>(MainContext);
  console.log(cartContent);
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[360px] min-h-[256px] absolute top-[76px] right-[8px] z-2 lg:top-[94px] lg:right-[90px]"
      >
        <div className="w-full h-[68px] bg-white rounded-t-[10px] p-[24px]">
          <h4 className="text-[16px] text-black font-bold ">Cart</h4>
        </div>
        <div className="w-full h-[1px] bg-[#E4E9F2] "></div>
        <div className="w-full min-h-[188px] bg-white rounded-b-[10px] p-[24px] shadow-[0_20px_50px_-20px_rgba(29,32,38,0.5)] flex justify-center items-center">
          {!cartContent ? (
            <span className="text-[16px] text-grey font-bold ">
              Your cart is empty.
            </span>
          ) : (
            <div className="w-full h-full">
              <div className="flex items-center mb-[24px]">
                <img
                  src="/image-product-1.jpg"
                  alt="product"
                  className="w-[50px] h-[50px] rounded-[4px] mr-[16px]"
                />
                <div className="mr-[20px]">
                  <h6 className="text-[16px] text-grey">
                    Fall Limited Edition Sneakers
                  </h6>
                  <div className="flex">
                    <h6 className="text-[16px] text-grey mr-[10px]">
                      $125.00 x {quantity}
                    </h6>
                    <h6 className="text-[16px] text-black font-bold">
                      ${(125 * quantity).toFixed(2)}
                    </h6>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCartContent(false);
                  }}
                >
                  <img
                    src="/icon-delete.svg"
                    alt="delete product"
                    className="w-[14px] h-[16px]"
                  />
                </button>
              </div>
              <button className="w-full h-[56px] bg-orange rounded-[10px] text-[16px] text-white font-bold">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
