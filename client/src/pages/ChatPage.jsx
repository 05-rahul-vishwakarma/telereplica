import React from 'react'
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'
import ChatSection from '../components/ChatSection'
import { useEffect, useState } from "react";
import ChatList from '../components/ChatList';


function ChatPage() {

    return (
        <main className='flex flex-col md:flex-row w-screen h-screen bg-[#181818] '>
            <div className='w-full md:w-[60%] lg:w-[30%] h-full  bg-[#181818] '>
                <Header />
                <div className='p-2 overflow-y-scroll h-[80%] utilities '>
                    <ChatList />
                </div>
            </div>
            <div className='w-[70%] h-full bg-[url(/bg.jpg)]   '>
                <ChatSection />
            </div>
        </main>
    )
}

export default ChatPage