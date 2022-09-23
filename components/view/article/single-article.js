
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    FaChevronLeft,
    FaChevronRight,
    FaFacebook,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaLinkedinIn,
    FaPlusSquare,
    FaRegBookmark,
    FaTwitterSquare,
} from 'react-icons/fa';
import { FiArrowRightCircle, FiMail } from 'react-icons/fi';
import SummaryImage from '../../../assets/car.png';
import Book01 from '../../../assets/Book01.png';
import Book02 from '../../../assets/Book02.png';
import { useRouter } from 'next/router';
import Sidebar from './sidebar';

const SingleArticle = () => {
    const router = useRouter();

    return (
        <div className="mt-5  relative">
            <div className="container mx-auto lg:px-8  min-h-[5rem]">
                <div className="flex flex-wrap   items-center ">
                    <div
                        className=" flex flex-wrap   items-center   text-neutral-700 hover:text-sky-700 cursor-pointer"
                        onClick={() => {
                            router.back();
                        }}
                    >
                        <div className="font-semibold text-xl  mr-3">
                            Go to previous
                        </div>

                        <div >
                            <FiArrowRightCircle
                                className="stroke-1 p-0"
                                size={28}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
                    <div className="lg:col-span-3 col-span-1">
                        <div className="lg:border-r-2 lg:pr-4">
                            <div>
                                <span className="bg-sky-500 text-white font-medium text-base uppercase px-2">
                                    Article 
                                </span>
                                {/* <span><FaPlusSquare/></span> */}
                                <h2 className="text-3xl font-medium my-3 text-neutral-700">
                                    How did van Gogh's Turbulent Mind Depict One
                                    of the Most Complex Concepts in Physics?
                                </h2>
                                <div className="flex  items-center">
                                    <p className="font-medium text-neutral-500 mr-4">
                                        By Katy Liu on September 3, 2021
                                    </p>
                                   <div className='font-medium text-sky-500 flex items-center hover:text-neutral-500'>
                                   <div className=" mr-1 ">
                                        <FaRegBookmark size={15} />
                                    </div>
                                    <button >
                                        Save this article
                                    </button>
                                   </div>
                                </div>
                            </div>
                            <div className="mt-9">
                                <p className="text-lg  leading-relaxed mt-0 mb-4 text-neutral-700 text-justify">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                                <p className="text-lg  leading-relaxed mt-0 mb-4 text-neutral-700 text-justify">
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                                <div className="grid lg:grid-cols-2 grid-cols-none gap-4">
                                    <div className="col-span-1 border-l-[7px] border-sky-500 min">
                                        <div className="pl-6">
                                            <h3 className="font-bold text-3xl text-sky-500 mb-2">
                                                Summary
                                            </h3>
                                            <p className="font-semibold">
                                                So schreitet in dem engen
                                                Bretterhaus (Theater, Bühne) Den
                                                ganzen Kreis der Schöpfung aus,
                                                Und wandelt mit bedächt'ger
                                                Schnelle Vom Himmel durch die
                                                Welt zur Hölle. S schreitet in
                                                dem engen Bretterhaus (Theater,
                                                Bühne) Den ganzen Kreis der
                                                Schöpfung aus, Und wandelt mit
                                                bedächt'ger Schnelle Vom Himmel
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 lg:text-inherit text-center ">
                                        <Image
                                        objectFit='cover'
                                            src={SummaryImage}
                                            alt="summary image"
                                            priority
                                        />
                                    </div>
                                </div>
                                <p className="text-lg  leading-relaxed mt-0 mb-4 text-neutral-700 text-justify">
                                    So schreitet in dem engen Bretterhaus
                                    (Theater, Bühne) Den ganzen Kreis der
                                    Schöpfung aus, Und wandelt mit bedächt'ger
                                    Schnelle Vom Himmel durch die Welt zur
                                    Hölle. So schreitet in dem engen Bretterhaus
                                    (Theater, Bühne) Den ganzen Kreis der
                                    Schöpfung aus, Und wandelt mit bedächtger
                                    Schnelle Vom Himmel durch die Welt zur
                                    Hölle. Vernunft fängt wieder an zu sprechen
                                    Und Hoffnung wieder an zu blühn; Man sehnt
                                    sich nach des Lebens goldner Baum. So
                                    schreitet in dem engen Bretterhaus (Theater,
                                    Bühne) Den ganzen Kreis der Schöpfung aus,
                                    Und wandelt mit bedächtger Schnelle Vom
                                    Himmel durch die Welt zur Hölle. Gewöhnlich
                                    glaubt der Mensch, wenn er sie beim Kragen
                                    hätte. Es irrt der Mensch, wenn er sie beim
                                    Kragen hätte. So schreitet in dem engen
                                    Bretterhaus (Theater, Bühne) Den ganzen
                                    Kreis der Schöpfung aus, Und wandelt mit
                                    bedächtger Schnelle Vom Himmel
                                </p>
                                <p className="text-lg  leading-relaxed mt-0 mb-4 text-neutral-700 text-justify">
                                    Remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="my-8">
                                <h5 className="font-semibold text-3xl">
                                    Article Tags
                                </h5>
                                <div className="flex gap-2 mt-8">
                                    <button className="border border-neutral-600 text-neutral-700 p-2 font-medium">
                                        Graphic Design
                                    </button>
                                    <button className="border border-neutral-600 text-neutral-700 p-2 font-medium">
                                        Magneto
                                    </button>
                                    <button className="border border-neutral-600 text-neutral-700 p-2 font-medium">
                                        Project Management
                                    </button>
                                    <button className="border border-neutral-600 text-neutral-700 p-2 font-medium">
                                        Marketing
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <div className="mt-5 pb-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2   gap-2 mt-4">
                                    <div className="text-lg lg:col-span-1 flex  items-center">
                                        <div className="text-3xl font-medium">
                                            <h2>Related Insights</h2>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1 hidden lg:flex justify-end items-center">
                                        <span className="border p-3">
                                            <FaChevronLeft />
                                        </span>
                                        <span className="border p-3">
                                            <FaChevronRight />
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2   gap-4 mt-4">
                                    <div className="relative h-100 w-100 ">
                                        <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                                        <span className="absolute top-4 left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                                        <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                            <Image
                                                className=""
                                                src={Book01}
                                                alt="book01"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-[2.1rem] font-medium mb-3">
                                                Yes, you can : Build Your
                                                Success
                                            </h3>
                                            <Link href="/">
                                                <a className="uppercase font-medium text-sky-600 hover:text-sky-400">
                                                    Freelancer
                                                </a>
                                            </Link>
                                            <p className="text-lg my-3">
                                                In publishing and graphic
                                                design, Lorem ipsum is a
                                                placeholder text commonly used
                                                to demonstrate the visual form
                                                of a document
                                            </p>
                                            <p className="font-medium text-neutral-500 mr-4">
                                                By Katy Liu on September 3, 2021
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative h-100 w-100 ">
                                        <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                                        <span className="absolute top-4  left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                                        <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                            <Image src={Book02} alt="book01" />
                                        </div>
                                        <div>
                                            <h3 className="text-[2rem] font-medium mb-3">
                                                A Guidebook to Hiring
                                                Freelancers
                                            </h3>
                                            <Link href="/">
                                                <a className="uppercase font-medium text-sky-600 hover:text-sky-400">
                                                    Enterprise
                                                </a>
                                            </Link>
                                            <p className="text-lg my-3">
                                                In publishing and graphic
                                                design, Lorem ipsum is a
                                                placeholder text commonly used
                                                to demonstrate the visual form
                                                of a document
                                            </p>
                                            <p className="font-medium text-neutral-500 mr-4">
                                                By Katy Liu on September 3, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 col-span-1 pl-6 mt-10">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 lg:top-1/2   lg:-left-[10.8rem] z-50  lg:block">
                <div className=" lg:-rotate-90  bg-white p-0">
                    <div className="grid grid-cols-6 divide-x divide-neutral-500 border border-neutral-500">
                        <div className="flex justify-center items-center  ">
                            <FaFacebookSquare
                                className="lg:rotate-90  text-neutral-500"
                                size={28}
                            />
                        </div>

                        <div className="flex justify-center items-center ">
                            <FaTwitterSquare
                                className="lg:rotate-90  text-neutral-500"
                                size={28}
                            />
                        </div>
                        <div className="flex justify-center items-center ">
                            <FaLinkedin
                                className="lg:rotate-90  text-neutral-500"
                                size={28}
                            />
                        </div>
                        <div className="flex justify-center items-center  ">
                            <FaInstagramSquare
                                className="lg:rotate-90  text-neutral-500"
                                size={28}
                            />
                        </div>
                        <div className="flex justify-center items-center  ">
                            <FiMail
                                className="lg:rotate-90  text-neutral-500"
                                size={28}
                            />
                        </div>
                        <div className="flex justify-center items-center text-center font-semibold text-neutral-500 p-3">
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleArticle;
