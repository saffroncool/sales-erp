import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="font-bold mb-4">Sales ERP</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/customers">Customers</Link>
        </nav>
      </aside>
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
