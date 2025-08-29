'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Desenvolvimento de Sistemas', href: '/servicos/desenvolvimento-sistemas' },
    { name: 'Desenvolvimento de Aplicativos', href: '/servicos/desenvolvimento-aplicativos' },
    { name: 'Desenvolvimento de Sites', href: '/servicos/desenvolvimento-sites' },
    { name: 'Gestão de Agentes de IA', href: '/servicos/gestao-agentes-ia' },
    { name: 'Desenvolvimento de RPA', href: '/servicos/desenvolvimento-rpa' },
    { name: 'Consultoria em Sistemas', href: '/servicos/consultoria-sistemas' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img 
              src="/logo-codenow.svg" 
              alt="CodeNow Soluções" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/quem-somos"
              className="text-white hover:text-accent transition-colors duration-300 font-medium"
            >
              Quem Somos
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/servicos"
                className="flex items-center text-white hover:text-accent transition-colors duration-300 font-medium"
              >
                Serviços
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/erp-codeerp"
              className="text-white hover:text-accent transition-colors duration-300 font-medium"
            >
              ERP CodeERP
            </Link>
            <Link
              href="/contato"
              className="text-white hover:text-accent transition-colors duration-300 font-medium"
            >
              Contato
            </Link>
            
            {/* CTA Button */}
            <a
              href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de sistema."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-4"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/20"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/quem-somos"
                  className="block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Quem Somos
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                  >
                    Serviços
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/5"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-8 py-2 text-white/80 hover:text-accent hover:bg-white/10 transition-all duration-300 text-sm"
                            onClick={closeMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/erp-codeerp"
                  className="block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  ERP CodeERP
                </Link>
                <Link
                  href="/contato"
                  className="block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Contato
                </Link>
                
                <div className="px-4 pt-4">
                  <a
                    href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de sistema."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                    onClick={closeMenu}
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header