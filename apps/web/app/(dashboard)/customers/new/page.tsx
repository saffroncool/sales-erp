'use client'
import { useState } from 'react'

export default function NewCustomerPage() {
  const [name, setName] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    await fetch(process.env.NEXT_PUBLIC_API_URL + '/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    setName('')
    alert('Created')
  }

  return (
    <form onSubmit={submit} className="max-w-md">
      <label className="block">Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="border p-2 mb-2 w-full" />
      <button className="px-3 py-1 bg-blue-600 text-white rounded">Create</button>
    </form>
  )
}
