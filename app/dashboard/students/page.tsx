"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, MoreHorizontal } from "lucide-react"
import Image from "next/image"

// Import avatars
import Avt1 from "@/components/images/avt1.png"
import Avt2 from "@/components/images/avt2.png"
import Avt3 from "@/components/images/avt3.png"

interface Student {
  id: string
  name: string
  avatar: any
  sex: "M" | "F"
  dob: string
  religion: string
  guardian: string
  teacher: string
  paid: boolean
}

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Calvin Phillips",
    avatar: Avt1,
    sex: "M",
    dob: "09/05/2005",
    religion: "Muslim",
    guardian: "Mrs Phillips",
    teacher: "Matthew Turner",
    paid: true,
  },
  {
    id: "2",
    name: "Katie Perry",
    avatar: Avt2,
    sex: "F",
    dob: "20/12/2005",
    religion: "Christianity",
    guardian: "Mrs Perry",
    teacher: "Matthew Turner",
    paid: true,
  },
  {
    id: "3",
    name: "Jennifer Anniston",
    avatar: Avt3,
    sex: "F",
    dob: "17/06/2005",
    religion: "Christianity",
    guardian: "Mr Anniston",
    teacher: "Matthew Turner",
    paid: false,
  },
  // Add more students with rotating avatars...
]

export default function StudentsPage() {
  const [students] = useState(initialStudents)
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "paid" | "unpaid">("all")
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" ? true : filter === "paid" ? student.paid : !student.paid
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search for Student"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>+ Add Student</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Student</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm">First Name</label>
                      <Input />
                    </div>
                    <div>
                      <label className="text-sm">Last Name</label>
                      <Input />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm">Date of Birth</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm">Religion</label>
                    <Input />
                  </div>
                  <div>
                    <label className="text-sm">Guardian Name</label>
                    <Input />
                  </div>
                  <Button>Add Student</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex gap-4 border-b">
          <Button
            variant={filter === "all" ? "default" : "ghost"}
            onClick={() => setFilter("all")}
            className="relative"
          >
            All
            <span className="ml-1 text-xs">{students.length}</span>
          </Button>
          <Button variant={filter === "paid" ? "default" : "ghost"} onClick={() => setFilter("paid")}>
            Paid
          </Button>
          <Button variant={filter === "unpaid" ? "default" : "ghost"} onClick={() => setFilter("unpaid")}>
            Unpaid
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Sex</TableHead>
                <TableHead>DOB</TableHead>
                <TableHead>Religion</TableHead>
                <TableHead>Guardian</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={(checked) => {
                        setSelectedStudents(
                          checked
                            ? [...selectedStudents, student.id]
                            : selectedStudents.filter((id) => id !== student.id),
                        )
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={student.avatar || "/placeholder.svg"}
                        alt={student.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.sex}</TableCell>
                  <TableCell>{student.dob}</TableCell>
                  <TableCell>{student.religion}</TableCell>
                  <TableCell>{student.guardian}</TableCell>
                  <TableCell>{student.teacher}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 1 to 10 of {filteredStudents.length} results</p>
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

