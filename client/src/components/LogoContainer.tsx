import { Logo } from "./Icons";

const LogoContainer = ({ vertical }: { vertical: boolean }) => {
  return (
    <div className={`flex ${vertical && "flex-col items-center"} gap-3`}>
      <Logo />
      <div>
        <h1 className="font-semibold text-xl text-[#FAFAFA]">
          Nom<span className="text-[#EF4444]">Nom</span>
        </h1>
        <p className="font-normal text-xs text-[#F4F4F5]">Swift delivery</p>
      </div>
    </div>
  );
};

export default LogoContainer;
