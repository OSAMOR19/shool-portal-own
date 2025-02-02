"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
  user: any
  login: (studentId: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage)
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (studentId: string, password: string) => {
    // Here you would typically make an API call to verify credentials
    // For this example, we'll just simulate a successful login
    const userData = { id: studentId, name: "John Doe" }
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

