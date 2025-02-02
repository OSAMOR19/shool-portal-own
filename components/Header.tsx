"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Bell, Search, Sun, Moon, QrCode, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b shadow-md">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-gray-900 dark:text-white"
        />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Country Flag */}
        {/* <Image src="/flags/usa.png" alt="USA Flag" width={24} height={16} className="rounded" /> */}

        {/* Notification Icon */}
        <Bell className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" />

        {/* Dark Mode Toggle */}
        <Button onClick={toggleDarkMode} variant="ghost" size="icon">
          {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </Button>

        {/* Scan Code Icon */}
        <QrCode className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" />

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-gray-700 dark:text-white" />
          <span className="text-gray-900 dark:text-white font-medium">{user?.name}</span>
        </div>

        {/* Logout Button */}
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </header>
  );
}
