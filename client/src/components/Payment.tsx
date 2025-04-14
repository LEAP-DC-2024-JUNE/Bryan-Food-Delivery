import { Separator } from "./ui/separator";

const Payment = ({ data = [] }: { data: number[] }) => {
  return (
    <div
      className="bg-white p-4 rounded-[20px]
                    flex flex-col gap-5"
    >
      <h1 className="text-[#09090B] text-xl font-semibold">Payment info</h1>
      {data.length > 0 ? (
        <div></div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[#71717A] text-base font-normal">Items</p>
              <p className="text-[#09090B] text-base font-bold">-</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#71717A] text-base font-normal">Shipping</p>
              <p className="text-[#09090B] text-base font-bold">-</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-[#71717A] text-base font-normal">Total</p>
            <p className="text-[#09090B] text-base font-bold">-</p>
          </div>
        </>
      )}
      <button className="bg-[#EF4444] py-2 px-8 rounded-full text-[#FAFAFA] text-sm font-medium cursor-pointer">
        Checkout
      </button>
    </div>
  );
};

export default Payment;
