// import { useState } from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import ThemeToggle from './ThemeToggle'
// import { Menu, X } from 'lucide-react'
// import logoImg from '../assets/Logo.jpg'

// export default function Navbar() {
// 	const [open, setOpen] = useState(false)

// 	function NavItem({ to, children }) {
// 		return (
// 			<NavLink
// 				to={to}
// 				className={({ isActive }) =>
// 					`transition hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`
// 				}
// 				onClick={() => setOpen(false)}
// 			>
// 				{children}
// 			</NavLink>
// 		)
// 	}

// 	return (
// 		<header className="fixed top-0 left-0 right-0 z-20">
// 			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// 				<div className="mt-4 rounded-2xl backdrop-blur-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
// 					<div className="flex h-16 items-center justify-between px-4 sm:px-6 text-slate-900 dark:text-white">
// 						<Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
// 							<img
// 								src={logoImg}
// 								alt="Hybrid AI logo"
// 								className="h-10 w-10 rounded-full object-cover border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
// 								loading="lazy"
// 							/>
// 							<span>
// 								Sensation<span className="text-cyan-400">AI</span>
// 							</span>
// 						</Link>

// 						<ul className="hidden md:flex items-center gap-8 text-sm">
// 							<li><NavItem to="/">Home</NavItem></li>
// 							<li><NavItem to="/features">Features</NavItem></li>
// 							<li><NavItem to="/about">About</NavItem></li>
// 							<li><NavItem to="/contact">Contact</NavItem></li>
// 						</ul>

// 						<div className="flex items-center gap-3">
// 							<ThemeToggle />
// 							<Link to="/login" className="hidden sm:inline-flex px-4 h-10 rounded-lg border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition">
// 								Login
// 							</Link>
// 							<Link to="/signup" className="hidden sm:inline-flex px-4 h-10 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 font-medium transition shadow-[0_0_20px_rgba(34,211,238,0.35)]">
// 								Sign Up
// 							</Link>
// 							<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90" onClick={() => setOpen(v => !v)} aria-label="Menu">
// 								{open ? <X size={18} /> : <Menu size={18} />}
// 							</button>
// 						</div>
// 					</div>
// 					{open && (
// 						<div className="md:hidden px-4 pb-4">
// 							<div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 text-sm text-slate-900 dark:text-white/90 space-y-3">
// 								<NavItem to="/">Home</NavItem>
// 								<NavItem to="/features">Features</NavItem>
// 								<NavItem to="/about">About</NavItem>
// 								<NavItem to="/contact">Contact</NavItem>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</nav>
// 		</header>
// 	)
// }

import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/Logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function NavItem({ to, children, className = '' }) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition ${
            isActive ? 'text-white' : 'text-white/80'
          } hover:text-white ${className}`
        }
        onClick={() => setOpen(false)}
      >
        {children}
      </NavLink>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 text-slate-900 dark:text-white">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              <img
                src={logoImg}
                alt="Hybrid AI logo"
                className="h-10 w-10 rounded-full object-cover border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
                loading="lazy"
              />
              <span>
                Sensation<span className="text-cyan-400">AI</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 text-sm">
              <li><NavItem to="/">Home</NavItem></li>
              <li><NavItem to="/features">Features</NavItem></li>
              <li><NavItem to="/about">About</NavItem></li>
              <li><NavItem to="/contact">Contact</NavItem></li>
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                to="/login"
                className="hidden sm:inline-flex px-4 h-10 rounded-lg border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hidden sm:inline-flex px-4 h-10 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 font-medium transition shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              >
                Sign Up
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90"
                onClick={() => setOpen(v => !v)}
                aria-label="Menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <div
            id="mobile-menu"
            className={`md:hidden px-4 transition-all duration-300 ease-out overflow-hidden ${
              open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
            }`}
          >
            <div className="mt-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 text-sm text-slate-900 dark:text-white/90 space-y-2">
              {/* Main nav items as dropdown buttons */}
              <NavItem
                to="/"
                className="block w-full px-3 py-2 rounded-lg bg-transparent hover:bg-white/10"
              >
                Home
              </NavItem>
              <NavItem
                to="/features"
                className="block w-full px-3 py-2 rounded-lg bg-transparent hover:bg-white/10"
              >
                Features
              </NavItem>
              <NavItem
                to="/about"
                className="block w-full px-3 py-2 rounded-lg bg-transparent hover:bg-white/10"
              >
                About
              </NavItem>
              <NavItem
                to="/contact"
                className="block w-full px-3 py-2 rounded-lg bg-transparent hover:bg-white/10"
              >
                Contact
              </NavItem>

              {/* Divider */}
              <div className="pt-3 mt-2 border-t border-black/10 dark:border-white/10 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 h-10 leading-10 rounded-lg border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 h-10 leading-10 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 font-medium transition shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

