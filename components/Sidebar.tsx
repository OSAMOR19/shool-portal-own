import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Settings, 
  LogOut, 
  HelpCircle, 
  Vote, 
  CreditCard, 
  BadgeCheck, 
  Bell 
} from "lucide-react";
import img1 from "@/components/images/graceland.svg";
import img2 from "@/components/images/dreamlogowhite.svg";

export function Sidebar() {
  const mainMenuItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/calendar", icon: Calendar, label: "Calendar" },
    { href: "/dashboard/report", icon: BookOpen, label: "Report" },
    { href: "/dashboard/announcement", icon: Bell, label: "Announcement" },
    { href: "/dashboard/voting", icon: Vote, label: "Voting" },
    { href: "/dashboard/dreampass", icon: BadgeCheck, label: "Dreampass" },
    { href: "/dashboard/dreampay", icon: CreditCard, label: "Dreampay" },
  ];

  const bottomMenuItems = [
    { href: "/dashboard/help", icon: HelpCircle, label: "Help" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/logout", icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="flex flex-col w-64 bg-[#206A71] min-h-screen">
      <div className="p-4">
        <Image 
          src={img1} 
          alt="Graceland High School" 
          width={150} 
          height={40} 
          className="mb-6"
          priority 
        />
        <div className="text-sm text-gray-300 mb-0">Menu</div>
      </div>

      <nav className="flex-1 flex flex-col justify-between">
        <ul className="px-2 space-y-1">
          {mainMenuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-[#175358] hover:text-white rounded-lg transition-colors group"
              >
                <item.icon className="w-5 h-5 mr-3 opacity-75" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <ul className="px-2 space-y-1">
            {bottomMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2.5 text-gray-300 hover:bg-[#175358] hover:text-white rounded-lg transition-colors group"
                >
                  <item.icon className="w-5 h-5 mr-3 opacity-75" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="p-4 mt-6 border-t border-[#175358]">
            <div className="text-gray-300 text-sm mb-2">Powered by</div>
            <Image 
              src={img2} 
              alt="DreamBooks" 
              width={130} 
              height={40} 
              priority 
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;