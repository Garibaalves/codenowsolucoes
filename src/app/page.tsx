'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Bot, 
  Cog, 
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

const HomePage = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Sistemas robustos e escaláveis para otimizar seus processos empresariais.',
      href: '/servicos/desenvolvimento-sistemas'
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento de Aplicativos',
      description: 'Apps nativos e híbridos para iOS e Android com foco na experiência do usuário.',
      href: '/servicos/desenvolvimento-aplicativos'
    },
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Sites responsivos, rápidos e otimizados para conversão e SEO.',
      href: '/servicos/desenvolvimento-sites'
    },
    {
      icon: Bot,
      title: 'Gestão de Agentes de IA',
      description: 'Implementação e gestão de inteligência artificial para automatizar processos.',
      href: '/servicos/gestao-agentes-ia'
    },
    {
      icon: Cog,
      title: 'Desenvolvimento de RPA',
      description: 'Automação robótica de processos para aumentar eficiência e reduzir custos.',
      href: '/servicos/desenvolvimento-rpa'
    },
    {
      icon: Users,
      title: 'Consultoria em Sistemas',
      description: 'Consultoria especializada em sistemas e automação de processos empresariais.',
      href: '/servicos/consultoria-sistemas'
    }
  ]

  const stats = [
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '24/7', label: 'Suporte Técnico' }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento da Produtividade',
      description: 'Soluções que otimizam processos e aumentam a eficiência operacional.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Implementamos as melhores práticas de segurança em todos os projetos.'
    },
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as tecnologias mais modernas e atualizadas do mercado.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Transforme seu negócio com
                  <span className="gradient-text block">
                    tecnologia de ponta
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-white/80 leading-relaxed max-w-2xl"
                >
                  Especialistas em desenvolvimento de sistemas, aplicativos, sites, IA, RPA e automação. 
                  Criamos soluções digitais que impulsionam o crescimento do seu negócio.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de sistema." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/servicos" className="btn-secondary inline-flex items-center justify-center">
                  Conhecer Serviços
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 floating-animation">
                <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-primary-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                      <Code className="text-white" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Codenow</h3>
                    <p className="text-white/70">Soluções Digitais</p>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia para transformar e otimizar seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="card group cursor-pointer"
                >
                  <Link href={service.href} className="block">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <IconComponent className="text-accent" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent group-hover:text-accent-600 transition-colors">
                      <span className="text-sm font-medium">Saiba mais</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Por que escolher a <span className="gradient-text">Codenow</span>?
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  Somos especialistas em transformar desafios tecnológicos em oportunidades de crescimento para seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card text-center p-8">
                    <CheckCircle className="text-accent mx-auto mb-4" size={32} />
                    <h4 className="text-lg font-semibold text-white mb-2">Qualidade</h4>
                    <p className="text-white/70 text-sm">Código limpo e documentado</p>
                  </div>
                  <div className="card text-center p-8">
                    <Star className="text-accent mx-auto mb-4" size={32} />
                    <h4 className="text-lg font-semibold text-white mb-2">Excelência</h4>
                    <p className="text-white/70 text-sm">Superamos expectativas</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card text-center p-8">
                    <Users className="text-accent mx-auto mb-4" size={32} />
                    <h4 className="text-lg font-semibold text-white mb-2">Suporte</h4>
                    <p className="text-white/70 text-sm">Atendimento personalizado</p>
                  </div>
                  <div className="card text-center p-8">
                    <Zap className="text-accent mx-auto mb-4" size={32} />
                    <h4 className="text-lg font-semibold text-white mb-2">Agilidade</h4>
                    <p className="text-white/70 text-sm">Entregas no prazo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar o próximo nível com tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de falar com um especialista sobre os serviços da Codenow." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/erp-codeerp" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Conhecer ERP CodeERP
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage