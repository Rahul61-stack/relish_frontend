import Image from 'next/image'
import Signup from './Signup'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Signup></Signup>
    </main>
  )
}
