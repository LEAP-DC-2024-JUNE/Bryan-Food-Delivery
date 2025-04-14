import { Logo } from "./Icons";

const CartContainer = ({ data = [] }: { data: number[] }) => {
  return (
    <div className="min-h-[540px] w-full bg-white rounded-[20px] p-4 flex flex-col gap-4">
      <h1 className="text-[#09090B] text-xl font-semibold">My cart</h1>
      {data.length > 0 ? (
        <div></div>
      ) : (
        <div
          className="bg-[#F4F4F5] py-8 px-12 rounded-xl
                        flex flex-col gap-1 items-center"
        >
          <div className="stroke-[#EF4444]">
            <Logo />
          </div>
          <h1 className="text-[#09090B] text-base font-bold">
            Your cart is empty
          </h1>
          <p className="text-center text-[#71717A] text-xs font-normal">
            Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
            cravings!
          </p>
        </div>
      )}
      <button
        className="w-full bg-white border-[1px] border-[#EF4444] rounded-full
                        py-2 px-8 text-[#EF4444] text-sm font-medium cursor-pointer"
      >
        Add food
      </button>
    </div>
  );
};

export default CartContainer;
