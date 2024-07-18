import React, { useEffect, useState } from 'react'
import Message from './Message'
import { useParams } from 'react-router-dom';

function ChatSection() {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const messageData = async () => {
        let res = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`);
        res = await res.json();
        setData(res?.data)
    }



    useEffect(() => {
        messageData();
    }, [id])

    return (
        <section className='h-full' >
            <div className='bg-[#181818] h-[60px] text-white flex items-center p-2 ' >
                <div className='flex line-clamp-1 leading-5 items-center   ml-3 ' >
                    <img src="/person.jpg" alt="" width={40} height={40} className='rounded-full ' />
                    <div className='leading-4 ml-2 ' >
                        <p className='overflow-ellipsis text-nowrap text-[.95rem] font-[500] text-white ' >Username</p>
                        <p className='text-[0.8rem] font-normal ' >last seen</p>
                    </div>
                </div>
            </div>
            <div className='h-[
                                    <Message key={data.id} content={data} currentId={id} />
                                ))90vh] overflow-y-scroll pb-[4rem]' >
                {
                    data.length == 0 ?
                        <h1>loading</h1> :
                        <>
                            {
                                data.map((data) => (
                                    <Message key={data.id} content={data} currentId={id} />
                                ))
                            }
                        </>
                }
            </div>
        </section>
    )
}

export default ChatSection