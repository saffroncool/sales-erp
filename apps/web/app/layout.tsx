import './globals.css'
export const metadata = { title: 'Sales ERP' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  )
}
