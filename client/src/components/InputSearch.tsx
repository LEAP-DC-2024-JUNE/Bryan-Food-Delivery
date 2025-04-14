import { Icon } from "./Icons";

const InputSearch = () => {
  return (
    <div
      className="bg-white py-2 px-3 rounded-full
                    flex gap-1 items-center"
    >
      <div className="stroke-[#EF4444]">
        <Icon name="location" />
      </div>
      <p className="text-[#EF4444] text-xs font-normal">Delivery address:</p>
      <p className="text-[#71717A] text-xs font-normal">Add Location</p>
      <div className="stroke-[#18181B80]">
        <Icon name="right" />
      </div>
    </div>
  );
};

export default InputSearch;
