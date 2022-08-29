import SideBarIcon from "./sidebarIcon";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
    return ( 
        <div className="h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon text="Home" icon={<FaFire size="28"/>} />
            <SideBarIcon text="New" icon={<BsPlus size="28"/>} />
            <SideBarIcon text="Important" icon={<BsFillLightningFill size="28"/>} />
            <SideBarIcon text="Settings" icon={<BsGearFill size="28"/>} />
            
        </div>
    );
}

export default SideBar;