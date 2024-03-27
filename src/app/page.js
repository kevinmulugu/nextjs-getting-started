'use client'

import { Links } from "./components/links"

import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState(0)

  function MyButton({count, onClick}) {
    return (
      <button onClick={onClick} className="p-3 bg-gray-800 text-white rounded-lg">Click me: {count}</button>
    )
    
  }

  function setClick() {
    setCount(count + 1)
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="space-y-12 md:my-12 md:w-2/3">
        <h3 className="text-center sm:text-left leading-tight text-7xl font-bold md:max-w-max">Manage your DM's</h3>
        <span className="text-center sm:text-left text-6xl max-w-sm leading-tight font-semibold">with Ease</span>
        <p>
        We offer you a central location to manage all of your 
        social media account's direct messages
        </p>
        <a href="#" className="inline-block p-3 py-2 px-3 text-white rounded-lg bg-gray-800 hover:bg-gray-600">Manage my DM's</a>
        <MyButton onClick={setClick} count={count} className="block" />
      </div>
      <div className="md:w-1/3"></div>
    </section>
  )
}
