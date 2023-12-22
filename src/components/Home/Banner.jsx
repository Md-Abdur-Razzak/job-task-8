import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyAuth } from "../Router/AuthProvider";

const Banner = () => {
    const {user}=useContext(MyAuth)
  return (
    <div className="banner mt-3 lg:h-[650px] ">
      <div className="">
        <div className="lg:flex  lg:justify-evenly lg:items-center  ">
          <div
            data-aos="fade-right"
            className=" lg:w-[40%]   w-[90%] mx-auto mt-4"
          >
            <h1 className="font-extrabold md:text-6xl text-4xl py-7 lg:text-left text-center">
              Tasks Made Simple Success Made Achieavable
            </h1>
            <p className="text-justify text-xl py-6">
            Tasks Made Simple Success Made Achievable" is a motto or phrase that emphasizes the idea of breaking down complex tasks into manageable steps to attain success. It suggests that by simplifying tasks and 
            </p>
            <div className="flex md:justify-start justify-center">
                {
                    user?<Link to={"/Dashbord/creatTast"}>
                <button className="btn bg-blue-500 ">Let’s Explore”</button>
              </Link>: <Link to={"/login"}>
                <button className="btn bg-blue-500 ">Let’s Explore”</button>
              </Link>
                }
              
            </div>
          </div>
          <div data-aos="fade-left" className="mt-[33px]">
            <img src={"https://i.ibb.co/C0y6jLK/taskbanner.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
