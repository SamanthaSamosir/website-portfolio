"use client";

import { useState } from "react";
import Link from "next/link";
import {
    CircleHelp,
    MessageCircleQuestion,
    Earth,
    CircleUser,
    Headset,
    Library,
    Home,
    House,
    Video,
    Clock,
    List,
    ThumbsUp,
    Download,
    Menu,
    ChevronRight,
    ChevronLeft,
    Music,
    BriefcaseBusiness,
    PlaySquare,
    User2,
    Users,
    GalleryHorizontalEnd,
    ShoppingCart
} from "lucide-react";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? "w-20" : "w-64";
  const [activeItem, setActiveItem] = useState("Home");
  
  return (
    <> 
      
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-background p-2 rounded text-black"
        onClick={() => {
          if (window.innerWidth < 1024) {
            setMobileOpen(!mobileOpen);
          } else {
            setCollapsed(!collapsed);
          }
        }}
        aria-label="Toggle sidebar"
      >
        <Menu />
        <img title="Samantha Samosir" src="/Logo.png" alt="Logo" width={100} h-auto="true" />
      </button>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-18 left-0 h-full bg-background text-black p-4 z-40
          transition-transform duration-300 ease-in-out
          ${sidebarWidth}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
      >
        {/* Primary Links */}

        <nav className="space-y-2 text-black">
          <SidebarItem icon={<Home />} label="Home" collapsed={collapsed} active={activeItem === "Home"} onClick={() => setActiveItem("Home")}/>
          <SidebarItem icon={<Users />} label="About" collapsed={collapsed} active={activeItem === "About"} onClick={() => setActiveItem("About")}/>
          <SidebarItem icon={<GalleryHorizontalEnd />} label="Works" collapsed={collapsed} active={activeItem === "Works"} onClick={() => setActiveItem("Works")}/>
          <SidebarItem icon={<BriefcaseBusiness />} label="Services"  collapsed={collapsed} active={activeItem === "Shorts"} onClick={() => setActiveItem("Shorts")}/>
          <SidebarItem icon={<Headset />} label="Contact"  collapsed={collapsed}/>
          <SidebarItem icon={<ShoppingCart />} label="Store"  collapsed={collapsed}/>
        </nav>

        <hr className="my-4 border-gray-300" />

        <nav className="space-y-2">
            <SidebarItem icon={<Library />} label="Free Sources"  collapsed={collapsed}/>
            <SidebarItem icon={<CircleUser />} label="Testimonials"  collapsed={collapsed}/>
            <SidebarItem icon={<CircleHelp />} label="FAQ"  collapsed={collapsed}/>
            {/* <SidebarItem icon={<ThumbsUp />} label="Liked videos"  collapsed={collapsed}/>
            <SidebarItem icon={<Download />} label="Downloads"  collapsed={collapsed}/> */}
        </nav>
          
        <hr className="my-4 border-gray-300" />

        {/* Subscriptions */}
        {/* {!collapsed && (
          <div>
            <div className="text-sm font-bold text-white mb-2">Subscriptions</div>
            <div className="space-y-2 text-sm text-gray-300">
              <SidebarItem avatar="C" label="Creativera™" dot collapsed={collapsed} />
              <SidebarItem avatar="U" label="UTMB® World S…" dot collapsed={collapsed} />
              <SidebarItem avatar="T" label="Tina Huang" dot collapsed={collapsed} />
              <SidebarItem avatar="Y" label="Y Combinator" collapsed={collapsed} />
            </div>
          </div>
        )} */}
      </aside>
    </>
  );
}
function SidebarItem({
  icon,
  label,
  dot,
  active,
  avatar,
  collapsed,
  onClick,
}: {
  icon?: React.ReactNode;
  label: string;
  dot?: boolean;
  active?: boolean;
  avatar?: string;
  collapsed?: boolean;
  onClick?: ()=>void;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded px-3 py-2 hover:bg-gray-300 cursor-pointer ${
        active ? "bg-gray-100" : "" //active section color
      }`}
    >
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="text-black">{icon}</span> //Make icon going black on light mode
        ) : (
          <div className="w-6 h-6 bg-gray-600 text-black rounded-full flex items-center justify-center text-xs">
            {avatar}
          </div>
        )}
        {!collapsed && <span>{label}</span>}
      </div>
      {/* {!collapsed && dot && <span className="w-2 h-2 bg-blue-500 rounded-full" />} */}
    </div>
  );
}