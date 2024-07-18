import React from 'react'
import Header from '../components/Header'
import ChatList from '../components/ChatList'
import ChatSection from '../components/ChatSection'

function Chats() {
    return (
        <main className='flex flex-col md:flex-row w-screen h-screen bg-[#181818] '>
            <div className='sm:block hidden lg:w-[30%] h-full  bg-[#181818] '>
                <Header />
                <div className='p-2 overflow-y-scroll h-[80%] utilities '>
                    <ChatList />
                </div>
            </div>
            <div className='sm:w-[100%] lg:w-[70%] h-full bg-[url(/bg.jpg)]   '>
                <ChatSection />
            </div>
        </main>
    )
}

export default Chats