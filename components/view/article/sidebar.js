import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from '../../../assets/Author.png';

const Sidebar = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-neutral-700">
                About the Author
            </h3>
            <div className="my-5">
                <Image
                    width={150}
                    height={150}
                    src={Author}
                    alt="Author Image"
                />
                <p className="text-xl font-semibold  text-neutral-700">
                    Katy Lu
                </p>
            </div>
            <div className="my-5">
                <p className="text-base  text-neutral-600 text-justify">
                    His an amet petentium voluptatibus, modo malis error nec no.
                    Pri posse graeco definitiones cu, id eam populo quaestio
                    adipiscing, usu quod malorum te. Offendit eleifend
                    moderatius ex vix, quem odio mazim et qui, purto expetendis
                    cotidieque quo cu, veri persius vituperata ei nec. Offendit
                    eleifend moderatius ex vix, quem odio mazim et qui, purto
                    expetendis cotidieque quo cu, veri persius vituperata ei
                    nec.
                </p>
            </div>
            <div className="my-5">
                <h3 className="text-xl font-semibold text-neutral-700">
                    Popular Posts
                </h3>
                <div className="my-5   text-neutral-700 font-medium flex flex-col gap-2">
                    <Link href="/">
                        <a className=" hover:text-sky-700">
                            Best way to build landing page of Tailwind CSS
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" hover:text-sky-700">
                            Best way to build landing page of Tailwind CSS
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" hover:text-sky-700">
                            Best way to build landing page of Tailwind CSS
                        </a>
                    </Link>
                    <Link href="/">
                        <a className=" hover:text-sky-700">
                            Best way to build landing page of Tailwind CSS
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
