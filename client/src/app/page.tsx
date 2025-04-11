import { SecondaryButton } from "@/components/Button";
import { getCategories } from "@/utils/service";

const HomePage = async () => {
  let categories = await getCategories();
  return (
    <div className="bg-bg-neutral min-h-full">
      <img src="BG.png" alt="background image" />
      <div className="flex flex-col gap-9 py-8 px-12">
        <h1 className="text-white text-3xl font-semibold">Categories</h1>
        <div className="flex gap-2">
          {categories.map((category, i) => {
            return (
              <SecondaryButton
                text={category.categoryName}
                color="white"
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
