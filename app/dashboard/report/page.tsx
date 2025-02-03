"use client"

import { useState } from "react"
import { Building2, Download, Printer } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Student {
  id: number
  name: string
  scores: {
    maths: { ass: number; test: number; exam: number }
    science: { ass: number; test: number; exam: number }
    physics: { ass: number; test: number; exam: number }
    fmaths: { ass: number; test: number; exam: number }
  }
}

const students: Student[] = [
  {
    id: 1,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 2,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 3,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 4,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 5,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 6,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  {
    id: 7,
    name: "JOHNSON DARLON",
    scores: {
      maths: { ass: 49, test: 30, exam: 12 },
      science: { ass: 49, test: 50, exam: 12 },
      physics: { ass: 50, test: 30, exam: 50 },
      fmaths: { ass: 50, test: 12, exam: 50 },
    },
  },
  // Add more students as needed
]

const terms = Array.from({ length: 10 }, (_, i) => `SSS1 AUTUMN ${i + 1}`)

export default function ReportPage() {
  const [selectedTerm, setSelectedTerm] = useState("SSS1 AUTUMN")

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="flex gap-4 p-4">
        {/* Left Sidebar */}
        <div className="w-[240px] space-y-4">
          <Button
            variant="outline"
            className="w-full bg-[#2A7B89] text-white hover:bg-[#2A7B89]/90 flex items-center gap-2 h-12"
          >
            <Building2 className="h-5 w-5" />
            Choose class
          </Button>

          <Card className="bg-[#2A7B89] text-white p-0">
            <RadioGroup defaultValue="SSS1 AUTUMN" className="space-y-0" onValueChange={setSelectedTerm}>
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex items-center space-x-2 px-4 py-3 hover:bg-[#236873] cursor-pointer">
                  <RadioGroupItem
                    value={`SSS1 AUTUMN ${i + 1}`}
                    id={`term-${i}`}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2A7B89]"
                  />
                  <Label htmlFor={`term-${i}`} className="text-white cursor-pointer">
                    SSS1 AUTUMN
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Class Teacher:</span>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <span className="text-sm font-medium">Matthew Turner</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Select defaultValue="2022/23">
                <SelectTrigger className="w-[140px] h-8">
                  <SelectValue>2022/23 SESSION</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022/23">2022/23 SESSION</SelectItem>
                  <SelectItem value="2023/24">2023/24 SESSION</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="h-8">
                <Download className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="sm" className="h-8">
                <Printer className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-md overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A7B89] text-white text-sm">
                  <th className="border-r border-white/20 p-2 text-center w-12">NO.</th>
                  <th className="border-r border-white/20 p-2 text-left">NAMES</th>
                  {["MATHS", "B.SCIENCE", "PHYSICS", "F.MATHS"].map((subject) => (
                    <th key={subject} className="border-r border-white/20" colSpan={4}>
                      <div className="p-2">
                        <div className="text-center">{subject}</div>
                        <div className="grid grid-cols-4 gap-2 mt-2 text-xs font-normal">
                          <span>ASS</span>
                          <span>TEST</span>
                          <span>EXAM</span>
                          <span>TOTAL</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="border-b">
                    <td className="border-r p-2 text-center">{index + 1}</td>
                    <td className="border-r p-2">{student.name}</td>
                    {Object.values(student.scores).map((subject, i) => (
                      <>
                        <td key={`${student.id}-${i}-ass`} className="border-r p-2 text-center">
                          {subject.ass}
                        </td>
                        <td key={`${student.id}-${i}-test`} className="border-r p-2 text-center">
                          {subject.test}
                        </td>
                        <td key={`${student.id}-${i}-exam`} className="border-r p-2 text-center">
                          {subject.exam}
                        </td>
                        <td key={`${student.id}-${i}-total`} className="border-r p-2 text-center font-medium">
                          {subject.ass + subject.test + subject.exam}
                        </td>
                      </>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              REJECT
            </Button>
            <Button className="bg-[#2A7B89] hover:bg-[#2A7B89]/90">APPROVE</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

