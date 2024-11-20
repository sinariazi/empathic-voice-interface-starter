'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Plus, Trash2 } from 'lucide-react'

type CreditCard = {
  id: string
  last4: string
  brand: string
  expMonth: number
  expYear: number
}

type Payment = {
  id: string
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
}

type Subscription = {
  plan: string
  status: 'active' | 'canceled' | 'past_due'
  nextBillingDate: string
  amount: number
}

export function PaymentManagement() {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([
    { id: '1', last4: '4242', brand: 'Visa', expMonth: 12, expYear: 2024 },
    { id: '2', last4: '5555', brand: 'Mastercard', expMonth: 6, expYear: 2025 },
  ])

  const [subscription, setSubscription] = useState<Subscription>({
    plan: 'Pro',
    status: 'active',
    nextBillingDate: '2023-06-15',
    amount: 99.99
  })

  const [paymentHistory, setPaymentHistory] = useState<Payment[]>([
    { id: '1', amount: 99.99, date: '2023-05-15', status: 'completed' },
    { id: '2', amount: 99.99, date: '2023-04-15', status: 'completed' },
    { id: '3', amount: 99.99, date: '2023-03-15', status: 'completed' },
  ])

  const addCreditCard = () => {
    // This would typically involve a form and API call
    const newCard: CreditCard = {
      id: String(creditCards.length + 1),
      last4: '1234',
      brand: 'Visa',
      expMonth: 12,
      expYear: 2026
    }
    setCreditCards([...creditCards, newCard])
  }

  const removeCreditCard = (id: string) => {
    setCreditCards(creditCards.filter(card => card.id !== id))
  }

  const updatePlan = () => {
    // This would typically involve an API call
    alert('Plan update functionality would be implemented here')
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
          <CardDescription>Your current plan and billing information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Current Plan</p>
                <p>{subscription.plan}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p>{subscription.status}</p>
              </div>
              <div>
                <p className="font-semibold">Next Billing Date</p>
                <p>{subscription.nextBillingDate}</p>
              </div>
              <div>
                <p className="font-semibold">Amount</p>
                <p>${subscription.amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={updatePlan}>Update Plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your credit cards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {creditCards.map(card => (
              <div key={card.id} className="flex items-center justify-between p-4 border rounded">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">{card.brand} ending in {card.last4}</p>
                    <p className="text-sm text-gray-500">Expires {card.expMonth}/{card.expYear}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeCreditCard(card.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addCreditCard}>
            <Plus className="mr-2 h-4 w-4" /> Add New Card
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Your recent payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map(payment => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}