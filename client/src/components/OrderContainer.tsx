import { Logo } from "./Icons";

const OrderContainer = ({ data = [] }: { data: number[] }) => {
  return (
    <div className="min-h-[540px] w-full bg-white rounded-[20px] p-4 flex flex-col gap-4">
      <h1 className="text-[#09090B] text-xl font-semibold">Order history</h1>
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
          <h1 className="text-[#09090B] text-base font-bold">No Orders Yet?</h1>
          <p className="text-center text-[#71717A] text-xs font-normal">
            🍕 "You haven't placed any orders yet. Start exploring our menu and
            satisfy your cravings!"
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

export default OrderContainer;
