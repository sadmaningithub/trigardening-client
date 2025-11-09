import { Phone, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router";


const Navbar = () => {

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Products', path: 'products' },
        { title: 'Blog', path: 'blog' },
        { title: 'Plant Clinic', path: 'plant-clinic' },
    ]

    // const navItems = <>
    //     <NavLink to='/'> Home </NavLink>
    //     <NavLink to='products'> Products </NavLink>
    //     <NavLink to='blog' > Blog </NavLink>
    //     <NavLink to='plant-clinic'> Plant Clinic </NavLink>

    // </>

    return (
        <div className="flex flex-row justify-center items-center mx-auto md:h-24 w-full text-white text-xl bg-[#2D5016] ">

            <div className="flex flex-row justify-between items-center max-w-7xl w-full ">
                <div>
                    <h1>TriGardening</h1>
                </div>

                {
                    navItems.map(item => <NavLink key={item.title} to={item.path}> <span>{item.title}</span> </NavLink>)
                }

                <button className="btn flex flex-row items-center shadow-none text-white bg-[#CC7722] rounded-2xl border-0"> <Phone /> <span>Call Now</span></button>

                <label className="input flex flex-row-reverse items-center text-xl bg-[#2D5016] text-white border-white rounded-3xl">
                    <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="" required placeholder="Search plants, tool" />
                </label>

                <ShoppingCart/>

                <UserRound />
            </div>

        </div>
    );
};

export default Navbar;