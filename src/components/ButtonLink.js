import React from 'react';
import Link from 'next/link';

const ButtonLink = ({ id }) => {
  return <Link className=' bg-black text-yellow-200 max-w-[120px] shadow-xl py-3 px-4 rounded-3xl hover:bg-yellow-300 hover:text-black' href={`/show/${id}`}>View Show</Link>;
};

export default ButtonLink;
