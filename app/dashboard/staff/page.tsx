"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Star, Users, MoreVertical, PlusCircle, X } from "lucide-react"
import Image from "next/image"

// Import avatars
import Avt1 from "@/components/images/avt1.png"
import Avt2 from "@/components/images/avt2.png"
import Avt3 from "@/components/images/avt3.png"
import Avt4 from "@/components/images/avt4.png"
import Avt5 from "@/components/images/avt5.png"
import Avt6 from "@/components/images/avt6.png"

interface StaffMember {
  id: number
  name: string
  role: string
  subject: string
  type: "Subject" | "Position"
  avatar: any
  isFavorite: boolean
}

const initialStaff: StaffMember[] = [
  {
    id: 1,
    name: "Matthew Turner",
    role: "Teacher",
    subject: "Mathematics",
    type: "Subject",
    avatar: Avt1,
    isFavorite: true,
  },
  {
    id: 2,
    name: "Grace Heather",
    role: "Teacher",
    subject: "English",
    type: "Subject",
    avatar: Avt2,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Scott Mcgregor",
    role: "Others",
    subject: "Janitor",
    type: "Position",
    avatar: Avt3,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Adam Levine",
    role: "Teacher",
    subject: "Economics",
    type: "Subject",
    avatar: Avt4,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Rose Mayflower",
    role: "Others",
    subject: "Principal",
    type: "Position",
    avatar: Avt5,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Angelina Jolie",
    role: "Teacher",
    subject: "Physics",
    type: "Subject",
    avatar: Avt6,
    isFavorite: true,
  },
]

export default function StaffPage() {
  const [staff, setStaff] = useState(initialStaff)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Personal Details")

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFavorite = (id: number) => {
    setStaff(staff.map((member) => (member.id === id ? { ...member, isFavorite: !member.isFavorite } : member)))
  }

  const deleteStaff = (id: number) => {
    setStaff(staff.filter((member) => member.id !== id))
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All STAFF</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="bg-teal-600 text-white hover:bg-teal-700">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <Star className="h-4 w-4" />
          </Button>
          <Dialog open={isAddStaffOpen} onOpenChange={setIsAddStaffOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Staff
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle>Add Staff</DialogTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsAddStaffOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              <div className="border-b">
                <div className="flex gap-4">
                  <button
                    className={`px-4 py-2 ${activeTab === "Personal Details" ? "border-b-2 border-teal-600" : ""}`}
                    onClick={() => setActiveTab("Personal Details")}
                  >
                    Personal Details
                  </button>
                  <button
                    className={`px-4 py-2 ${activeTab === "Bank Details" ? "border-b-2 border-teal-600" : ""}`}
                    onClick={() => setActiveTab("Bank Details")}
                  >
                    Bank Details
                  </button>
                </div>
              </div>
              {activeTab === "Personal Details" ? (
                <div className="grid grid-cols-2 gap-4 p-4">
                  <Input placeholder="Enter first name" />
                  <Input placeholder="Enter last name" />
                  <Input placeholder="Enter email address" />
                  <Input placeholder="Enter phone number" />
                  <Input placeholder="Enter date of birth" />
                  <Input placeholder="Select Subject" />
                  <Input placeholder="Others" />
                  <Input placeholder="Select Class" />
                  <Input placeholder="Enter staff's position" />
                  <div className="flex justify-between items-center">
                    <span>Browse...</span>
                    <span className="text-gray-500">No file selected.</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <Input placeholder="Enter bank name" />
                  <Input placeholder="Enter account number" />
                  <Input placeholder="Enter account holder name" />
                  <Input placeholder="Enter amount" />
                </div>
              )}
              <div className="flex justify-end gap-2 p-4">
                <Button variant="outline" onClick={() => setIsAddStaffOpen(false)}>Close</Button>
                <Button className="bg-teal-600 hover:bg-teal-700">Save</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Search name or class attached"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="space-y-4">
        {filteredStaff.map((member) => (
          <Card key={member.id} className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-full"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[200px]">
                  <p className="text-sm text-gray-500">{member.type}</p>
                  <p>{member.subject}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm" className="bg-teal-600 text-white hover:bg-teal-700">
                    View Profile
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => toggleFavorite(member.id)}>
                    <Star className={`h-4 w-4 ${member.isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => deleteStaff(member.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}