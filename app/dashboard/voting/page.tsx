// app/dashboard/announcement/page.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Announcement {
  id: number
  title: string
  content: string
  date: string
  category: string
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "End of Semester Examination Schedule",
    content: "The end of semester examinations will commence from...",
    date: "2025-02-15",
    category: "Academic"
  },
  // Add more announcements...
]

export default function AnnouncementPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">VOTING</h1>
        <Button>Mark All as Read</Button>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{announcement.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {announcement.category} • {announcement.date}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{announcement.content}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}