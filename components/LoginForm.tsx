"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import img1 from "@/components/images/dreambg.svg"
import Logo from "@/components/images/logodream.svg"

export default function LoginForm() {
  const [studentId, setStudentId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(studentId, password)
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      // Handle login error (e.g., show error message)
    }
  }

  return (
    <div className="min-h-screen bg-white flex font-['Poppins'] relative">
      {/* Logo */}
      <div className="absolute top-12 left-16 z-10">
        <Image 
          src={Logo}
          alt="Dream Books Logo" 
          width={120} 
          height={32} 
          className="w-auto h-8"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-[45%] pt-40 px-16 relative z-10">
        <div className="max-w-[440px]">
          <h1 className="text-[#2B7B78] text-[32px] font-bold mb-1 flex items-center gap-2">
            Welcome Back <span className="text-2xl">☺</span>
          </h1>
          <p className="text-gray-400 text-base mb-8">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[15px] font-medium text-gray-700">
                Student ID/Email
              </label>
              <Input
                type="text"
                placeholder="Enter Student ID/Email"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full py-2.5 px-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-[#2B7B78] focus:border-[#2B7B78]"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[15px] font-medium text-gray-700">
                  Password
                </label>
                <Link href="/forgot-password" className="text-[13px] text-gray-400 hover:text-[#2B7B78]">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2.5 px-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-[#2B7B78] focus:border-[#2B7B78]"
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
              <label htmlFor="remember" className="ml-2 text-[13px] text-gray-600">
                Remember me
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#2B7B78] hover:bg-[#2B7B78]/90 text-white py-2.5 rounded-md text-base font-medium"
            >
              Sign In
            </button>

            <p className="text-center text-[13px] text-gray-600">
              Dont have login details? Login via
              <Link href="/accesskey" className="text-[#2B7B78] hover:underline font-medium">
                Accesskey
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[55%] h-full p-4">
        <Image
          src={img1}
          alt="Decorative background"
          className="w-full h-full object-cover rounded-lg"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  )
}