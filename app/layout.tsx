import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Сроки наследования и налоговых вычетов',
  description: 'Сравнение сроков обращения за наследством и налоговых имущественных вычетов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
