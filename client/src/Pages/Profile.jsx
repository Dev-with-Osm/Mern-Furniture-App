import { CiAt } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineContactPage, MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col my-10 justify-center items-center p-2">
      <h1 className="flex items-center justify-center text-2xl gap-2 mb-4 font-medium">
        Edit your profile
        <MdOutlineEdit />
      </h1>
      <img
        src={currentUser.avatar}
        alt="avatar"
        className="w-24 h-24 object-cover cursor-pointer mb-4 rounded-full"
      />
      <form className="flex flex-col gap-5 bg-transparent border-2 border-black p-8 md:w-[450px] rounded-lg">
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Username</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <MdOutlineContactPage className="" />
            <input
              placeholder="Enter your name"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="text"
              id="username"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Email</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <CiAt className="" />
            <input
              placeholder="Enter your Email"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="email"
              id="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Password</label>
          <div className="inputForm border border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <IoLockClosedOutline />
            <input
              placeholder="Enter your Password"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="password"
              id="password"
            />
          </div>
        </div>
        <button className="bg-[#151717] w-full h-[50px] rounded-xl text-white">
          Update Info
        </button>
        <div className="flex justify-between items-center text-sm text-red-600">
          <button>Delete Account</button>
          <button>Logout</button>
        </div>
      </form>
    </div>
  );
}
