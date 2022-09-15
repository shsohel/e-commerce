import React from 'react'
import Header from './Header'

const Layout = ( { children, title, description, tags } ) => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='max-w-[2000px] mx-auto bg-neutral-300'>
                {/* <Header /> */}
                {children}
            </div>
        </>

    )
}

export default Layout