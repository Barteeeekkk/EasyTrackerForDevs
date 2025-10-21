import { Link } from 'react-router-dom'
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react"

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-900">IssueLite</Link>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>

        <SignedOut>
          <Link to="/sign-in" className="hover:underline">Log in</Link>
          <Link to="/sign-up" className="hover:underline">Sign up</Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar