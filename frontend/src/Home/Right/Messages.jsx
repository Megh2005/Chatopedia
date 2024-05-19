import React from 'react'
import Message from './Message';

const Messages = () => {
  return (
    <div className='overflow-y-auto' style={{minHeight:"calc(92vh - 8vh)"}}>
        <Message/>
        <Message/>
        <Message/>
    </div>
  );
}

export default Messages