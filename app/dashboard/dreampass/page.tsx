"use client";
import { useState } from "react";
import { ArrowUpRight, BookOpen, GraduationCap, PenTool, TestTube, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const metrics = [
  {
    label: "Accredited Teachers",
    value: 36,
    change: "+100.00%",
    icon: GraduationCap,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    label: "Practice Exams",
    value: 57,
    change: "+57.82%",
    icon: PenTool,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    label: "Tests",
    value: 208,
    status: "Completed",
    icon: TestTube,
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    label: "Exams",
    value: 106,
    change: "65.12%",
    icon: BookOpen,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

const examData = [
  {
    subject: "English Language",
    category: "NECO",
    teacher: "CLASS TEACHER",
    class: "S.S.S.1 Science C",
    examType: "NECO",
    session: "Second Term",
    status: "IN PROGRESS",
  },
  {
    subject: "Literature",
    category: "JAMB",
    teacher: "CLASS TEACHER",
    class: "S.S.S.1 Arts A",
    examType: "JAMB",
    session: "Second Term",
    status: "COMPLETED",
  },
  {
    subject: "Mathematics",
    category: "WAEC",
    teacher: "SUPER ADMIN",
    class: "S.S.S.1 Science",
    examType: "WAEC",
    session: "Second Term",
    status: "COMPLETED",
  },
  {
    subject: "Mathematics",
    category: "WAEC",
    teacher: "Mr Williams",
    class: "S.S.S.1 Commerce",
    examType: "EXAM",
    session: "Second Term",
    status: "COMPLETED",
  },
  {
    subject: "Home Economics",
    category: "WAEC",
    teacher: "Mrs. Faridah",
    class: "J.S.S.1",
    examType: "EXAM",
    session: "Second Term",
    status: "COMPLETED",
  },
  {
    subject: "Basic Science",
    category: "WAEC",
    teacher: "Mr. Charles",
    class: "J.S.S.3",
    examType: "Test",
    session: "Second Term",
    status: "COMPLETED",
  },
  {
    subject: "Basic Technology",
    category: "WAEC",
    teacher: "Mrs. Olayinka",
    class: "J.S.S.1",
    examType: "EXAM",
    session: "Second Term",
    status: "IN PROGRESS",
  },
  {
    subject: "Chemistry",
    category: "WAEC",
    teacher: "SUPER ADMIN",
    class: "S.S.S.1 Science",
    examType: "JAMB",
    session: "Second Term",
    status: "IN PROGRESS",
  },
];

const DashboardPage = () => {
  const [showPracticeModal, setShowPracticeModal] = useState(false);

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="relative overflow-hidden bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{metric.label}</p>
                  <h3 className="text-2xl font-semibold mt-2">{metric.value}</h3>
                  {metric.change && (
                    <p className="flex items-center text-sm text-emerald-600 mt-1">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      {metric.change}
                    </p>
                  )}
                  {metric.status && (
                    <p className="flex items-center text-sm text-emerald-600 mt-1">
                      ✓ {metric.status}
                    </p>
                  )}
                </div>
                <div className={`${metric.bgColor} p-2 rounded-lg`}>
                  <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Exam Center */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Exam Center</h2>
          <div className="space-x-2">
            <Button 
              variant="secondary"
              onClick={() => setShowPracticeModal(true)}
              className="bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Practice Exam
            </Button>
            <Button className="bg-teal-500 text-white hover:bg-teal-600">
              Open Portal
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 items-center">
          <Input 
            placeholder="Search for class, student, email or status" 
            className="max-w-sm bg-gray-50"
          />
          <Select defaultValue="second-term">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Second Term" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first-term">First Term</SelectItem>
              <SelectItem value="second-term">Second Term</SelectItem>
              <SelectItem value="third-term">Third Term</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="ml-auto">
            Filters
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[30px]">
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Class (Group)</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Session</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examData.map((exam, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell className="font-medium text-blue-600">{exam.subject}</TableCell>
                  <TableCell>{exam.category}</TableCell>
                  <TableCell className={exam.teacher === "SUPER ADMIN" ? "text-blue-600" : ""}>
                    {exam.teacher}
                  </TableCell>
                  <TableCell>{exam.class}</TableCell>
                  <TableCell>{exam.examType}</TableCell>
                  <TableCell>{exam.session}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      exam.status === "COMPLETED" 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {exam.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Practice Exam Modal */}
      <Dialog open={showPracticeModal} onOpenChange={setShowPracticeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Generate Practice Exam</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neco">NECO</SelectItem>
                  <SelectItem value="jamb">JAMB</SelectItem>
                  <SelectItem value="waec">WAEC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Select>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English Language</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Class</label>
              <Select>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sss1">S.S.S.1</SelectItem>
                  <SelectItem value="sss2">S.S.S.2</SelectItem>
                  <SelectItem value="sss3">S.S.S.3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Questions</label>
              <Select defaultValue="30">
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="30" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500">
                Can only generate 50 exams a year
                <br />
                You have generated (30)
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setShowPracticeModal(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600">
              Proceed
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardPage;