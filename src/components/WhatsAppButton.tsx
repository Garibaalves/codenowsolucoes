'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '5531984380893' // Replace with actual WhatsApp number
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços da Codenow Soluções Digitais.'

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Expanded Chat Preview */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-w-sm"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Codenow Soluções</h4>
                      <p className="text-xs text-orange-500">Online agora</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleExpanded}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Message */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Olá! Como podemos ajudar você hoje?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Resposta típica em poucos minutos
                  </p>
                </div>

                {/* Quick Options */}
                <div className="space-y-2 mb-3">
                  <button
                    onClick={() => {
                      const message = 'Gostaria de solicitar um orçamento para desenvolvimento de sistema.'
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                      window.open(url, '_blank')
                    }}
                    className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  >
                    💼 Solicitar orçamento
                  </button>
                  <button
                    onClick={() => {
                      const message = 'Tenho dúvidas sobre os serviços oferecidos pela Codenow.'
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                      window.open(url, '_blank')
                    }}
                    className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  >
                    ❓ Tirar dúvidas
                  </button>
                  <button
                    onClick={() => {
                      const message = 'Gostaria de conhecer melhor o ERP CodeERP.'
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                      window.open(url, '_blank')
                    }}
                    className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  >
                    🏭 Conhecer ERP CodeERP
                  </button>
                </div>

                {/* Start Chat Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Iniciar Conversa</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleExpanded}
            className="relative w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 floating-animation"
            aria-label="Abrir chat do WhatsApp"
          >
            <MessageCircle size={24} />
            
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20"></div>
          </motion.button>

          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
            >
              Fale conosco no WhatsApp
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton