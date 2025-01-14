import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/registration" className="hover:underline">Become a Donor</Link></li>
              <li><Link href="/process" className="hover:underline">Donation Process</Link></li>
              <li><Link href="/stories" className="hover:underline">Impact Stories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Eye Care Lane</p>
            <p>Vision City, VC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@eyedonate.org</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 EyeDonate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

