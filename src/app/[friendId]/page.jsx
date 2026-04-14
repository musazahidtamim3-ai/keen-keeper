import Image from 'next/image';
import React from 'react';
import { FaArchive, FaTextHeight } from 'react-icons/fa';
import { FaBell, FaDeleteLeft, FaPhone, FaVideo } from 'react-icons/fa6';
import { FiDelete } from 'react-icons/fi';
import { IoChatbox } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const FriendDetailpage = async ({ params }) => {
     const { friendId } = await params;
     const res = await fetch('http://localhost:3000/friends.json')
     const datas = await res.json()
     const friend = datas.find(f => f.id === Number(friendId))
     return (
          <div className='grid grid-cols-2 gap-5 my-10'>
               <div className='col-span-1'>
                    <div className="bg-base-100 flex flex-col items-center border border-gray-200 p-10 shadow-md rounded-md">
                         <Image src={friend.picture} className="w-50 h-50 object-cover mb-3 rounded-full" alt="" height={500} width={500}></Image>
                         <h1 className="text-2xl">{friend.name}</h1>
                         <p className="pt-1 pb-3 text-gray-400 font-medium">{friend.days_since_contact}d ago</p>
                         <p className={`badge rounded-full font-medium text-white ${friend.status === 'on-track' ? "bg-[#244d3F]" : friend.status === 'overdue' ? 'bg-red-500' : "bg-orange-500"}`}>{friend.status}</p>
                         <div className="flex items-center gap-2 my-2">
                              {
                                   friend.tags.map((tag, index) => <p className="bg-green-100 text-green-600 badge rounded-full font-medium" key={index}>{tag}</p>)
                              }
                         </div>
                         <i className='text-gray-500 font-medium text-center'>{`"${friend.bio}"`}</i>
                         <p className='text-gray-400 font-medium text-center pt-2'>Prefered : {friend.email}</p>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                         <button className='btn w-full flex items-center gap-2 font-medium'><FaBell></FaBell> Snooze 2 weeks</button>
                         <button className='btn w-full flex items-center gap-2 font-medium'><FaArchive></FaArchive> Archieve</button>
                         <button className='btn w-full flex items-center gap-2 font-medium'><MdDelete></MdDelete> Delete</button>
                    </div>
               </div>
               <div className="col-span-1">
                    <div className='grid grid-cols-3 gap-5'>
                         <div className='bg-base-100 border border-gray-200 rounded-md p-5 text-center shadow-md'>
                              <h2 className='text-xl font-semibold text-[#244D3F]'>{friend.days_since_contact}</h2>
                              <p className='text-gray-400 pt-1 font-medium'>Days Since Contact</p>
                         </div>
                         <div className='bg-base-100 border border-gray-200 rounded-md p-5 text-center shadow-md'>
                              <h2 className='text-xl font-semibold text-[#244D3F]'>{friend.goal}</h2>
                              <p className='text-gray-400 pt-1 font-medium'>Goal(days)</p>
                         </div>
                         <div className='bg-base-100 border border-gray-200 rounded-md p-5 text-center shadow-md'>
                              <h2 className='text-xl font-semibold text-[#244D3F]'>{friend.next_due_date}</h2>
                              <p className='text-gray-400 pt-1 font-medium'>Next Due</p>
                         </div>
                    </div>
                    <div className='bg-base-100 mt-5 p-5 rounded-md border border-gray-200 shadow-md font-medium'>
                         <div className='flex items-center justify-between'>
                              <h2 className='text-[#244D3F] text-xl'>Relationship Goal</h2>
                              <button className='btn'>Edit</button>
                         </div>
                         <p className='text-gray-400'>Connect Every <span className='font-semibold text-black'>30 days</span></p>
                    </div>
                    <div className='bg-base-100 mt-5 p-5 rounded-md border border-gray-200 shadow-md font-medium'>
                         <h2>Quick Check-In</h2>
                         <div className='flex items-center gap-3 mt-3'>
                              <button className='flex bg-base-200 rounded-md border border-gray-300 p-3 flex-col gap-2  flex-1 items-center'><FaPhone></FaPhone> Call</button>
                              <button className='flex p-3 bg-base-200 rounded-md border border-gray-300 flex-col gap-2  flex-1 items-center'><IoChatbox></IoChatbox> Text</button>
                              <button className='flex p-3 bg-base-200 rounded-md border border-gray-300 flex-col gap-2  flex-1 items-center'><FaVideo></FaVideo> Video</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FriendDetailpage;