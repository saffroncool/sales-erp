'use client'
import { useEffect, useState } from 'react'

type Customer = { id: string; name: string; email?: string }

export default function CustomersPage() {
  const [items, setItems] = useState<Customer[]>([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/customers')
      .then((r) => r.json())
      .then(setItems)
  }, [])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Customers</h3>
      <ul>
        {items.map((c) => (
          <li key={c.id} className="py-1">{c.name} {c.email && `(${c.email})`}</li>
        ))}
      </ul>
    </div>
  )
}
