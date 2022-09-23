import React from 'react';
import { FaChevronRight, FaChevronLeft, FaRegBookmark } from 'react-icons/fa';
import Image from 'next/image';
import Event from '../../../assets/Events.png';
import Link from 'next/link';
import {  FiMapPin } from 'react-icons/fi';
const EventSection = () => {
    return (
        <div className="mt-5">
            <div className="container mx-auto lg:px-8  min-h-[5rem]">
                <div className="mt-5 pb-5">
                    <div className="text-[2.5rem] font-medium">
                        <h2>Events</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2   gap-4 mt-4">
                        <div className="text-lg lg:col-span-1 flex  items-center">
                            <p>
                                Dive in to some new, exciting topics, or learn
                                more about what our software has to offer. Oh,
                                and please let us know if you had like us to
                                cover anything else.
                            </p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mt-4">
                        <div className="relative h-100 w-100">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4 left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <span className="absolute top-4 right-4  z-10 text-neutral-600 hover:text-neutral-700 cursor-pointer">
                                <FaRegBookmark size={25} />
                            </span>
                            <div className=" h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image className="" src={Event} alt="book01" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-6">
                                    <h3 className="text-3xl font-medium ">
                                        Museum and the Contractions of
                                        Identities
                                    </h3>
                                    <div className="bg-sky-600 w-[7rem] h-[5rem] text-center text-white">
                                        <div className="text-lg font-medium">
                                            OCT
                                        </div>
                                        <div className="text-5xl font-medium">
                                            30
                                        </div>
                                    </div>
                                </div>

                                <Link href="/">
                                    <a className=" font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <FiMapPin size={28} />
                                            <span className="ml-3  text-[1.3rem]">
                                                Online
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <p className="text-lg mt-3">
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link href="/">
                                    <a className=" uppercase font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <span className="text-[1.3rem]">
                                                BOOK NOW
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className=" uppercase font-medium text-neutral-600 hover:text-neutral-500 ">
                                        <span className="flex item">
                                            <span className="text-[1.3rem] underline underline-offset-8">
                                                More Info
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-100 w-100 ">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4  left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <span className="absolute top-4 right-4  z-10 text-neutral-600 hover:text-neutral-700 cursor-pointer">
                                <FaRegBookmark size={25} />
                            </span>
                            <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image className="" src={Event} alt="book01" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-6">
                                    <h3 className="text-3xl font-medium ">
                                        Museum and the Contractions of
                                        Identities
                                    </h3>
                                    <div className="bg-sky-600 w-[7rem] h-[5rem] text-center text-white">
                                        <div className="text-lg font-medium">
                                            OCT
                                        </div>
                                        <div className="text-5xl font-medium">
                                            30
                                        </div>
                                    </div>
                                </div>

                                <Link href="/">
                                    <a className=" font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <FiMapPin size={28} />
                                            <span className="ml-3  text-[1.3rem]">
                                                Greenwoods, NY.
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <p className="text-lg mt-3">
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link href="/">
                                    <a className=" uppercase font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <span className="text-[1.3rem]">
                                                BOOK NOW
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className=" uppercase font-medium text-neutral-600 hover:text-neutral-500 ">
                                        <span className="flex item">
                                            <span className="text-[1.3rem] underline underline-offset-8">
                                                More Info
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-100 w-100 ">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4  left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <span className="absolute top-4 right-4  z-10 text-neutral-600 hover:text-neutral-700 cursor-pointer">
                                <FaRegBookmark size={25} />
                            </span>
                            <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image className="" src={Event} alt="book01" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-6">
                                    <h3 className="text-3xl font-medium">
                                        Museum and the Contractions of
                                        Identities
                                    </h3>
                                    <div className="bg-sky-600 w-[7rem] h-[5rem] text-center text-white">
                                        <div className="text-lg font-medium">
                                            OCT
                                        </div>
                                        <div className="text-5xl font-medium">
                                            30
                                        </div>
                                    </div>
                                </div>

                                <Link href="/">
                                    <a className=" font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <FiMapPin size={28} />
                                            <span className="ml-3  text-[1.3rem]">
                                                Edinburg, NL.
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <p className="text-lg mt-3">
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <Link href="/">
                                    <a className=" uppercase font-medium text-sky-600 hover:text-sky-400">
                                        <span className="flex item">
                                            <span className="text-[1.3rem]">
                                                BOOK NOW
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className=" uppercase font-medium text-neutral-600 hover:text-neutral-500 ">
                                        <span className="flex item">
                                            <span className="text-[1.3rem] underline underline-offset-8">
                                                More Info
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-20 ">
                    <Link href="/">
                        <a className="text-sky-600 outline p-1 px-12 text-2xl font-medium">
                            View all events
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventSection;
