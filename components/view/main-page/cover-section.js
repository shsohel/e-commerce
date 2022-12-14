import React from 'react';
const CoverSection = () => {
    return (
        <header className=" text-white mx-auto container w-fit ">
            <div className="h-[25rem]  lg:h-[35rem] xl:h-[40rem]  ">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 h-full ">
                    <div className="col-span-1 h-full">
                        <div className="flex justify-center items-center  h-full flex-col px-16">
                            <div>
                                <h1 className="text-4xl lg:text-6xl font-light">
                                    Resource
                                </h1>
                                <p className="text-1xl md:text-2xl  lg:text-3xl xl:text-3xl mt-3">
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 h-full hidden xl:block lg:block"></div>
                </div>
            </div>
        </header>
    );
};

export default CoverSection;
