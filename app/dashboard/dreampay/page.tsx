"use client"
import { useState } from "react"
import { ArrowUpRight, MoreHorizontal, Copy, Eye, Download, Edit, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const metrics = [
  {
    label: "INVOICES SENT",
    value: "₦1,140,000",
    change: "+89.34%",
    description: "Invoice Sent",
    icon: Copy,
  },
  {
    label: "PAID INVOICES",
    value: "₦1,040,000",
    change: "+10.82%",
    description: "Paid by Students",
    icon: Copy,
  },
  {
    label: "UNPAID INVOICES",
    value: "₦100,000",
    change: "+19.37%",
    description: "Unpaid by Students",
    icon: Eye,
  },
  {
    label: "ITEMS",
    value: "12",
    description: "Items created by Admin",
    action: "View",
    icon: Eye,
  },
]

const invoiceData = [
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "School Fees",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦120,000",
    status: "PAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "Sports Wear",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦2,000",
    status: "UNPAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "School Uniform",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦12,000",
    status: "PAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "School Fees",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦120,000",
    status: "PAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "School Fees",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦120,000",
    status: "PAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "Swimming",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦5,000",
    status: "UNPAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "School Fees",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦120,000",
    status: "UNPAID",
  },
  {
    id: "#DR2500328",
    student: "Angelina Jolie",
    item: "Jet's Club",
    class: "J.S.S.1 Diamond",
    date: "30 Mar, 2022",
    time: "9:59pm",
    amount: "₦10,000",
    status: "PAID",
  },
]

const DreampayDashboard = () => {
  const [showScholarshipModal, setShowScholarshipModal] = useState(false)
  const [showCreateItemModal, setShowCreateItemModal] = useState(false)

  return (
    <div className="container mx-auto p-6 space-y-6 bg-[#FAFAFA] min-h-screen">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="relative overflow-hidden bg-white shadow-none border-none">
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <p className="text-xs font-medium text-gray-500">{metric.label}</p>
                  {metric.icon && <metric.icon className="h-4 w-4 text-gray-400" />}
                </div>
                <h3 className="text-2xl font-semibold">{metric.value}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-500">{metric.description}</p>
                  {metric.change && (
                    <p className="flex items-center text-xs text-emerald-600">
                      <ArrowUpRight className="h-3 w-3" />
                      {metric.change}
                    </p>
                  )}
                  {metric.action && <p className="flex items-center text-xs text-teal-500">{metric.action}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Invoices Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Invoices</h2>
          <div className="space-x-3">
            <Button
              onClick={() => setShowScholarshipModal(true)}
              className="bg-[#F5B82E] hover:bg-[#E5AB2E] text-white"
            >
              Scholarship
            </Button>
            <Button onClick={() => setShowCreateItemModal(true)} className="bg-[#F04438] hover:bg-[#E03428] text-white">
              Create Item
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Input placeholder="Search for class, student, item or status" className="bg-white pl-10" />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="ml-auto bg-[#0C666F] text-white hover:bg-[#0B5F67]">
            Filter
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="w-[30px]">
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableHead>
                <TableHead className="font-medium">ID</TableHead>
                <TableHead className="font-medium">Student</TableHead>
                <TableHead className="font-medium">Item</TableHead>
                <TableHead className="font-medium">Class</TableHead>
                <TableHead className="font-medium">Date</TableHead>
                <TableHead className="font-medium">Amount</TableHead>
                <TableHead className="font-medium">Payment Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData.map((invoice, i) => (
                <TableRow key={i} className="hover:bg-gray-50">
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell className="font-medium text-blue-600">{invoice.id}</TableCell>
                  <TableCell>{invoice.student}</TableCell>
                  <TableCell>{invoice.item}</TableCell>
                  <TableCell>{invoice.class}</TableCell>
                  <TableCell>
                    <div>{invoice.date}</div>
                    <div className="text-xs text-gray-500">{invoice.time}</div>
                  </TableCell>
                  <TableCell className="font-medium">{invoice.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        invoice.status === "PAID" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FEF3F2] text-[#B42318]"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[160px]">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" /> Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <p className="text-sm text-gray-500">Showing 1 to 10 of 12 results</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-[#0C666F] text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship Modal */}
      <Dialog open={showScholarshipModal} onOpenChange={setShowScholarshipModal}>
        <DialogContent className="sm:max-w-[425px] p-0 gap-0">
          <DialogHeader className="bg-[#F5B82E] p-4">
            <DialogTitle className="text-lg font-semibold text-white flex items-center">
              Scholarship
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowScholarshipModal(false)}
                className="ml-auto text-white hover:text-white/90"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Class</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jss1">J.S.S.1</SelectItem>
                  <SelectItem value="jss2">J.S.S.2</SelectItem>
                  <SelectItem value="jss3">J.S.S.3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Student</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student1">Student 1</SelectItem>
                  <SelectItem value="student2">Student 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Item</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="item1">School Fees</SelectItem>
                  <SelectItem value="item2">Sports Wear</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-3 p-4 border-t">
            <Button variant="outline" onClick={() => setShowScholarshipModal(false)}>
              Close
            </Button>
            <Button className="bg-[#F5B82E] hover:bg-[#E5AB2E] text-white">Proceed</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Item Modal */}
      <Dialog open={showCreateItemModal} onOpenChange={setShowCreateItemModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Create Item</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Item*</label>
              <Input placeholder="Name of Item" className="bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Input placeholder="Description" className="bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category*</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">Category 1</SelectItem>
                  <SelectItem value="cat2">Category 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Class Group*</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="group1">Group 1</SelectItem>
                  <SelectItem value="group2">Group 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount*</label>
              <Input placeholder="₦0.00" className="bg-white" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              variant="ghost"
              onClick={() => setShowCreateItemModal(false)}
              className="text-red-500 hover:text-red-600"
            >
              Cancel
            </Button>
            <Button className="bg-[#0C666F] hover:bg-[#0B5F67] text-white">Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DreampayDashboard

