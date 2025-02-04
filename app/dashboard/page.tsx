/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Building2, GraduationCap, BookOpen, Users, RefreshCw } from "lucide-react"
import { Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Metric Card Component
// <<<<<<< Tabnine <<<<<<<
// function MetricCard({ title, value, viewAllLink, icon: IconComponent, iconClassName }) {//-
function MetricCard({ title, value, viewAllLink, icon: IconComponent, iconClassName }: { title: string; value: number; viewAllLink: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; iconClassName?: string }) {//+
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-500 uppercase tracking-wide">{title}</div>
      <div className="mt-2 flex justify-between items-center">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`p-2 rounded-lg ${iconClassName || "bg-teal-100"}`}>
          <IconComponent className="w-5 h-5 text-teal-600" />
        </div>
      </div>
      <Link href={viewAllLink} className="text-sm text-teal-600 hover:underline mt-2 block">
        View all {title.toLowerCase()}
      </Link>
    </div>
  )
}
// >>>>>>> Tabnine >>>>>>>// {"conversationId":"42156817-17c4-48e2-b9e8-3eb9d4df220c","source":"instruct"}

// Revenue Chart Component
function RevenueChart() {
  const data = [
    { month: "Jan", paid: 90, unpaid: 45, salary: 30 },
    { month: "Feb", paid: 45, unpaid: 55, salary: 25 },
    { month: "Mar", paid: 50, unpaid: 45, salary: 28 },
    { month: "Apr", paid: 85, unpaid: 35, salary: 22 },
    { month: "May", paid: 60, unpaid: 45, salary: 30 },
    { month: "Jun", paid: 45, unpaid: 55, salary: 25 },
    { month: "Jul", paid: 85, unpaid: 40, salary: 20 },
    { month: "Aug", paid: 45, unpaid: 55, salary: 35 },
    { month: "Sep", paid: 55, unpaid: 45, salary: 28 },
    { month: "Oct", paid: 45, unpaid: 50, salary: 22 },
    { month: "Nov", paid: 50, unpaid: 45, salary: 25 },
    { month: "Dec", paid: 75, unpaid: 35, salary: 30 },
  ]

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-semibold">Revenue</h2>
        <div className="flex gap-2 ml-auto">
          <span className="px-2 py-1 text-xs rounded bg-teal-100 text-teal-700">Y</span>
          <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">M</span>
          <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">W</span>
          <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">D</span>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="paid" fill="#14b8a6" name="Paid School fees" />
            <Bar dataKey="unpaid" fill="#0ea5e9" name="Unpaid School fees" />
            <Line type="monotone" dataKey="salary" stroke="#f59e0b" name="Salary Paid" dot={false} strokeWidth={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <span>Unpaid School fees</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <span>Paid School fees</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span>Salary Paid</span>
        </div>
      </div>
    </div>
  )
}

// Calendar Component
function Calendar() {
  const [month, setMonth] = useState("October")
  const [year, setYear] = useState("2022")

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const CALENDAR_DATES = [
    { date: 26, prevMonth: true },
    { date: 27, prevMonth: true },
    { date: 28, prevMonth: true },
    { date: 29, prevMonth: true },
    { date: 30, prevMonth: true },
    { date: 1 },
    { date: 2 },
    { date: 3 },
    { date: 4 },
    { date: 5 },
    { date: 6 },
    { date: 7 },
    { date: 8 },
    { date: 9 },
    { date: 10 },
    { date: 11 },
    { date: 12 },
    { date: 13 },
    { date: 14 },
    { date: 15 },
    { date: 16 },
    { date: 17 },
    { date: 18 },
    { date: 19 },
    { date: 20 },
    { date: 21 },
    { date: 22 },
    { date: 23 },
    { date: 24 },
    { date: 25 },
    { date: 26 },
    { date: 27, selected: true },
    { date: 28 },
    { date: 29 },
    { date: 30 },
    { date: 31 },
    { date: 1, nextMonth: true },
    { date: 2, nextMonth: true },
    { date: 3, nextMonth: true },
    { date: 4, nextMonth: true },
    { date: 5, nextMonth: true },
    { date: 6, nextMonth: true },
  ]

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Upcoming Schedules</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue={month}>
            <SelectTrigger className="w-[120px]">
              <SelectValue>{month}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="October">October</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue={year}>
            <SelectTrigger className="w-[100px]">
              <SelectValue>{year}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-sm font-medium py-2">
            {day}
          </div>
        ))}
        {CALENDAR_DATES.map((date, i) => (
          <button
            key={i}
            className={cn(
              "text-center py-2 rounded-lg text-sm",
              date.prevMonth || date.nextMonth ? "text-gray-400" : "text-gray-900",
              date.selected && "bg-teal-600 text-white",
            )}
          >
            {date.date}
          </button>
        ))}
      </div>
    </div>
  )
}

// Events List Component
function EventsList() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-gray-500 uppercase tracking-wide">Total number of events</div>
          <div className="text-2xl font-semibold">105</div>
        </div>
        <button className="p-2 bg-teal-50 rounded-lg">
          <RefreshCw className="w-5 h-5 text-teal-600" />
        </button>
      </div>
      <div className="space-y-4 mt-6">
        <div className="flex gap-4">
          <div className="bg-teal-50 rounded-lg p-2 h-12 w-12 flex items-center justify-center">
            <span className="text-lg font-semibold text-teal-700">20</span>
          </div>
          <div>
            <h3 className="font-medium">Mid-term Week</h3>
            <p className="text-sm text-gray-500">ALL DAY</p>
          </div>
          <div className="ml-auto text-sm text-gray-500">00:00-11:59pm</div>
        </div>
        <div className="flex gap-4">
          <div className="bg-teal-50 rounded-lg p-2 h-12 w-12 flex items-center justify-center">
            <span className="text-lg font-semibold text-teal-700">25</span>
          </div>
          <div>
            <h3 className="font-medium">JSS 1 TESTS</h3>
            <p className="text-sm text-gray-500">Mathematics, English | more</p>
          </div>
          <div className="ml-auto text-sm text-gray-500">09:30-17:00pm</div>
        </div>
      </div>
      <button className="text-sm text-teal-600 hover:underline mt-4 block">View all events</button>
    </div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Number of Classes"
          value={15}
          viewAllLink="/dashboard/classes"
          icon={Building2}
          iconClassName="bg-yellow-100"
        />
        <MetricCard
          title="Total Number of Subjects"
          value={50}
          viewAllLink="/dashboard/subjects"
          icon={BookOpen}
          iconClassName="bg-teal-100"
        />
        <MetricCard
          title="Total Number of Staff"
          value={35}
          viewAllLink="/dashboard/staff"
          icon={GraduationCap}
          iconClassName="bg-yellow-100"
        />
        <MetricCard
          title="Total Number of Students"
          value={350}
          viewAllLink="/dashboard/students"
          icon={Users}
          iconClassName="bg-red-100"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <div className="space-y-6">
          <Calendar />
          <EventsList />
        </div>
      </div>
    </div>
  )
}