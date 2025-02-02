import Link from "next/link"
import { Home, BookOpen, Calendar, Settings, LogOut, HelpCircle } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">School Portal</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/courses" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <BookOpen className="w-5 h-5 mr-3" />
              Calendar
            </Link>
          </li>
          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              Report
            </Link>
          </li>
          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              Announcement
            </Link>
          </li>
          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              Voting
            </Link>
          </li>
          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              DreamPass
            </Link>
          </li>
          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-3" />
              DreamPay
            </Link>
          </li>

          <li>
            <Link href="/dashboard/schedule" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

