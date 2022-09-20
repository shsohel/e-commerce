import Link from 'next/link';
import React, { useEffect } from 'react';
import { VscGlobe } from 'react-icons/vsc';

const Header = () => {
    const handleMenuCollapse = (menuId, authButtonId) => {
        const menu = document.getElementById(menuId);
        const findClassList = Object.values(menu?.classList).find(
            (s) => s === 'hidden'
        );
        console.log(JSON.stringify(Object.values(menu?.classList), null, 2));
        if (findClassList !== undefined) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-neutral-100 p-6">
                <div className="flex items-center flex-shrink-0 text-slate-800 mr-6">
                    <Link href="/">
                        <a className="flex ">
                            {' '}
                            <svg
                                className="fill-current h-8 w-8 mr-2"
                                width="54"
                                height="54"
                                viewBox="0 0 54 54"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                            </svg>
                            <span className="font-semibold text-xl tracking-tight">
                                Tailwind CSS
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-slate-800 border-slate-400 hover:text-slate-400 hover:border-slate-400"
                        onClick={(e) => {
                            handleMenuCollapse('menuId', 'authButtonId');
                        }}
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    id="menuId"
                    className="w-full hidden xs:block flex-grow lg:flex lg:items-center  lg:w-auto mt-2 lg:mt-0 uppercase font-medium"
                >
                    <div className="text-sm lg:flex-grow border-t-2 lg:border-t-0">
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-400 mr-4"
                        >
                            Docs
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-400 mr-4"
                        >
                            Examples
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-400"
                        >
                            Blog
                        </a>
                    </div>
                    <div id="authButtonId" className='px-auto mr-3' >
                        <VscGlobe
                            size={30}
                            className=" hidden lg:inline-block  text-slate-800 hover:text-slate-600  mr-3 "
                        />
                        <a
                            href="#"
                            className="block lg:inline-block  text-sm px-6 py-[7px] leading-none border border-neutral-800 rounded text-slate-800 hover:text-slate-600 hover:border-transparent hover:bg-white mt-4 lg:mt-0"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="flex lg:inline-block ml-0 lg:ml-1 text-sm px-4 py-[7px] leading-none border border-neutral-800 rounded text-slate-800 hover:text-slate-600 hover:border-transparent hover:bg-white mt-4 lg:mt-0"
                        >
                            Registration
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
