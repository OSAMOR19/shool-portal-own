"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Settings2, PenSquare } from "lucide-react"
import Image from "next/image"

// Import avatars
import Avt1 from "@/components/images/avt1.png"
import Avt2 from "@/components/images/avt2.png"
import Avt3 from "@/components/images/avt3.png"
import Avt4 from "@/components/images/avt4.png"
import Avt5 from "@/components/images/avt5.png"
import Avt6 from "@/components/images/avt6.png"

interface Class {
  id: string
  name: string
  level: string
  teacher: string
  teacherAvatar: any
  students: number
}

const initialClasses: Class[] = [
  {
    id: "1",
    name: "Diamond",
    level: "J.S.S.1",
    teacher: "Matthew Turner",
    teacherAvatar: Avt1,
    students: 30,
  },
  {
    id: "2",
    name: "Gold",
    level: "J.S.S.1",
    teacher: "Isaac",
    teacherAvatar: Avt2,
    students: 30,
  },
  {
    id: "3",
    name: "Silver",
    level: "J.S.S.1",
    teacher: "Matthew Turner",
    teacherAvatar: Avt3,
    students: 30,
  },
  {
    id: "4",
    name: "Platinum",
    level: "J.S.S.1",
    teacher: "Matthew Turner",
    teacherAvatar: Avt4,
    students: 30,
  },
  {
    id: "5",
    name: "Diamond",
    level: "J.S.S.2",
    teacher: "Matthew Turner",
    teacherAvatar: Avt5,
    students: 30,
  },
  {
    id: "6",
    name: "Gold",
    level: "J.S.S.2",
    teacher: "Matthew Turner",
    teacherAvatar: Avt6,
    students: 30,
  },
  {
    id: "7",
    name: "Silver",
    level: "J.S.S.2",
    teacher: "Matthew Turner",
    teacherAvatar: Avt1,
    students: 30,
  },
  {
    id: "8",
    name: "Platinum",
    level: "J.S.S.2",
    teacher: "Matthew Turner",
    teacherAvatar: Avt2,
    students: 30,
  },
]

export default function ClassesPage() {
  const [classes] = useState(initialClasses)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGroup, setSelectedGroup] = useState<string>("")

  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.level.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Input
              placeholder="Search Classes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[240px]"
            />
            <Button variant="destructive" size="icon">
              <span className="sr-only">Filter</span>
              <Settings2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select class groups" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jss1">JSS 1</SelectItem>
                <SelectItem value="jss2">JSS 2</SelectItem>
                <SelectItem value="jss3">JSS 3</SelectItem>
              </SelectContent>
            </Select>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">+ Add Group</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#F1F8F6]">
                <DialogHeader>
                  <DialogTitle>Add Class Group</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label>Name of Group</label>
                    <Input placeholder="Enter Group Name" />
                  </div>
                  <div className="grid gap-2">
                    <label>Select Class</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="flex items-center space-x-2 p-2">
                          <Checkbox id="c1" />
                          <label htmlFor="c1">J.S.S.1 Diamond</label>
                        </div>
                        <div className="flex items-center space-x-2 p-2">
                          <Checkbox id="c2" />
                          <label htmlFor="c2">J.S.S.1 Gold</label>
                        </div>
                        <div className="flex items-center space-x-2 p-2">
                          <Checkbox id="c3" />
                          <label htmlFor="c3">J.S.S.1 Silver</label>
                        </div>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-[#2A877E] hover:bg-[#236b63]">Add Group</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button>+ Add Class</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Class</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label>Class Name</label>
                    <Input placeholder="Enter class name" />
                  </div>
                  <div className="grid gap-2">
                    <label>Select Teacher</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select teacher" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matthew">Matthew Turner</SelectItem>
                        <SelectItem value="grace">Grace Heather</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-[#2A877E] hover:bg-[#236b63]">Add Class</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClasses.map((cls) => (
            <Card key={cls.id} className="relative bg-white">
              <Button variant="ghost" size="icon" className="absolute right-2 top-2">
                <PenSquare className="h-4 w-4 text-[#2A877E]" />
              </Button>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Settings2 className="h-8 w-8 text-[#2A877E]" />
                  <div>
                    <h3 className="font-semibold text-[#2A877E]">
                      {cls.level} {cls.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cls.level}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={cls.teacherAvatar || "/placeholder.svg"}
                      alt={cls.teacher}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm">{cls.teacher}</span>
                    <span className="text-sm text-muted-foreground ml-4">{cls.students} Students</span>
                  </div>
                  <Button variant="secondary" className="w-full mt-2">
                    View Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

