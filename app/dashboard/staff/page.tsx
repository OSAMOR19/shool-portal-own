"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Star, Users, MoreVertical, PlusCircle } from "lucide-react"
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

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.subject.toLowerCase().includes(searchQuery.toLowerCase()),
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
          <Button variant="outline" size="icon">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
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

      <Card>
        <div className="divide-y">
          {filteredStaff.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center gap-4">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="rounded-full"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[200px]">
                  <p className="text-sm text-muted-foreground">{member.type}</p>
                  <p>{member.subject}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm">
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
                      <DropdownMenuItem className="text-destructive" onClick={() => deleteStaff(member.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

