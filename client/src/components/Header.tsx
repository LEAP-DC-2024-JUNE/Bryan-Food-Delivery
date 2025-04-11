import { PrimaryButton, SecondaryButton } from "./Button";
import Icon from "./Icons";
import LogoContainer from "./LogoContainer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Header = () => {
  const loggedIn = false;
  const email = "test@gmail.com";
  return (
    <div className="flex justify-between bg-bg-primary text-white py-3 px-[88px]">
      <LogoContainer vertical={false} />
      <div className="flex items-center gap-3">
        {loggedIn ? (
          <>
            <input type="text" />
            <PrimaryButton icon="cart" color="white" />
            <HoverCard>
              <HoverCardTrigger asChild>
                <PrimaryButton icon="user" color="red" />
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col items-center gap-2 p-4 rounded-xl max-w-[188px] bg-bg-background">
                <h4 className="text-text-foreground text-xl font-semibold">
                  {email}
                </h4>
                <SecondaryButton text="Sign out" color="white" />
              </HoverCardContent>
            </HoverCard>
          </>
        ) : (
          <>
            <SecondaryButton text="Sign up" color="white" />
            <SecondaryButton text="Log in" color="red" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
