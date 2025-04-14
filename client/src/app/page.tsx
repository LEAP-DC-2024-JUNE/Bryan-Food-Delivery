import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuContainer from "@/components/MenuContainer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <img src="BG.png" alt="background image" className="w-full" />
      <MenuContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
