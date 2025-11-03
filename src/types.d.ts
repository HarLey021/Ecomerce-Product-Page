type HeaderProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

type ProductProps = {
  setShowGallery: React.Dispatch<React.SetStateAction<boolean>>;
};

type MainContextType = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartContent: boolean;
  setCartContent: React.Dispatch<React.SetStateAction<boolean>>;
};

type GalleryProps = {
  setShowGallery: React.Dispatch<React.SetStateAction<boolean>>;
};
