import Image from 'next/image'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Home Page</h1>
        <h1>User List</h1>
      <Link to="/about">Go to About</Link>

      </div>

    </main>
  )
}

