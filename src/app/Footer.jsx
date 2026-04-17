import Image from 'next/image';
import React from 'react';

const Footer = () => {
     return (
          <div className='bg-[#244D3F] py-10 px-5 lg:px-0'>
               <div className='flex flex-col items-center w-full'>
                    <Image className="w-45 h-7" height={28} width={120} src='/logo-xl.png' alt=""></Image>
                    <p className='py-3 text-gray-300 font-medium text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className='text-white pb-2'>Social Links</h3>
                    <div className='flex gap-3 items-center'>
                         <Image className="w-8 h-8" height={28} width={120} src='/instagram.png' alt=""></Image>
                         <Image className="w-8 h-8" height={28} width={120} src='/facebook.png' alt=""></Image>
                         <Image className="w-8 h-8" height={28} width={120} src='/twitter.png' alt=""></Image>
                    </div>
                    <hr className='border border-white/5 mt-5 w-full' />
                    <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-50 justify-between items-center pt-3 font-medium  '>
                         <p className='text-gray-300'>© 2026 KeenKeeper. All rights reserved.</p>
                         <div className='flex items-center gap-5 text-gray-300'>
                              <p>Privacy Policy</p>
                              <p>Terms of Service</p>
                              <p>Cookies</p>
                         </div>
                    </div>
               </div>  
          </div>
     );
};

export default Footer;