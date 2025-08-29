'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  MessageSquare,
  User,
  Building,
  Calendar,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  Zap,
  Shield,
  Award,
  Users
} from 'lucide-react'
import type { Metadata } from 'next'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContatoPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Desenvolvimento de Sistemas',
    'Desenvolvimento de Aplicativos',
    'Desenvolvimento de Sites',
    'Gestão de Agentes de IA',
    'Desenvolvimento de RPA',
    'Consultoria em Sistemas',
    'ERP CodeERP',
    'Outros'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    } else if (!/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envio do formulário
      // Em produção, aqui seria feita a integração com um serviço de e-mail
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simular sucesso (em produção, verificar resposta da API)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@codenowsolucoes.com.br',
      link: 'mailto:contato@codenowsolucoes.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (31) 98438-0893',
      link: 'tel:+5531984380893'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+55 (31) 98438-0893',
      link: 'https://wa.me/5531984380893'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua Magnólia - 214 - Belvedere - Ouro Branco - MG CEP: 36496384',
      link: '#'
    }
  ]

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ]

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Resposta Rápida',
      description: 'Respondemos em até 2 horas úteis'
    },
    {
      icon: Shield,
      title: 'Confidencialidade',
      description: 'Seus dados estão seguros conosco'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Soluções de alta qualidade e performance'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes e certificados'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/codenow-solucoes',
      color: 'hover:text-orange-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/codenowsolucoes',
      color: 'hover:text-pink-400'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/codenowsolucoes',
      color: 'hover:text-orange-500'
    },
    {
      icon: Globe,
      name: 'Website',
      url: 'https://codenowsolucoes.com.br',
      color: 'hover:text-accent'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
              <MessageSquare className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Pronto para transformar sua empresa com soluções digitais inovadoras? 
              Vamos conversar sobre seu projeto!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Envie sua <span className="gradient-text">Mensagem</span>
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
                </p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-orange-400 font-medium">Mensagem enviada com sucesso!</p>
                    <p className="text-orange-400/80 text-sm">Entraremos em contato em breve.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-center gap-3"
                >
                  <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-red-400 font-medium">Erro ao enviar mensagem</p>
                    <p className="text-red-400/80 text-sm">Tente novamente ou entre em contato diretamente.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-accent/50'
                        }`}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-accent/50'
                        }`}
                        placeholder="seu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-accent/50'
                        }`}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                  >
                    <option value="" className="bg-primary text-white">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-primary text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-accent/50'
                    }`}
                    placeholder="Conte-nos sobre seu projeto, necessidades e objetivos..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Informações de <span className="gradient-text">Contato</span>
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Entre em contato conosco através dos canais abaixo ou agende uma reunião.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                        <IconComponent className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{info.title}</h3>
                        <p className="text-white/70">{info.value}</p>
                      </div>
                      <ArrowRight className="text-white/40 group-hover:text-accent ml-auto transition-all duration-300" size={20} />
                    </motion.a>
                  )
                })}
              </div>

              {/* Business Hours */}
              <div className="card space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-accent" size={24} />
                  <h3 className="text-xl font-semibold text-white">Horário de Atendimento</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                      <span className="text-white/70">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card space-y-4">
                <h3 className="text-xl font-semibold text-white">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 ${social.color}`}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher a <span className="gradient-text">Codenow</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Compromisso com excelência e resultados excepcionais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos transformar 
              sua empresa com soluções digitais inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Agendar Consulta Gratuita
                <Calendar className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/servicos" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContatoPage