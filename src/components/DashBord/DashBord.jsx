import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MyAuth } from "../Router/AuthProvider";

const DashBord = () => {
  const { user } = useContext(MyAuth);
  return (
    <div className="flex gap-5">
      <div className="bg-green-300 w-[200px] h-[100vh] flex flex-col gap-3 font-bold text-xl">
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <h1>{user?.displayName}</h1>
        </div>
        <NavLink
          to={"/Dashbord/creatTast"}
          className={({ isActive, isPending }) =>
            isActive
              ? " text-white bg-green-700 btn"
              : isPending
              ? "pending"
              : ""
          }
        >
          Create Task
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive, isPending }) =>
            isActive
              ? " text-white bg-green-700 btn"
              : isPending
              ? "pending"
              : ""
          }
        >
          Manage Task
        </NavLink>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBord;
