import Icon from "./Icons";

const LogoContainer = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <div className={`flex ${vertical && "flex-col"} items-center gap-3`}>
      <div className="fill-logo-red">
        <Icon name="logo" />
      </div>
      <div>
        <h4 className="text-xl font-semibold">
          Nom<span className="text-logo-red">Nom</span>
        </h4>
        <p className="text-xs font-normal text-text-secondary">
          Swift delivery
        </p>
      </div>
    </div>
  );
};

export default LogoContainer;
