import Link from 'next/link';
import React from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FiArrowRightCircle} from 'react-icons/fi'

const ArticleSection = () => {
    return (
        <div className="mt-5">
            <div className="container mx-auto lg:px-8  min-h-[5rem]">
                <div className="mt-5 pb-5">
                    <div className="grid grid-cols-1 lg:grid-cols-6 min-h-[15rem] gap-4">
                        <div className="lg:col-span-4 bg-neutral-300 min-h-[25rem]">

                        </div>
                        <div className="lg:col-span-2">
                            <div className="font-medium text-neutral-500 mb-4">
                                Friday, September 03, 2021
                            </div>
                            <h3 className="text-3xl font-bold">
                                Lorem Ipsum is simply dummy text of the printing
                            </h3>
                            <div className="font-medium text-neutral-500 mt-6">
                                The Lorem Team
                            </div>
                            <p className="text-[1.15rem] mt-2 mb-6 text-neutral-700">
                                In publishing and graphic design, Lorem ipsum is
                                a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface
                                without relying on meaningful content. Lorem
                                ipsum may be used as a placeholder before final
                                copy is available. It is also used to
                                temporarily replace text in a process called
                                greeking, which allows designers to consider the
                                form of a webpage or publication, without the
                                meaning of the text influencing the design.
                            </p>
                            <Link href="/articles/how-did-van-gogh-s-turbulents">
                                <a className='uppercase font-medium text-sky-600 hover:text-sky-400'>Read More</a>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6 text-neutral-700  hover:text-neutral-500 font-medium'>
                        <Link href='/'>
                        <a className='flex'>
                        <span className='mr-3'>
                           <FiArrowRightCircle size={25}/> 
                        </span>
                        <span>
                            View all articles
                        </span>
                        </a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleSection;
