import moment from 'moment';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const ChatBox = ({ content, activeID }) => {


    const formattedDate = moment(content?.created_at).format('hh:mm ');
    const navigate = useNavigate();

    const bgColor = activeID === content.id

    return (
        <div className={bgColor ? "bg-[#8400ff]" :""} style={{borderRadius:"10px"}} >
            <div onClick={() => navigate(`/chats/${content?.id}`)} className="flex justify-between p-2 leading-5 items-center  rounded-md my-2 hover:bg-[rgba(255,255,255,0.04)]" >
                <img src="/person.jpg" alt="" className="w-[55px] h-[55px] rounded-full " />
                <div className=" w-[100%] line-clamp-2  " >
                    <span className="flex ml-2 justify-between " >
                        <h3 className="font-[500] overflow-ellipsis capitalize text-white " > {content?.creator?.name || "username"} <p className="hidden" > {content?.id} </p> </h3>
                        <p className="font-[400] text-[.8rem] text-[#ffffff9f] " > {formattedDate} </p>
                    </span>
                    <p className="ml-2 text-[.9rem] line-clamp-1 overflow-ellipsis text-[gray]  " >last message</p>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;