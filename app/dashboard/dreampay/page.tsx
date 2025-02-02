// app/dashboard/dreampay/page.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: 'credit' | 'debit'
}

const transactions: Transaction[] = [
  {
    id: "TRX-001",
    date: "2025-02-01",
    description: "Cafeteria Payment",
    amount: 15.50,
    type: 'debit'
  }
]

export default function DreamPayPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">DreamPay Wallet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <Card className="p-6">
          <h2 className="text-lg text-gray-600">Current Balance</h2>
          <p className="text-3xl font-bold mt-2">$245.50</p>
          <div className="mt-4 space-x-2">
            <Button>Add Money</Button>
            <Button variant="outline">Transfer</Button>
          </div>
        </Card>

        {/* Quick Pay */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Pay</h2>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex flex-col items-center p-4">
              <span>Cafeteria</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4">
              <span>Library</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4">
              <span>Store</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map(transaction => (
            <div key={transaction.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}