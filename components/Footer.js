import React from 'react'

export const Footer = () => {
  return (
         <div className="bg-[#24243C] bg-no-repeat bg-cover text-white mx-auto  ">
            <div className="container mx-auto lg:px-8  min-h-[5rem] py-12">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                    <div className="col-span-1 ">
                       <span className='text-6xl'> E</span>
                       <p className='text-lg mt-2'>Inspiring the world through change</p>
                       <div className='mt-5'>
                        <h5 className='text-xl'> Get our newsletter</h5>
                        <p>Read about the latest in workplace trends, events and insights straight to your inbox.</p>
                    </div>
                    </div>
                   
                    <div className="col-span-1"></div>
                </div>
            </div>
        </div>
  )
}
