'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '代表紹介', href: '#ceo' },
    { name: '企業情報', href: '#company' },
    { name: '施工事例', href: '#works' },
    { name: '事業内容', href: '#business' },
    { name: '企業理念', href: '#philosophy' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-8">
        <div className="flex items-center h-20">
          {/* Logo - 左端 */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo.png"
                alt="株式会社NAWA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - 中央 */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons - 右端固定 */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <a
              href="https://www.instagram.com/nawa.kentiku?igsh=MXEzOHd5emJ5YnZ5Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:opacity-80 transition-opacity"
              style={{ color: '#E4405F' }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://line.me/ti/p/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:opacity-80 transition-opacity"
              style={{ color: '#06C755' }}
              aria-label="LINE"
            >
              <SiLine />
            </a>
            <a
              href="#contact"
              className="text-2xl text-gray-700 hover:text-primary transition-colors"
              aria-label="お問い合わせ"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-primary ml-auto"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t">
              <a
                href="https://www.instagram.com/nawa.kentiku?igsh=MXEzOHd5emJ5YnZ5Nw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
                style={{ color: '#E4405F' }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://line.me/ti/p/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
                style={{ color: '#06C755' }}
              >
                <SiLine />
              </a>
              <a
                href="#contact"
                className="text-2xl text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaEnvelope />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
