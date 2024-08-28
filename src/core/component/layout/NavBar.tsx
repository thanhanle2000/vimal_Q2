
import { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import { ROUTER } from "../../constant/router";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    // USE LOCATION 
    const location = useLocation();
    const _path = location?.pathname;

    // USE NAVIGATE 
    const navigate = useNavigate();

    // STATE
    const [isScrolled, setIsScrolled] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window?.scrollY;

            if (scrollY > lastScrollY) setIsScrolled(false);
            else setIsScrolled(true);

            setLastScrollY(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // [] ITEMS
    const menuItems = [
        { id: 1, title: "Trang chủ", href: ROUTER?.HOME },
        { id: 2, title: "Sản phẩm", href: ROUTER?.PRODUCT },
        { id: 3, title: "Liên hệ", href: ROUTER?.CONTACT },
    ];

    return (
        <nav
            className={_path === ROUTER?.ORDER_SUCCESS ? 'hidden' : `border-gray-200 px-2 mb-[20px] w-full z-50 bg-[#ff4820] ${isScrolled ? 'fixed top-0' : ''}`}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a onClick={() => navigate(ROUTER?.HOME)} className="flex cursor-pointer" style={{ width: 50 }}>
                    <img src={logo} alt="Logo" />
                    <span className="self-center font-semibold whitespace-nowrap text-[14px] text-white">INCAMALL</span>
                </a>
                <div className="flex md:order-2">
                    <button
                        data-collapse-toggle="mobile-menu-3"
                        type="button"
                        className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu-3"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
                    id="mobile-menu-3"
                >
                    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        {menuItems.map(item => (
                            <li key={item?.id} className="cursor-pointer">
                                <a
                                    onClick={() => navigate(item?.href)}
                                    className={`md:bg-transparent 
                                     ${item?.href === location?.pathname ? "text-green-600" : "text-white"} block pl-3 pr-4 py-2 md:text-white  md:p-0 rounded text-[18px]`}
                                    aria-current="page"
                                >
                                    {item?.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar
