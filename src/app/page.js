"use client"
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const[imageLoaded,setImageLoaded] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetch('/friends.json')
      const data = await res.json()
      setFriends(data)
      setIsLoading(false)
    }
    fetchData()
  },[])
  return (
    <div className="py-10 px-5 lg:px-0">
      <div>
        <h1 className="text-3xl font-bold text-center">Friends to keep close in your life</h1>
        <p className="text-gray-400 text-center max-w-150 mx-auto py-3 font-medium">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#244D3F] text-white"><FaPlus></FaPlus> Add a Friend</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        <div className="bg-base-100 p-5 border border-gray-200 shadow-md text-center rounded-md">
          <h1 className="text-2xl font-semibold">{friends.length}</h1>
          <p className="text-gray-400 pt-1 font-medium">Total friends</p>
        </div>
        <div className="bg-base-100 p-5 border border-gray-200 shadow-md text-center rounded-md">
          <h1 className="text-2xl font-semibold">5</h1>
          <p className="text-gray-400 pt-1 font-medium">On Track</p>
        </div>
        <div className="bg-base-100 p-5 border border-gray-200 shadow-md text-center rounded-md">
          <h1 className="text-2xl font-semibold">5</h1>
          <p className="text-gray-400 pt-1 font-medium">Need Attention</p>
        </div>
        <div className="bg-base-100 p-5 border border-gray-200 shadow-md text-center rounded-md">
          <h1 className="text-2xl font-semibold">8</h1>
          <p className="text-gray-400 pt-1 font-medium">Interactions this month</p>
        </div>
      </div>
      <hr className="border border-gray-100 mt-5"></hr>
      <div>
        <h1 className="text-2xl font-semibold pt-5">Your Friends</h1>
        {
          isLoading === true ? <div className="flex items-center justify-center"><span className="loading loading-spinner text-[#244D3F]"></span></div> :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
              {
                friends.map(friend => (
                  <Link href={`${friend.id}`} key={friend.id} className="bg-base-100 flex flex-col items-center border border-gray-200 p-5 shadow-md rounded-md">
                    <div className="relative w-30 h-30 mb-3 rounded-full overflow-hidden">
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full " />
                      )}
                      <Image src={friend.picture} onLoad={()=>setImageLoaded(true)} className={`object-cover rounded-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} alt="" fill></Image>
                </div>
                <h1 className="text-lg">{friend.name}</h1>
                <p className="pt-1 pb-3 text-gray-400 font-medium">{friend.days_since_contact}d ago</p>
                <div className="flex items-center gap-2 mb-2">
                  {
                    friend.tags.map((tag, index) => <p className="bg-green-100 text-green-600 badge rounded-full font-medium" key={index}>{tag}</p>)
                  }
                </div>
                <p className={`badge rounded-full font-medium text-white ${friend.status==='on-track'?"bg-[#244d3F]":friend.status==='overdue'?'bg-red-500':"bg-orange-500"}`}>{friend.status}</p>
              </Link>
            ))
          }
        </div>
        }
        
      </div>
    </div>
  );
}
