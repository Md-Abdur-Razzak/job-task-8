import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const Update = () => {
    const data = useLoaderData()
    const{title,description,deadline,prority,_id}=data || {}
    
    const handelRegistration = (e)=>{
        e.preventDefault()
        const from =e.target
        const title =from.Title.value
        const deadline =from.deadline.value
        const description =from.Description.value
        const prority =from.Priority.value
        const allData = {title,deadline,description,prority}
        
        axios.patch(`https://job-task-client-phi.vercel.app/task/${_id}`,allData)
        .then(res=>{
          
            if(res.data){
                
                toast.success(" Task Update Sucessfully")
            }
           
        })
    }
    return (
        <div>
        <div className="w-[50%] ml-9">
          <form onSubmit={handelRegistration}>
            <div className="form-control  mt-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="Title"
                defaultValue={title}
                className="input w-full input-bordered "
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text mt-3">Priority</span>
              </label>
             <select name="Priority" id="" defaultValue={prority}  className="input w-full input-bordered ">
                  <option value="low">Low</option>
                  <option value="moderate">moderate</option>
                  <option value="high">high</option>
             </select>
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
              
                name="deadline"
                defaultValue={deadline}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="Description"
                placeholder="Description"
                defaultValue={description}
                required
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Creat Task</button>
            </div>
           
          </form>
        </div>
      </div>
    );
};

export default Update;