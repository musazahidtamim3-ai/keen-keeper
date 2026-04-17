"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaClock, FaHouseChimney } from "react-icons/fa6";
import { GrTextAlignRight } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";


const Navbar = () => {
     const[active,setActive]=useState("home")
     const[open,setOpen]=useState(false)
     return (
          <div className="bg-base-100 shadow-md ">
               <div className="flex justify-between items-center py-3 px-5 lg:px-0 max-w-7xl mx-auto">
                    <Image className="w-30 h-7" height={28} width={120} src='/logo.png' alt=""></Image>
                    <div onClick={()=>setOpen(!open)} className="text-[#244D3F] md:hidden">
                         {
                              open === false ? <GrTextAlignRight></GrTextAlignRight> : <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                         }
                    </div>
                    <div className={`flex flex-col bg-base-100 p-5 border border-gray-200 shadow-md rounded-md md:hidden absolute  duration-1000 gap-2 ${open? 'top-15 right-5' : '-top-70 right-5'}`}>
                         <Link href='/' onClick={() => setActive("home")} className={`btn ${active === 'home' && 'bg-[#244D3F] text-white'}`}><FaHouseChimney></FaHouseChimney> Home</Link>
                         <Link href='/timeline' onClick={() => setActive("time")} className={`btn ${active === 'time' && 'bg-[#244D3F] text-white'}`}><FaClock></FaClock> Timeline</Link>
                         <Link href='/status' onClick={()=>setActive("stats")}  className={`btn ${active==='stats' && 'bg-[#244D3F] text-white'}`}><IoStatsChart></IoStatsChart> Stats</Link>
                    </div>
                    <div className="md:flex gap-2 hidden">
                         <Link href='/' onClick={() => setActive("home")} className={`btn ${active === 'home' && 'bg-[#244D3F] text-white'}`}><FaHouseChimney></FaHouseChimney> Home</Link>
                         <Link href='/timeline' onClick={() => setActive("time")} className={`btn ${active === 'time' && 'bg-[#244D3F] text-white'}`}><FaClock></FaClock> Timeline</Link>
                         <Link href='/status' onClick={()=>setActive("stats")}  className={`btn ${active==='stats' && 'bg-[#244D3F] text-white'}`}><IoStatsChart></IoStatsChart> Stats</Link>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;