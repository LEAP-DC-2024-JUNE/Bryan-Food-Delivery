import Icon from "./Icons";

type PrimaryProps = {
  icon: string;
  color: "white" | "red";
};
export const PrimaryButton = ({ icon, color }: PrimaryProps) => {
  let colorClass;
  switch (color) {
    case "white":
      colorClass = "bg-bg-secondary stroke-text-secondary-foreground";
      break;
    case "red":
      colorClass = "bg-logo-red stroke-text-primary-foreground";
      break;
  }
  return (
    <button
      className={`py-2 px-3 w-9 h-9 rounded-full 
                    ${colorClass}
                    text-sm font-medium cursor-pointer`}
    >
      <Icon name={icon} />
    </button>
  );
};

type SecondaryProps = {
  text: string;
  color: "white" | "red";
};
export const SecondaryButton = ({ text, color }: SecondaryProps) => {
  let colorClass;
  switch (color) {
    case "white":
      colorClass = "bg-bg-secondary text-text-secondary-foreground";
      break;
    case "red":
      colorClass = "bg-logo-red text-text-primary-foreground";
      break;
  }
  return (
    <button
      className={`py-2 px-3 rounded-full 
                    ${colorClass}
                    text-sm font-medium cursor-pointer`}
    >
      {text}
    </button>
  );
};
