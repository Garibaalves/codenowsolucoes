'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Bot, 
  Cog, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react'

const ServicosPage = () => {
  const services = [
    {
      id: 'desenvolvimento-sistemas',
      icon: Code2,
      title: 'Desenvolvimento de Sistemas',
      description: 'Sistemas personalizados e escaláveis para otimizar processos empresariais e aumentar a produtividade.',
      features: ['Arquitetura robusta', 'Integração com APIs', 'Interface intuitiva', 'Segurança avançada'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'desenvolvimento-aplicativos',
      icon: Smartphone,
      title: 'Desenvolvimento de Aplicativos',
      description: 'Apps nativos e híbridos para iOS e Android, com foco na experiência do usuário e performance.',
      features: ['Design responsivo', 'Performance otimizada', 'Multiplataforma', 'Push notifications'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'desenvolvimento-sites',
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Sites modernos, responsivos e otimizados para SEO, que convertem visitantes em clientes.',
      features: ['SEO otimizado', 'Design responsivo', 'Carregamento rápido', 'CMS integrado'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'gestao-agentes-ia',
      icon: Bot,
      title: 'Gestão de Agentes de IA',
      description: 'Implementação e gestão de agentes inteligentes para automatizar atendimento e processos.',
      features: ['IA conversacional', 'Aprendizado contínuo', 'Integração omnichannel', 'Analytics avançado'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'desenvolvimento-rpa',
      icon: Cog,
      title: 'Desenvolvimento de RPA',
      description: 'Automação robótica de processos para eliminar tarefas repetitivas e reduzir custos operacionais.',
      features: ['Automação inteligente', 'Redução de custos', 'Maior precisão', 'Escalabilidade'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'consultoria-sistemas',
      icon: Users,
      title: 'Consultoria em Sistemas',
      description: 'Consultoria especializada em arquitetura de sistemas e automação de processos empresariais.',
      features: ['Análise detalhada', 'Estratégia personalizada', 'Implementação guiada', 'Suporte contínuo'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Agilidade na Entrega',
      description: 'Metodologias ágeis para entregas rápidas e eficientes'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Implementação das melhores práticas de segurança'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade',
      description: 'Soluções que crescem junto com seu negócio'
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Código limpo e documentação completa'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Análise e Planejamento',
      description: 'Entendemos suas necessidades e definimos a melhor estratégia'
    },
    {
      step: '02',
      title: 'Desenvolvimento',
      description: 'Criamos a solução utilizando as melhores tecnologias'
    },
    {
      step: '03',
      title: 'Testes e Validação',
      description: 'Garantimos qualidade através de testes rigorosos'
    },
    {
      step: '04',
      title: 'Entrega e Suporte',
      description: 'Implementamos e oferecemos suporte contínuo'
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
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Soluções tecnológicas completas para transformar seu negócio e impulsionar seu crescimento. 
              Da concepção à implementação, estamos com você em cada etapa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Soluções <span className="gradient-text">Completas</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos para atender todas as necessidades do seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={`/servicos/${service.id}`}>
                    <div className="card h-full space-y-6 cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/20">
                      {/* Icon with gradient background */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-white/60">
                              <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        {/* CTA */}
                        <div className="flex items-center text-accent font-medium group-hover:text-accent-400 transition-colors duration-300">
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Combinamos experiência, tecnologia de ponta e metodologias ágeis para entregar resultados excepcionais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nosso <span className="gradient-text">Processo</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Uma metodologia comprovada que garante a entrega de soluções de alta qualidade no prazo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/30 z-0"></div>
                )}
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Entre em contato conosco e descubra como nossas soluções podem impulsionar 
              o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para os serviços da CodeNow." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/quem-somos" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Conheça Nossa Equipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



export default ServicosPage