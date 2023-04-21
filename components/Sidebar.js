import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkAltIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
//import { BeakerIcon } from '@heroicons/react/24/solid'
export default function Sidebar() {
  return (
    <div className=" hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        
        {/* Twitter logo */}

        <div className="hoverEffect p-0 hover:bg-blue-100 xl: px-1" >            
            <Image 
                width={50} 
                height={50} 
                src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_of_Twitter%2C_Inc..svg/1024px-Logo_of_Twitter%2C_Inc..svg.png" >
            </Image>
            
        </div>

        {/* Menu */}
        <div className=" mt-4 mb-2.5 xl:items-start ">
            <SidebarMenuItem text="Home" Icon = {HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon = {HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon = {BellIcon} />
            <SidebarMenuItem text="Messages" Icon = {InboxIcon} />
            <SidebarMenuItem text="BookMarks" Icon = {BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon = {ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon = {UserIcon} />
            <SidebarMenuItem text="More" Icon = {DotsCircleHorizontalIcon} />
        </div>

        {/* Button  */}
        <button className="bg-blue-400 mb-2 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline  " >Tweet</button>

        {/* Mini Profile */}
        <div className="hoverEffect p-0 mt-2 flex hover:bg-blue-100 xl:px-1 ">
            <img 
                height={75} 
                width={75}  
                src="https://derpicdn.net/img/2020/7/28/2409596/large.jpg" 
                alt="user-img" 
                className="h-20 w-20 rounded-full xl:mr-2"
                />
            <div className=" leading-5 pt-3 hidden xl:inline " >
                <h4 className="font-bold "> Nitro Eth </h4>
                <p className=" text-gray-500 ">@NitroGT56</p>
            </div>
            <DotsHorizontalIcon className="h-10  pt-3 xl:ml-8 hidden xl:inline " />
        </div>

    </div>
  )
}
