import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';
import { IoChevronBackOutline } from 'react-icons/io';
import Book01 from '../../../assets/Book01.png';
import Book02 from '../../../assets/Book02.png';
import Link from 'next/link';
const BookDownloadSections = () => {
    return (
        <div className="mt-5">
            <div className="container mx-auto lg:px-8  min-h-[5rem]">
                <div className="mt-5 pb-5">
                    <div className="text-[2.5rem] font-medium">
                        <h2>Books & Download</h2>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3   gap-4 mt-4">
                        <div className="relative h-100 w-100 ">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4 left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image className="" src={Book01} alt="book01" />
                            </div>
                            <div>
                                <h3 className="text-[2.1rem] font-medium mb-3">
                                   
                                    Yes, you can : Build Your Success
                                </h3>
                                <Link href="/">
                                    <a className="uppercase font-medium text-sky-600 hover:text-sky-400">
                                        Freelancer
                                    </a>
                                  
                                </Link>
                                <p className='text-lg mt-3'>
                                        In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly
                                        used to demonstrate the visual form of a
                                        document
                                    </p>
                            </div>
                        </div>
                        <div className="relative h-100 w-100 ">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4  left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image  src={Book02} alt="book01" />
                            </div>
                            <div>
                                <h3 className="text-[2rem] font-medium mb-3">
                                   
                                A Guidebook to Hiring Freelancers
                                </h3>
                                <Link href="/">
                                    <a className="uppercase font-medium text-sky-600 hover:text-sky-400">
                                        Enterprise
                                    </a>
                                  
                                </Link>
                                <p className='text-lg mt-3'>
                                        In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly
                                        used to demonstrate the visual form of a
                                        document
                                    </p>
                            </div>
                        </div>
                        <div className="relative h-100 w-100 ">
                            <span className="absolute top-0 left-0  w-10 h-3 bg-blue-900 z-20"></span>
                            <span className="absolute top-4  left-[-0.85rem] rotate-90 w-10 h-3 bg-sky-500 z-10"></span>
                            <div className="h-96 flex justify-center items-center z-0 bg-[#F8FAFB]">
                                <Image className="" src={Book01} alt="book01" />
                            </div>
                            <div>
                                <h3 className="text-[2rem] font-medium mb-3">
                                   
                                   A Guide to Developing your Personal Brand
                                </h3>
                                <Link href="/">
                                    <a className="uppercase font-medium text-sky-600 hover:text-sky-400">
                                        Freelancer
                                    </a>
                                  
                                </Link>
                                <p className='text-lg mt-3'>
                                        In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly
                                        used to demonstrate the visual form of a
                                        document
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDownloadSections;
