import Header from "../header/Header";
import Product from "../product/Product";

const MainPage: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <Product />
      </div>
    </>
  );
};

export default MainPage;
