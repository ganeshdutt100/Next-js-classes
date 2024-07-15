'use client'
import React, { useState } from 'react'

const page = () => {
const [a,b]= useState(0);
  return (
    <div>
      <h1 >i am about page </h1>
      <button className=' bg-purple-600 rounded-md px-5 hover:bg-white hover:text-purple-600' onClick={()=> b(a+1)}>Click me {a}</button>
    </div>
  )
}

export default page
