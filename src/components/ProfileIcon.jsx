import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-pic.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return(
        <div className="flex fap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                <TbGridDots size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 relative flex justify-center items-center">
                <img src={Profile} alt="Profile" className="h-10 w-10 rounded-full" />
                <img src={ProfileRing} alt="Profile Ring" className="h-10 w-10 rounded-full absolute top-0 left-0" />
            </span>
        </div>
    )
};

export default ProfileIcon;
