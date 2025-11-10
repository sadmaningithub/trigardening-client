import CategoryCard from "./CategoryCard";

const Category = () => {


    return (
        <div className="my-24">
            {/* <CategoryLogo/> */}
            <div className="text-center mb-24">
                <h1 className="text-6xl font-semibold text-[#2D5016]">Show by Category</h1>
            </div>

            <div className="flex flex-row gap-10 justify-between items-center">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
};

export default Category;