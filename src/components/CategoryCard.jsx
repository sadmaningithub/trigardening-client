import CategoryLogo from "./CategoryLogo";


const CategoryCard = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-5 py-8 px-4 bg-[#F5F5DC] rounded-[20px]">
            <div>
                <CategoryLogo />
            </div>

            <h1 className="text-2xl font-semibold ">Plants</h1>
            <p className="text-xl font-light">Indoor  & Outdoor Plants for every space</p>

        </div>
    );
};

export default CategoryCard;