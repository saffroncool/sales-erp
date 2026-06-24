import Link from 'next/link'
import type { ReactNode } from 'react'

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/customers', label: 'Customers' },
  { href: '/customers/new', label: 'New Customer' },
  { href: '/quotes', label: 'Quotes' },
  { href: '/orders', label: 'Orders' }
]

type DashboardShellProps = {
  title: string
  subtitle?: string
  action?: ReactNode
  children: ReactNode
}

export function DashboardShell({ title, subtitle, action, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        <aside className="w-full shrink-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:w-72">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              SE
            </div>
            <div>
              <p className="text-base font-semibold">Sales ERP</p>
              <p className="text-sm text-slate-500">Internal ops</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl bg-slate-900 p-4 text-sm text-slate-200">
            <p className="font-semibold text-white">Today focus</p>
            <p className="mt-2">Review 4 follow-ups and 2 quote requests.</p>
          </div>
        </aside>

        <main className="flex-1 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Dashboard</p>
              <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
              {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
            </div>
            {action ? <div>{action}</div> : null}
          </div>

          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
