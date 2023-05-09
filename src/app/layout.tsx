import './globals.css'

export const metadata = {
  title: 'Money Manager',
  description: 'A future-oriented personal finance manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-bgcolor'>{children}</body>
    </html>
  )
}
