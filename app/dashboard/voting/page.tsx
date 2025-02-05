"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Users2, ChevronDown, Clock, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Vote from "@/components/images/votewoman.svg"
import { Checkbox } from "@/components/ui/checkbox"

type Position = {
  title: string
  status: "completed" | "in-progress" | "not-setup"
}

export default function VotingPage() {
  const [activeSection, setActiveSection] = useState<"school" | "class">("school")
  const [isAddPositionOpen, setIsAddPositionOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState("")

  const classes = Array.from({ length: 10 }, (_, i) => `SSS1 AUTUMN ${i + 1}`)

  const schoolPositions: Position[] = [
    { title: "HEAD BOY", status: "completed" },
    { title: "HEAD GIRL", status: "completed" },
    { title: "LABOUR PREFECT", status: "in-progress" },
    { title: "SOCIAL PREFECT", status: "completed" },
    { title: "LIBRARY PREFECT", status: "in-progress" },
    { title: "ASSISTANT HEAD GIRL", status: "not-setup" },
  ]

  const classPositions: Position[] = [
    { title: "CLASS CAPTAIN", status: "not-setup" },
    { title: "ASSISTANT CAPTAIN", status: "completed" },
  ]

  const getStatusBadgeClass = (status: Position["status"]) => {
    switch (status) {
      case "completed":
        return "bg-[#E7F7EF] text-[#107C41]"
      case "in-progress":
        return "bg-[#EBF3FF] text-[#1366D9]"
      case "not-setup":
        return "bg-[#FFF3E8] text-[#D46B08]"
    }
  }

  const getStatusText = (status: Position["status"]) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "not-setup":
        return "Not Set Up"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">VOTING</h1>
          <Button variant="outline" className="gap-2">
            2022/23 SESSION
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          <div className="space-y-4">
            <button
              onClick={() => setActiveSection("school")}
              className={`flex items-center justify-between w-full p-4 rounded-lg border ${
                activeSection === "school"
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5" />
                <span className="font-medium">School Elections</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>

            <button
              onClick={() => setActiveSection("class")}
              className={`flex items-center justify-between w-full p-4 rounded-lg border ${
                activeSection === "class"
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Users2 className="h-5 w-5" />
                <span className="font-medium">Class Elections</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="mt-6">
              <Image
                src={Vote || "/placeholder.svg"}
                alt="Voting Promotion"
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border">
            <div className="flex justify-between items-center mb-6">
              <Button onClick={() => setIsAddPositionOpen(true)} className="bg-emerald-500 hover:bg-emerald-600">
                + Add Position
              </Button>
            </div>

            <div className="grid md:grid-cols-[240px,1fr] gap-6">
              {activeSection === "class" ? (
                <div className="bg-[#2A9988] text-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Users2 className="h-5 w-5" />
                    <span>Choose class</span>
                  </div>
                  <RadioGroup value={selectedClass} onValueChange={setSelectedClass}>
                    {classes.map((className) => (
                      <div key={className} className="flex items-center space-x-2 py-2">
                        <RadioGroupItem value={className} id={className} className="border-white text-white" />
                        <Label htmlFor={className} className="text-white">
                          {className}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                <div className="bg-[#2A9988] text-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5" />
                    <span>School Elections</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Manage and monitor school-wide election positions for various leadership roles.
                  </p>
                </div>
              )}

              <div className="flex-1">
                <Tabs defaultValue="ballot">
                  <div className="border-b border-gray-200">
                    <TabsList className="flex h-12 items-center gap-8 bg-transparent p-0">
                      <TabsTrigger
                        value="ballot"
                        className="px-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-600 rounded-none bg-transparent"
                      >
                        Ballot
                      </TabsTrigger>
                      <TabsTrigger
                        value="results"
                        className="px-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-600 rounded-none bg-transparent"
                      >
                        Results
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="ballot" className="mt-6">
                    <div className="grid grid-cols-1 gap-4">
                      {(activeSection === "school" ? schoolPositions : classPositions).map((position) => (
                        <div
                          key={position.title}
                          className="flex items-center justify-between py-4 px-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-emerald-200 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#E11D48]" />
                            <span className="font-medium text-gray-900">{position.title}</span>
                          </div>
                          <div className="flex items-center gap-6">
                            <span
                              className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusBadgeClass(position.status)}`}
                            >
                              {getStatusText(position.status)}
                            </span>
                            <div className="flex items-center gap-3">
                              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                                <Clock className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="results">
                    <div className="flex items-center justify-center h-[400px] text-gray-500">
                      No results available yet.
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isAddPositionOpen} onOpenChange={setIsAddPositionOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Position</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label>Position</Label>
                <Input placeholder="Enter Position" />
              </div>
              {activeSection === "school" && (
                <div className="space-y-4">
                  <Label>Who can Vote</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="students" />
                      <label htmlFor="students">Students</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="teachers" />
                      <label htmlFor="teachers">Teachers</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parents" />
                      <label htmlFor="parents">Parents</label>
                    </div>
                  </div>
                </div>
              )}
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onClick={() => setIsAddPositionOpen(false)}
              >
                Add Position
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}