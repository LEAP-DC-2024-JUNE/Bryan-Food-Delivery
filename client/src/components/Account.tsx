"use client";

import { getUser } from "@/service";
import Button from "./Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import InputSearch from "./InputSearch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import CartSlide from "./CartSlide";
import CartContainer from "./CartContainer";
import Payment from "./Payment";
import OrderContainer from "./OrderContainer";

const Account = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState(0);
  const [tab, setTab] = useState("cart");

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const get = async (token: string) => {
      const result = await getUser(token);
      console.log(result);
      if (!result.email) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
        setUser(result.email);
      }
    };
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjVjYTVmNWRiZTg0NzMzODI4YTY0ZSIsImlhdCI6MTc0NDYwODk0OSwiZXhwIjoxNzQ0Njk1MzQ5fQ.JsmN7qK40Yj7qZYmIc1_znNDr1-vqqk5AoCe2ozfPpg"
    );
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      setLoggedIn(false);
    } else {
      get(token);
    }
  }, []);

  if (loggedIn) {
    return (
      <div className="flex gap-3 items-center">
        <InputSearch />
        <div className="relative">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`text-[#18181B] stroke-[#18181B] bg-[#F4F4F5] w-9 h-9 py-2 px-3
                            rounded-full cursor-pointer`}
              >
                <Icon name={"cart"} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              style={{ maxWidth: "545px" }}
              className="flex flex-col gap-6 p-8 bg-[#404040] border-none rounded-l-[20px] max-w-[545px] overflow-y-auto"
            >
              <SheetHeader className="h-0 m-0">
                <SheetTitle className="flex items-center gap-3 stroke-[#E4E4E7]">
                  <Icon name="cart" />
                  <p className="text-[#FAFAFA] text-xl font-semibold">
                    Order detail
                  </p>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <CartSlide tab={tab} setTab={setTab} />
              {tab === "cart" ? (
                <div>
                  <CartContainer data={[]} />
                </div>
              ) : (
                <div>
                  <OrderContainer data={[]} />
                </div>
              )}
              <Payment data={[]} />
            </SheetContent>
          </Sheet>

          {items > 0 && (
            <div
              className="absolute -top-1/5 left-3/5 w-5 h-5 bg-[#EF4444] rounded-full
                          flex items-center justify-center
                          text-[#FAFAFA] text-[10px] font-medium"
            >
              {items}
            </div>
          )}
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              className={`text-[#FAFAFA] stroke-[#FAFAFA] bg-[#EF4444] w-9 h-9 py-2 px-3
                          rounded-full cursor-pointer`}
            >
              <Icon name={"user"} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="bg-white flex flex-col items-center gap-2 p-4 w-min">
            <h1 className="text-xl font-semibold text-[#09090B]">{user}</h1>
            <button
              className="bg-[#F4F4F5] py-2 px-3 rounded-full
                        text-[#18181B] text-sm font-medium cursor-pointer"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <Button text="Sign up" icon="none" color="white" />
      <Button text="Log in" icon="none" color="red" />
    </div>
  );
};

export default Account;
