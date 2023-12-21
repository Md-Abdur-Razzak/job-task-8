import React, { useContext } from 'react';
import { MyAuth } from '../Router/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
   
    return (
        <div className='banner mt-3 lg:h-[650px] '>
        <div className=''>
        <div className='lg:flex  lg:justify-evenly lg:items-center  '>
             <div data-aos="fade-right"   className=' lg:w-[40%]   w-[90%] mx-auto mt-4'>
                 <h1 className='font-extrabold md:text-6xl text-4xl py-7 lg:text-left text-center'>Welcome to the <span className='text-blue-500'>Educational</span> and <span  className='text-pink-500'>Training </span>Events</h1>
                 <p className='text-justify text-xl py-6'>Educational  and training events offer diverse learning opportunities, including workshops, seminars, and webinars. They're designed to enhance skills, knowledge, and personal/professional growth, catering to various interests and industries. Whether in-person or online, these events provide vital platforms for acquiring expertise and networking</p>
                  <div className='flex md:justify-start justify-center'>
                    <Link to={'/login'}>
                         <button className='btn bg-blue-500 '>Expolore Events</button> 
                    </Link>
                    
                 </div>             
             </div>
             <div data-aos="fade-left" className='mt-[33px]'>
                 <img src={"https://i.ibb.co/5BN6W6Z/film-editor.jpg"}alt="" />
             </div>
             
        </div>
        </div>
      
     </div>
    );
};

export default Banner;