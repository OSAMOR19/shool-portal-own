"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Landmark, Users, Book } from "lucide-react";
import Image from "next/image";

export default function DashboardHome() {
  return (
    <div className="grid gap-6 font-['Poppins'] md:grid-cols-2 lg:grid-cols-4">
      {/* Total Classes */}
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Number of Classes</CardTitle>
          <Landmark className="w-6 h-6 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15</div>
        </CardContent>
      </Card>

      {/* Total Subjects */}
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Number of Subjects</CardTitle>
          <Book className="w-6 h-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">50</div>
        </CardContent>
      </Card>

      {/* Total Staff */}
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Number of Staff</CardTitle>
          <Users className="w-6 h-6 text-brown-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">35</div>
        </CardContent>
      </Card>

      {/* Total Students */}
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Number of Students</CardTitle>
          <Image src="/icons/students-icon.png" alt="Students" width={24} height={24} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">350</div>
        </CardContent>
      </Card>

      {/* Revenue Chart Placeholder */}
      <Card className="col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Chart Placeholder</span>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Schedules */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Upcoming Schedules</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </CardContent>
      </Card>
    </div>
  );
}
