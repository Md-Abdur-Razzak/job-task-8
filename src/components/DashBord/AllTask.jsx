import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyAuth } from "../Router/AuthProvider";


const AllTask = () => {
    const [data,setData]=useState([])
    const {user}=useContext(MyAuth)
    useEffect(()=>{
        axios.get(`http://localhost:3000/task?email=${user?.email}`)
        .then(res=>{
              setData(res.data);
           
        })
    },[user?.email])
    console.log(data);
    return (
        <div className="w-[80%] grid grid-cols-3 gap-3 mt-9 ">
            {
                data?.map(item=>{
                    return(
                        <div key={item._id} className="bg-green-300 p-3">
                           <h1 className="font-bold">{item.title}</h1>                         
                           <h1>{item.deadline}</h1>                         
                           <h1>{item.prority}</h1>                         
                           <h1>{item.description}</h1>                         
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllTask;