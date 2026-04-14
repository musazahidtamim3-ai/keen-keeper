import Link from 'next/link';
import React from 'react';
import { FaHouseChimney } from 'react-icons/fa6';

const NotFound = () => {
     return (
          <div className='flex flex-col justify-center items-center min-h-[80vh]'>
               <h1 className='bg-[#244D3F] bg-clip-text text-transparent text-5xl font-bold'>404</h1>
               <p className='text-2xl font-semibold pt-5'>Oops! Data not found</p>
               <p className='max-w-120 pt-2 pb-5 mx-auto text-center text-gray-400'>It seems like you have looking for a information that does not found or exist</p>
               <Link href='/' className='btn bg-[#244D3F] text-white'><FaHouseChimney></FaHouseChimney>Back to Home</Link>
          </div>
     );
};

export default NotFound;