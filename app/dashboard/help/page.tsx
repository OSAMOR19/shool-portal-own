// app/dashboard/help/page.tsx
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I reset my DreamPass?",
    answer: "Visit the school's admin office with your student ID...",
    category: "DreamPass"
  }
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Help Center</h1>

      {/* Search */}
      {/* <Card className="p-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">How can we help you?</h2>
          <div className="flex gap-2">
            <Input placeholder="Search for help..." className="flex-1" />
            <Button>Search</Button>
          </div>
        </div>
      </Card> */}

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-3">Contact Support</h3>
          <p className="text-sm text-gray-600 mb-4">Need personal assistance? Reach out to our support team.</p>
          <Button className="w-full">Contact Us</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Video Tutorials</h3>
          <p className="text-sm text-gray-600 mb-4">Watch our guides on how to use the portal features.</p>
          <Button variant="outline" className="w-full">Watch Tutorials</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">User Guide</h3>
          <p className="text-sm text-gray-600 mb-4">Download our comprehensive user guide PDF.</p>
          <Button variant="outline" className="w-full">Download Guide</Button>
        </Card>
      </div>

      {/* FAQs */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
              <span className="inline-block mt-2 text-sm text-gray-500">{faq.category}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}