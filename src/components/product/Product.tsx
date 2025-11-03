import { useContext } from "react";
import { useImageNavigation } from "../../customHooks/useImageNavigation";
import { MainContext } from "../../App";

export const images: string[] = [
  "/image-product-1.jpg",
  "/image-product-2.jpg",
  "/image-product-3.jpg",
  "/image-product-4.jpg",
];

const Product: React.FC<ProductProps> = ({ setShowGallery }) => {
  const { quantity, setQuantity, setCartContent, quantityRef } =
    useContext<MainContextType>(MainContext);
  const { index, setIndex, nextImage, prevImage } = useImageNavigation();

  return (
    <>
      <div className="w-full min-h-screen lg:px-[48px] lg:flex lg:w-[1115px] lg:min-h-[565px] lg:justify-self-center lg:justify-between lg:items-center">
        <div className="w-full relative lg:w-[445px] lg:h-[565px] lg:flex lg:flex-col lg:justify-between">
          <div>
            <button
              onClick={() => {
                setShowGallery(true);
              }}
            >
              <img
                src={images[index]}
                alt="product image"
                className="w-full lg:w-[445px] lg:h-[445px] lg:rounded-[15px] cursor-pointer"
              />
            </button>
            <button
              onClick={prevImage}
              className="w-[40px] h-[40px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 left-[16px] flex justify-center items-center lg:hidden"
            >
              <img
                src="/icon-previous.svg"
                alt="previous"
                className="w-[8px] h-[12px]"
              />
            </button>
            <button
              onClick={nextImage}
              className="w-[40px] h-[40px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 right-[16px] flex justify-center items-center lg:hidden"
            >
              <img
                src="/icon-next.svg"
                alt="next"
                className="w-[8px] h-[12px]"
              />
            </button>
          </div>

          <div className="hidden lg:flex w-full h-[88px] justify-between ">
            <button onClick={() => setIndex(0)}>
              <img
                src="/image-product-1-thumbnail.jpg"
                alt="image 1"
                className={`w-[88px] h-[88px] rounded-[10px] hover:opacity-35 cursor-pointer ${
                  index === 0
                    ? "opacity-35 outline-2 outline-orange/100 "
                    : "opacity-100"
                }`}
              />
            </button>
            <button onClick={() => setIndex(1)}>
              <img
                src="/image-product-2-thumbnail.jpg"
                alt="image 2"
                className={`w-[88px] h-[88px] rounded-[10px] hover:opacity-35 cursor-pointer ${
                  index === 1
                    ? "opacity-35 outline-2 outline-orange/100 "
                    : "opacity-100"
                }`}
              />
            </button>
            <button onClick={() => setIndex(2)}>
              <img
                src="/image-product-3-thumbnail.jpg"
                alt="image 3"
                className={`w-[88px] h-[88px] rounded-[10px] hover:opacity-35 cursor-pointer ${
                  index === 2
                    ? "opacity-35 outline-2 outline-orange/100 "
                    : "opacity-100"
                }`}
              />
            </button>
            <button onClick={() => setIndex(3)}>
              <img
                src="/image-product-4-thumbnail.jpg"
                alt="image 4"
                className={`w-[88px] h-[88px] rounded-[10px] hover:opacity-35 cursor-pointer ${
                  index === 3
                    ? "opacity-35 outline-2 outline-orange/100 "
                    : "opacity-100"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="w-full min-h-screen p-[24px] lg:w-[445px] lg:min-h-[426px] lg:p-0">
          <h6 className="text-[12px] uppercase font-bold text-orange tracking-[2px] mb-[19px] lg:text-[13px] lg:mb-[27px]">
            Sneaker Company
          </h6>

          <h1 className="text-black text-[28px] font-bold mb-[15px] lg:text-[44px] lg:mb-[32px]">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-grey text-[15px] mb-[25px] lg:text-[16px] lg:mb-[28px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex items-center mb-[24px] lg:flex lg:flex-col lg:items-start lg:mb-[32px]">
            <div className="flex items-center ">
              <h2 className="text-black text-[28px] font-bold mr-[16px] lg:mr-[24px]">
                $125.00
              </h2>
              <div className="w-[51px] h-[27px] rounded-[6px] bg-[#FFEEE2] text-[16px] font-bold text-orange flex justify-center items-center">
                50%
              </div>
            </div>
            <h5 className="text-[16px] font-bold text-[#B6BCC8] line-through ml-auto lg:ml-0">
              $250.00
            </h5>
          </div>

          <div className="lg:flex lg:justify-between">
            <div className="w-full h-[56px] rounded-[10px] bg-[#F6F8FD] flex justify-between items-center px-[24px] mb-[16px] lg:w-[157px]">
              <button
                onClick={() => {
                  setQuantity((prev) => {
                    if (prev === 0) return prev;
                    const updated = prev + 1;
                    quantityRef.current = updated;
                    return updated;
                  });
                }}
              >
                <img
                  src="/icon-minus.svg"
                  alt="minus"
                  className="w-[12px] h-[4px] cursor-pointer"
                />
              </button>

              <span className="text-black text-[16px] font-bold">
                {quantity}
              </span>

              <button
                onClick={() => {
                  setQuantity((prev) => {
                    const updated = prev + 1;
                    quantityRef.current = updated;
                    return updated;
                  });
                }}
              >
                <img
                  src="/icon-plus.svg"
                  alt="minus"
                  className="w-[12px] h-[12px] cursor-pointer"
                />
              </button>
            </div>
            <button
              onClick={() => {
                if (quantity > 0) {
                  setCartContent(true);
                  setQuantity(0);
                }
              }}
              className="w-full h-[56px] bg-orange rounded-[10px] shadow-[0_20px_50px_-20px_#FF7E1B] flex justify-center items-center lg:w-[272px] lg:shadow-none cursor-pointer"
            >
              <img
                src="/icon-cart-white.svg"
                alt="cart"
                className="w-[18px] h-[16px] mr-[16px]"
              />
              <p className="text-white text-[16px] font-bold">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
