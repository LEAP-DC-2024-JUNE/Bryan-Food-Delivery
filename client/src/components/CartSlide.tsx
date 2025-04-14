const CartSlide = ({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (newTab: string) => void;
}) => {
  return (
    <div className="bg-white flex items-center gap-2 p-1 rounded-full">
      <button
        className={`${
          tab === "cart" ? "text-[#FAFAFA] bg-[#EF4444]" : "text-[#09090B]"
        } text-lg font-normal py-1 px-2 rounded-full flex-1/2 cursor-pointer`}
        onClick={() => setTab("cart")}
      >
        Cart
      </button>
      <button
        className={`${
          tab === "order" ? "text-[#FAFAFA] bg-[#EF4444]" : "text-[#09090B]"
        } text-lg font-normal py-1 px-2 rounded-full flex-1/2 cursor-pointer`}
        onClick={() => setTab("order")}
      >
        Order
      </button>
    </div>
  );
};

export default CartSlide;
