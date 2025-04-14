import { Icon } from "./Icons";

type ButtonProps = {
  text: string;
  icon: string;
  color: "white" | "red";
  onClick?: () => void;
};

const Button = ({ text, icon, color, onClick }: ButtonProps) => {
  let colorStyle;
  switch (color) {
    case "white":
      colorStyle = "text-[#18181B] stroke-[#18181B] bg-[#F4F4F5]";
      break;
    case "red":
      colorStyle = "text-[#FAFAFA] stroke-[#FAFAFA] bg-[#EF4444]";
  }
  if (icon !== "none") {
    colorStyle += " w-9 h-9";
  }
  return (
    <button
      className={`${colorStyle} py-2 px-3 rounded-full cursor-pointer`}
      onClick={onClick}
    >
      {text}
      <Icon name={icon} />
    </button>
  );
};

export default Button;
