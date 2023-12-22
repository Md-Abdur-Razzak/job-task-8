import React, { useContext } from 'react';
import { MyAuth } from '../Router/AuthProvider';
import google from '../../assets/g-removebg-preview.png'




const Google = () => {
    const {googleAthntocation}=useContext(MyAuth)
    
    const HandelGogole = ()=>{
        googleAthntocation()
        

            
          

    }
    return (
        <div className=''>
        <div className='flex justify-center gap-2 items-center'>
            <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           <h1>OR</h1>
           <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           
        </div>
      <div className='flex gap-2 justify-center mb-3 mt-2'>
      <div className='w-[50px]   border-blue-400' onClick={HandelGogole}>
            <img className='rounded-full border' src={google} alt="" />
        </div>
      

      </div>
    </div>
    );
};

export default Google;