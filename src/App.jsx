import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
export default function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
      </main>
    </>
  )
}
