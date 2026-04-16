import React from 'react';

const StatusPage = () => {
     return (
          <div className='my-10'>
               <h1 className='text-[#244D3F] text-3xl font-bold text-left'>Friendship Analytics</h1>
               <div className='bg-base-100 border border-gray-200 shadow-md p-5 mt-5 rounded-md'>
                    <h2 className='font-medium'>By Interaction Type</h2>
                    <div className='flex items-center justify-center pt-30 gap-10'>
                         <div className='flex items-center gap-2'>
                              <div className='bg-[#7E35E1] w-2 h-2 rounded-full'></div>
                              <p className='font-medium'>Text</p>    
                         </div>
                         <div className='flex items-center gap-2'>
                              <div className='bg-[#244D3F] w-2 h-2 rounded-full'></div>
                              <p className='font-medium'>Call</p>    
                         </div>
                         <div className='flex items-center gap-2'>
                              <div className='bg-[#37A163] w-2 h-2 rounded-full'></div>
                              <p className='font-medium'>Video</p>    
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default StatusPage;