import { Navbar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      
      <span className='text-6xl'>Hola mundo!!!
      {new Date().toString()}
      </span>
    </main>
  )
}
