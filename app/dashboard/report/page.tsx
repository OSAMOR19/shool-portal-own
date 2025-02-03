"use client"

import { useState } from "react"
import { ChevronDown, Download, Printer } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Student {
  id: number
  name: string
  scores: {
    maths: number[]
    science: number[]
    physics: number[]
    fmaths: number[]
  }
}

const students: Student[] = [
  {
    id: 1,
    name: "JOHNSON DARLON",
    scores: {
      maths: [50, 50, 50],
      science: [50, 50, 50],
      physics: [50, 50, 50],
      fmaths: [50, 50, 50],
    },
  },
  // Add more students as needed
]

const subjects = ["MATHS", "B.SCIENCE", "PHYSICS", "F.MATHS"]
const terms = Array.from({ length: 10 }, (_, i) => `SSS1 AUTUMN ${i + 1}`)

export default function ReportPage() {
  const [selectedTerm, setSelectedTerm] = useState(terms[0])

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="flex gap-4 p-6">
        {/* Left Sidebar */}
        <div className="w-64 space-y-2">
          <Button variant="secondary" className="w-full justify-between">
            Choose class <ChevronDown className="h-4 w-4" />
          </Button>
          <Card className="p-4">
            {terms.map((term) => (
              <div
                key={term}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                  selectedTerm === term ? "bg-primary text-primary-foreground" : "hover:bg-muted cursor-pointer"
                }`}
                onClick={() => setSelectedTerm(term)}
              >
                <div className="h-2 w-2 rounded-full bg-current" />
                {term}
              </div>
            ))}
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Card className="p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b pb-4">
              <div>
                <h1 className="text-xl font-semibold">FIRST TERM REPORT SHEET</h1>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Class Teacher:</span>
                  <span className="text-sm font-medium">Matthew Turner</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="2022/23">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2022/23">2022/23 SESSION</SelectItem>
                    <SelectItem value="2023/24">2023/24 SESSION</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Printer className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">NO.</TableHead>
                    <TableHead>NAMES</TableHead>
                    {subjects.map((subject) => (
                      <TableHead key={subject} className="text-center" colSpan={4}>
                        {subject}
                        <div className="mt-2 grid grid-cols-4 gap-2 text-xs font-normal">
                          <span>ASS</span>
                          <span>TEST</span>
                          <span>EXAM</span>
                          <span>TOTAL</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student, index) => (
                    <TableRow key={student.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      {Object.values(student.scores).map((scores, i) => (
                        <>
                          {scores.map((score, scoreIndex) => (
                            <TableCell key={`${student.id}-${i}-${scoreIndex}`} className="text-center">
                              {score}
                            </TableCell>
                          ))}
                          <TableCell key={`${student.id}-${i}-total`} className="text-center font-medium">
                            {scores.reduce((a, b) => a + b, 0)}
                          </TableCell>
                        </>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline">REJECT</Button>
              <Button>APPROVE</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

