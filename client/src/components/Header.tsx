import Account from "./Account";
import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <div className="w-full bg-[#18181B]">
      <div
        className="max-w-[1440px] mx-auto px-22 py-3
                  flex items-center justify-between"
      >
        <LogoContainer vertical={false} />
        <Account />
      </div>
    </div>
  );
};

export default Header;
