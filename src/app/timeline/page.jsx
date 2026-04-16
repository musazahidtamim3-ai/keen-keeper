"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaSortDown } from 'react-icons/fa6';

const TimelinePage = () => {
     
     const [history, setHistory] = useState([])
     
     useEffect(() => {
          const data = localStorage.getItem("myTimeline")
          if (data) {
               setHistory(JSON.parse(data))
               
          }
     }, [])
    
     return (
          <div className='my-10'>
               <h1 className='text-[#244D3F] text-3xl font-bold text-left'>Timeline</h1>
               <div className="dropdown dropdown-start font-medium">
                    <div tabIndex={0} role="button" className="btn my-4 flex items-center gap-5">Filter Timeline <FaSortDown></FaSortDown></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                         <li ><a >show all</a></li>
                         <li ><a >Filter by call</a></li>
                         <li ><a>Filter by text</a></li>
                         <li ><a>Filter by video call</a></li>
                    </ul>
               </div>
               <div className='space-y-3'>
                    {
                         history.map((his,index) => (
                              <div className='bg-base-100 p-5 w-full border border-gray-200 shadow-md rounded-md flex gap-5 items-center' key={index}>
                                   <Image height={30} width={30} src={`${his.action === 'call' ? "/call.png" : his.action === "text" ? "/text.png" : "/video.png"}`} alt=''></Image>
                                   <div className='font-medium text-gray-500'>
                                        <h2><span className='text-xl text-black'>{his.action}</span> with {his.name}</h2>
                                        <p>{his.date}</p>
                                   </div>
                              </div>  
                         ))
                    }
               </div>
          </div>
     );
};

export default TimelinePage;