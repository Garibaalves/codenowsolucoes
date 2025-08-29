'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    { name: 'Desenvolvimento de Sistemas', href: '/servicos/desenvolvimento-sistemas' },
    { name: 'Desenvolvimento de Aplicativos', href: '/servicos/desenvolvimento-aplicativos' },
    { name: 'Desenvolvimento de Sites', href: '/servicos/desenvolvimento-sites' },
    { name: 'Gestão de Agentes de IA', href: '/servicos/gestao-agentes-ia' },
    { name: 'Desenvolvimento de RPA', href: '/servicos/desenvolvimento-rpa' },
    { name: 'Consultoria em Sistemas', href: '/servicos/consultoria-sistemas' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'ERP CodeERP', href: '/erp-codeerp' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <footer className="bg-primary-900 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-codenow.svg" 
                alt="CodeNow Soluções" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Especialistas em desenvolvimento de sistemas, aplicativos, sites, gestão de IA, RPA e consultoria em automação de processos. Transformamos ideias em soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/codenowsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com/codenowsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/codenowsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://twitter.com/codenowsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white/70 text-sm">
                    Rua Magnólia - 214<br />
              Belvedere, Ouro Branco - MG<br />
              CEP: 36496-384
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a
                  href="tel:+5531984380893"
                  className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  (31) 98438-0893
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a
                  href="mailto:contato@codenowsolucoes.com.br"
                  className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  contato@codenowsolucoes.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Codenow Soluções Digitais. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Desenvolvido com ❤️ pela equipe Codenow
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/politica-privacidade"
                className="text-white/60 hover:text-accent transition-colors duration-300 text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="text-white/60 hover:text-accent transition-colors duration-300 text-sm"
              >
                Termos de Uso
              </Link>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white hover:bg-accent-600 transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer