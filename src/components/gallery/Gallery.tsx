import { images } from "../product/Product";

import { useImageNavigation } from "../../customHooks/useImageNavigation";

const Gallery: React.FC<GalleryProps> = ({ setShowGallery }) => {
  const { index, setIndex, nextImage, prevImage } = useImageNavigation();
  return (
    <>
      <div className="fixed w-full min-h-screen bg-black/75 z-5 justify-center items-center hidden lg:flex">
        <div className="w-[550px] h-[722px] flex flex-col items-center">
          <div className="relative">
            <div className="flex mb-[24px]">
              <button
                onClick={() => setShowGallery(false)}
                className="w-[20px] h-[20px] ml-auto cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
                    fill="white"
                    className="hover:fill-[#FF7E1B]"
                  />
                </svg>
              </button>
            </div>

            <img
              src={images[index]}
              alt="product image"
              className="w-[550px] h-[550px] rounded-[15px] mb-[40px]"
            />

            <button
              onClick={prevImage}
              className="group w-[56px] h-[56px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 left-[-28px] flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="16"
                viewBox="0 0 12 19"
                fill="none"
              >
                <path
                  d="M10.1213 1.06067L2.12134 9.06067L10.1213 17.0607"
                  stroke="#1D2026"
                  stroke-width="3"
                  className="group-hover:stroke-[#FF7E1B]"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="group w-[56px] h-[56px] bg-white rounded-[40px] absolute top-1/2 -translate-y-1/2 right-[-28px] flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="16"
                viewBox="0 0 12 19"
                fill="none"
              >
                <path
                  d="M1.06055 1.06067L9.06055 9.06067L1.06055 17.0607"
                  stroke="#1D2026"
                  stroke-width="3"
                  className="group-hover:stroke-[#FF7E1B]"
                />
              </svg>
            </button>
          </div>

          <div className="flex w-[445px] h-[88px] justify-between ">
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
      </div>
    </>
  );
};

export default Gallery;
