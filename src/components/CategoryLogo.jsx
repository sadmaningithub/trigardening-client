import logo from '../assets/img/cat-logo-1.png'

const CategoryLogo = () => {
    return (
        <div>
            <div className='relative h-[125px] w-[125px] bg-white rounded-full'>
                {/* <div className=''>

                </div> */}
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={logo} alt="" />
            </div>
        </div>
    );
};

export default CategoryLogo;