import React from 'react';
const CoverSection = () => {

    return (
        <header className="bg-[url('/CoverImage.png')] bg-no-repeat   bg-center text-white mx-auto ">
            <div
                className="
      flex h-[20rem] 
      sm:h-[25rem] 
      lg:h-[38rem] 
      lg:p-[8px] 
      items-center  
      w-100 
       ml-[2rem] 
      lg:ml-[5rem] 
      mr-[2rem] 
      lg:mr-0
      "
            >
                <div className="flex-1 w-100 lg:50">
                    <h1 className="text-4xl lg:text-6xl">Resource</h1>
                    <p className="text-1xl md:text-2xl  lg:text-3xl mt-3">
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate
                    </p>
                </div>
                <div className="flex-1 w-50 hidden lg:block"></div>
            </div>
        </header>
    );
};

export default CoverSection;
