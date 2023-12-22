import { FaFacebook,FaYoutube  } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="mt-[100px] bg-[#1f4b8e] lg:h-[400px] md:h-[900px] ">
      <div className="md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white">
        <div className="md:w-[300px] flex flex-col justify-center items-center gap-3 ">
          <img className="w-9" src={""} alt="" />
          <p className="text-justify">
          Tasks Made Simple Success Made Achievable" is a motto or phrase that emphasizes the idea of breaking down complex tasks into manageable steps to attain success. It suggests that by simplifying tasks and


          </p>
          <div className="flex gap-2 text-3xl font-bold">
            <h1>
              {" "}
              <i className="fa-brands fa-facebook"></i>{" "}
            </h1>
            <h1>
              <i className="fa-brands fa-twitter"></i>{" "}
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="pt-4 text-2xl">Resources</h1>
          <div className="pt-4 ">
            <h1 className="">contack</h1>
            <h1 className="mt-2">Registration</h1>
            <h1 className="mt-2">servics</h1>
            
          </div>
        </div>
        <div>
          <h1 className=" pt-4 text-2xl">social Media</h1>
          <div className="flex gap-4 mt-4 font-bold text-3xl">
             <span><FaFacebook></FaFacebook></span>
             <span><FaYoutube ></FaYoutube></span>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-center text-[#918987] mt-3 md:text-xl">
        Copyright © 2023 AKTask. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterSection;
