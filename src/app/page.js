import Image from 'next/image'
import NavBar from './components/navbar/NavBar'
import { NavElement } from './components/navbar/NavElement'
import PreSignup from './components/Auth/Presignup/PreSignup'
import HomePage from './components/Home/HomePage'
import Signup from './components/Auth/Signup/Signup'

export default function Home() {
  
  return (
    
    <main className=''>
      <Signup></Signup>
    </main>
  )
}
