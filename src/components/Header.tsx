import { Bars3Icon, MicrophoneIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { FiUser, FiVideo } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import youtube from "../assets/youtube-logo.png";
import { Context } from "../context/AppContext";

export default function Header() {
  const navigate = useNavigate();
  const { loading, mobileMenu } = useContext(Context);

  //Search Enter
  const searchHandler = (event: string) => {
    if (event === "Enter" || event == "search") {
      //Action Searching
    }
  };

  //Mobile Menu Toggle
  const mobileMenuToggle = () => {
    //Action Mobile Menubar
  };
  return (
    <div className="container">
      <div className="grid grid-cols-3 items-center bg-white py-2">
        <div className="flex items-center">
          <button className="rounded-full transition-all active:bg-slate-300 p-2">
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          </button>
          <div className="ml-5">
            <img className="w-1/4" src={youtube} alt="icons" />
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <input
              className=" outline-none rounded-l-full w-full py-1 px-2 border-y border-l border-slate-300 hover:border-slate-400"
              type="text"
              placeholder="Search..."
              onKeyUp={(e) => searchHandler(e.key)}
            />
            <button className="bg-slate-300  hover:bg-slate-400 rounded-r-full px-5">
              Search
            </button>
          </div>
        </div>
        <div className="items-center flex justify-between">
          <div className="microphone">
            <MicrophoneIcon className="w-7 h-7 mx-1 active:bg-slate-300 transition-all p-1 rounded-full" />
          </div>
          <div className="acc-group flex items-center gap-5">
            <FiVideo
              className="active:bg-slate-300 transition-all p-1 rounded-full"
              size={28}
            />
            <IoNotificationsOutline
              className="active:bg-slate-300 transition-all p-1 rounded-full"
              size={28}
            />
            <FiUser
              className="active:bg-slate-300 transition-all p-1 rounded-full"
              size={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
