"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Home Page</h1>
        <h1>User List</h1>
        {/* <Link href="/controller" className="block text-blue-500 hover:underline mb-2">
          controller
        </Link> */}
      </div>

    </main>

  )
}

