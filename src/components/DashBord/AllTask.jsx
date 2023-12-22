import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyAuth } from "../Router/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllTask = () => {
    const [data,setData]=useState([])
    const {user}=useContext(MyAuth)
    useEffect(()=>{
        axios.get(`http://localhost:3000/task?email=${user?.email}`)
        .then(res=>{
              setData(res.data);
           
        })
    },[user?.email])

    const hadeldelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/task/${id}`)
                .then(res=>{
                    const newdata = data?.filter(i=>i._id !==id)
                    setData(newdata)
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success"
              });
            }
          });


       
       
    }
    
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
                           <div>
                                <Link to={`/Dashbord/update/${item._id}`} className="btn  bg-green-500">Edit</Link>
                                <Link onClick={()=>hadeldelete(item._id)} className="btn bg-green-500">delete</Link>
                            </div>                        
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllTask;