"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import img1 from "@/components/images/dreambg.svg";
import Logo from "@/components/images/logodream.svg";

export default function LoginForm() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in as:", { studentId, password, role });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-['Poppins'] relative">
      {/* Logo */}
      <div className="absolute top-6 pl-10 left-6 z-10 md:top-12 md:left-16">
        <Image src={Logo} alt="Dream Books Logo" width={120} height={32} className="w-auto h-8" />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-16 relative z-10">

        
        <div className="max-w-[400px] w-full">
          <h1 className="text-[#2B7B78] text-3xl font-bold mb-2 flex items-center gap-2">
            Welcome Back <span className="text-2xl">☺</span>
          </h1>
          <p className="text-gray-400 text-base mb-6">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2B7B78] focus:border-[#2B7B78]"
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Student ID/Email</label>
              <Input
                type="text"
                placeholder="Enter Student ID/Email"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2B7B78] focus:border-[#2B7B78]"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-xs text-gray-500 hover:text-[#2B7B78]">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#2B7B78] focus:border-[#2B7B78]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#2B7B78] focus:ring-[#2B7B78]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>

            <button type="submit" className="w-full bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white py-2.5 rounded-md text-base font-medium">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have login details? Login via
              <Link href="/accesskey" className="text-[#2B7B78] hover:underline font-medium"> Accesskey</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
        <Image src={img1} alt="Decorative background" className="w-full h-full object-cover" priority />
      </div>
    </div>
  );
}
