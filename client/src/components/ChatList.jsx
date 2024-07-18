import React, { useEffect, useState } from 'react'
import ChatBox from './ChatBox';

function ChatList() {
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const apiData = async () => {
        let res = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        res = await res.json();
        setData(res?.data?.data)
    }

    useEffect(() => {
        apiData();
    }, [])

    const handleId = (id) => {
        setId(id)
    }

    return (
        <>
            {
                data.map((data) => (
                    <div key={data.id} onClick={() => handleId(data.id)} >
                        <ChatBox content={data} activeID={id} />
                    </div>
                ))
            }

        </>
    )
}

export default ChatList