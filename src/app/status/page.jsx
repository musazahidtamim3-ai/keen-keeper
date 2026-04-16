"use client"
import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatusPage = () => {
     const[chartData,setChartData] = useState([])
     useEffect(() => {
          const datas = localStorage.getItem("myTimeline")
          if (datas) {
               const history  = JSON.parse(datas)

               const callCount = history.filter(item => item.action === "call").length
               const textCount = history.filter(item => item.action === "text").length
               const videoCount = history.filter(item => item.action === "video").length

               const data = [
                    { name: 'call', value: callCount, color: '#244D3F' },
                    { name: 'text', value: textCount, color: '#9C27B0' },
                    { name: 'video', value: videoCount, color: '#4CAF50' }
               ];
               setChartData(data)
          }
     },[])
     return (
          <div className='my-10'>
               <h1 className='text-[#244D3F] text-3xl font-bold text-left'>Friendship Analytics</h1>
               <div className='bg-base-100 border border-gray-200 shadow-md p-5 mt-5 rounded-md'>
                    <h2 className='font-medium'>By Interaction Type</h2>
                    <div style={{ width: '100%', height: 300}}>
                         <ResponsiveContainer>
                              <PieChart>
                                   <Pie
                                        data={chartData}
                                        innerRadius="70%"
                                        outerRadius="100%"
                                        paddingAngle={5}
                                        dataKey="value">
                                        {chartData.map((data, index) => (
                                             <Cell key={`cell-${index}`} fill={data.color} />
                                        ))}
                                   </Pie>
                                   <Tooltip/>
                                   <Legend />  
                              </PieChart>
                         </ResponsiveContainer>
                    </div>
               </div>
          </div>
     );
};

export default StatusPage;