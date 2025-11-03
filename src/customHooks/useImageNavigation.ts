import { useContext } from "react";
import { MainContext } from "../App";
import { images } from "../components/product/Product";

export const useImageNavigation = () => {
  const { index, setIndex } = useContext<MainContextType>(MainContext);

  const nextImage = () =>
    setIndex((prev: number) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev: number) => (prev - 1 + images.length) % images.length);

  return { index, setIndex, nextImage, prevImage };
};
