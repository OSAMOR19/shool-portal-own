"use client";

import { Bell, Menu, Maximize, Moon, Plus, Settings, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image"; // Use Next.js Image component
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function Header() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center px-4 h-16 border-b bg-white">
        <Button variant="ghost" size="icon" className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Input type="search" placeholder="Search" className="pl-4 h-9 bg-[#F7F7FD] border-none" />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            <Maximize className="h-5 w-5 text-gray-500" />
          </Button>

          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5 text-gray-500" />
          </Button>

          {/* Messages Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2">
              <p className="text-sm font-medium">New message from Admin</p>
              <p className="text-xs text-gray-500">"Please review the latest report."</p>
            </PopoverContent>
          </Popover>

          {/* Notifications Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2">
              <p className="text-sm font-medium">Notification: System Update</p>
              <p className="text-xs text-gray-500">"Your system was updated successfully."</p>
            </PopoverContent>
          </Popover>

          {/* User Avatar and Info */}
          <div className="flex items-center gap-3 ml-2 pl-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              {/* Use Next.js Image component for optimized rendering */}
              <Image
                src="/images/josephine.svg" // Path to the image in the public folder
                alt="Josephine Station"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Josephine Station</span>
              <span className="text-xs text-green-500 font-medium">SUPER ADMIN</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between px-6 py-1">
        <h1 className="text-xl font-semibold">DASHBOARD</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}