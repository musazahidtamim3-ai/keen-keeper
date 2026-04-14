"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaClock, FaHouseChimney } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";


const Navbar = () => {
     const[active,setActive]=useState("home")
     return (
          <div className="bg-base-100 shadow-md">
               <div className="flex justify-between items-center py-3 max-w-7xl mx-auto">
                    <Image className="w-30 h-7" height={28} width={120} src='/logo.png' alt=""></Image>
                    <div className="flex gap-2">
                         <Link href='/' onClick={() => setActive("home")} className={`btn ${active === 'home' && 'bg-[#244D3F] text-white'}`}><FaHouseChimney></FaHouseChimney> Home</Link>
                         <Link href='/timeline' onClick={() => setActive("time")} className={`btn ${active === 'time' && 'bg-[#244D3F] text-white'}`}><FaClock></FaClock> Timeline</Link>
                         <Link href='/status' onClick={()=>setActive("stats")}  className={`btn ${active==='stats' && 'bg-[#244D3F] text-white'}`}><IoStatsChart></IoStatsChart> Stats</Link>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;