import { Inter } from 'next/font/google'
import Nav from '../ui/nav'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className}`}>
      <Nav />
      {children}
    </div>
  )
}
