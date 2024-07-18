import React from 'react';

function Message({ content, currentId }) {


  // console.log(content.sender_id !== content.chat_id);
  const isSame = content.sender_id === currentId;

//   console.log(isSame);

  const containerStyle = {
    justifyContent: isSame ? 'flex-end' : 'flex-start'
  };

  const messageStyle = {
    backgroundColor: isSame ? '#007bff' : '#f0f0f0',
    color: isSame ? 'white' : 'black',
    alignSelf: isSame ? 'flex-end' : 'flex-start'
  };

  return (
    <div style={containerStyle} className='p-2 flex'>
      <div style={messageStyle} className='px-2 py-1 rounded-l-3xl rounded-tr-3xl text-[.8rem]'>
        <span className='flex'>
          {content?.message}
          {content?.sender_id}
          <p className='ml-2 mt-2 text-[.6rem]'>9:59</p>
        </span>
      </div>
    </div>
  );
}

export default Message;
