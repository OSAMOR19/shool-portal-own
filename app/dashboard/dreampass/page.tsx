// app/dashboard/dreampass/page.tsx
import { Card } from "@/components/ui/card"

interface Pass {
  id: string
  type: string
  validUntil: string
  usageCount: number
  lastUsed: string
}

const passes: Pass[] = [
  {
    id: "DP-2025-001",
    type: "Library Access",
    validUntil: "2025-12-31",
    usageCount: 15,
    lastUsed: "2025-02-01"
  }
]

export default function DreamPassPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">DreamPass Access Control</h1>

      {/* Active Pass Display */}
      <Card className="p-6 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Student Access Card</h2>
              <p className="mt-2">ID: {passes[0].id}</p>
            </div>
            <div className="text-right">
              <p>Valid until: {passes[0].validUntil}</p>
              <p className="mt-1">Status: Active</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Access History */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Access History</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p className="font-medium">Library Entry</p>
              <p className="text-sm text-gray-500">Jan 30, 2025 - 09:15 AM</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Successful
            </span>
          </div>
          {/* Add more access history entries */}
        </div>
      </Card>
    </div>
  )
}