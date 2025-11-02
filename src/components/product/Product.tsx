import { useState } from "react";

const images: string[] = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const Product: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full relative">
          <img src={images[index]} alt="product image" className="w-full " />
          <button
            onClick={prevImage}
            className="w-[40px] h-[40px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 left-[16px] flex justify-center items-center"
          >
            <img
              src="/icon-previous.svg"
              alt="previous"
              className="w-[8px] h-[12px]"
            />
          </button>
          <button
            onClick={nextImage}
            className="w-[40px] h-[40px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 right-[16px] flex justify-center items-center"
          >
            <img src="/icon-next.svg" alt="next" className="w-[8px] h-[12px]" />
          </button>
        </div>

        <div className="w-full min-h-screen p-[24px]">
          <h6 className="text-[12px] uppercase font-bold text-orange tracking-[2px] mb-[19px]">
            Sneaker Company
          </h6>

          <h1 className="text-black text-[28px] font-bold mb-[15px]">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-grey text-[15px] mb-[25px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex items-center mb-[24px]">
            <h2 className="text-black text-[28px] font-bold mr-[16px]">
              $125.00
            </h2>
            <div className="w-[51px] h-[27px] rounded-[6px] bg-[#FFEEE2] text-[16px] font-bold text-orange flex justify-center items-center">
              50%
            </div>
            <h5 className="text-[16px] font-bold text-[#B6BCC8] line-through ml-auto">
              $250.00
            </h5>
          </div>

          <div className="w-full h-[56px] rounded-[10px] bg-[#F6F8FD] flex justify-between items-center px-[24px] mb-[16px]">
            <button>
              <img
                src="/icon-minus.svg"
                alt="minus"
                className="w-[12px] h-[4px]"
              />
            </button>

            <span className="text-black text-[16px] font-bold">0</span>

            <button>
              <img
                src="/icon-plus.svg"
                alt="minus"
                className="w-[12px] h-[12px]"
              />
            </button>
          </div>
          <button className="w-full h-[56px] bg-orange rounded-[10px] shadow-[0_20px_50px_-20px_#FF7E1B] flex justify-center items-center">
            <img
              src="/icon-cart-white.svg"
              alt="cart"
              className="w-[18px] h-[16px] mr-[16px]"
            />
            <p className="text-white text-[16px] font-bold">Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
