import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EyeDonate
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/registration" className="hover:underline">Registration</Link></li>
            <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

