import React from 'react'
import Search from './Search';
import Users from './Users';

const Left = () => {
  return (
    <div className="w-[30vw] bg-black">
      <Search/>
      <Users />
    </div>
  );
}

export default Left