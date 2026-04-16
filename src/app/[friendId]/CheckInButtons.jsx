"use client"
import React from 'react';
import { FaPhone, FaVideo } from 'react-icons/fa6';
import { IoChatbox } from 'react-icons/io5';
import { toast } from 'react-toastify';

const CheckInButtons = ({ friendName }) => {
     const handleCheckIn = (type) => {
          const newArr ={
               name: friendName,
               action: type,
               date : new Date().toLocaleString()
          }
          const existingData = JSON.parse(localStorage.getItem("myTimeline") || '[]')
          existingData.unshift(newArr)
          localStorage.setItem("myTimeline", JSON.stringify(existingData))
          toast.success(`${type} with ${friendName}`)
     }
     return (
          <div className='bg-base-100 mt-5 p-5 rounded-md border border-gray-200 shadow-md font-medium'>
               <h2>Quick Check-In</h2>
               <div  className='flex items-center gap-3 mt-3'>
                    <button onClick={()=>handleCheckIn("call")} className='flex bg-base-200 rounded-md border border-gray-300 p-3 flex-col gap-2 flex-1 items-center cursor-pointer hover:bg-base-300'>
                         <FaPhone /> Call
                    </button>
                    <button onClick={()=>handleCheckIn("text")} className='flex p-3 bg-base-200 rounded-md border border-gray-300 flex-col gap-2 flex-1 items-center cursor-pointer hover:bg-base-300'>
                         <IoChatbox /> Text
                    </button>
                    <button onClick={()=>handleCheckIn("video")} className='flex p-3 bg-base-200 rounded-md border border-gray-300 flex-col gap-2 flex-1 items-center cursor-pointer hover:bg-base-300'>
                         <FaVideo /> Video
                    </button>
               </div>
          </div>
     );
};

export default CheckInButtons;