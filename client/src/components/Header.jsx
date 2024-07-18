import React from 'react'
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



function Header() {
    return (
        <header className='bg-[#181818] ' >
            <div className='flex justify-around pt-2 '>
                <div className='w-[10%] flex justify-center items-center ' >
                    <IoMenu className='p-1.5  w-[100%] h-[2.5rem] rounded-full  hover:bg-gray-200 ' style={{color:"lightgray"}} />
                </div>
                <div style={{border:"1px solid lightgray"}} className='flex items-center w-[80%] rounded-full pl-2 ' >
                    <CiSearch className='text-2xl '  />
                    <input type="text" placeholder='Search' className='p-1.5 outline-none border-none bg-transparent ' />
                </div>
            </div>
            <div className='px-2 py-1 my-1' style={{borderBottom:"1px solid black"}}  >
                <h3 className='ml-2 text-[#3390ec] font-semibold ' >All Chats</h3>
            </div>
        </header>
    )
}

export default Header