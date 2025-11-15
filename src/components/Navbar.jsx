import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="flex items-center justify-between h-16 w-full px-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-2xl font-bold text-primary-600">Amarin ratarasarn</h1>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4 ml-auto">
          <a href="https://www.facebook.com/title.amarin.2024" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://instagram.com/amxrinnn_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://github.com/hormuu04" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-600">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 