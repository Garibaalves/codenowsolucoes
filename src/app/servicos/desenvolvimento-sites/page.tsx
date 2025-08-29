'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Code,
  Palette,
  BarChart3,
  Users,
  ShoppingCart,
  FileText,
  Building,
  Briefcase
} from 'lucide-react'

const DesenvolvimentoSitesPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Design Responsivo',
      description: 'Sites que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.'
    },
    {
      icon: Search,
      title: 'SEO Otimizado',
      description: 'Estrutura e conteúdo otimizados para melhor posicionamento nos buscadores.'
    },
    {
      icon: Zap,
      title: 'Performance Máxima',
      description: 'Carregamento ultra-rápido com otimização de imagens e código limpo.'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção contra ataques, SSL, backups automáticos e atualizações de segurança.'
    },
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Desenvolvimento seguindo as melhores práticas e padrões da indústria.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Integrado',
      description: 'Monitoramento completo de visitantes, conversões e performance do site.'
    }
  ]

  const siteTypes = [
    {
      icon: Building,
      title: 'Sites Institucionais',
      description: 'Apresentação profissional da sua empresa com credibilidade e autoridade.',
      features: ['Apresentação da empresa', 'Portfólio de serviços', 'Formulário de contato', 'SEO otimizado'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com carrinho, pagamentos e gestão de produtos.',
      features: ['Catálogo de produtos', 'Carrinho de compras', 'Gateway de pagamento', 'Painel administrativo'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Landing Pages',
      description: 'Páginas de conversão focadas em capturar leads e gerar vendas.',
      features: ['Design persuasivo', 'Formulários otimizados', 'A/B Testing', 'Integração com CRM'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Briefcase,
      title: 'Portfólios',
      description: 'Showcases profissionais para apresentar trabalhos e conquistar clientes.',
      features: ['Galeria de projetos', 'Depoimentos', 'Currículo online', 'Formulário de orçamento'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const technologies = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Strapi', category: 'Headless CMS' },
    { name: 'Vercel', category: 'Hosting' }
  ]

  const process = [
    {
      step: 1,
      title: 'Briefing e Planejamento',
      description: 'Entendimento dos objetivos, público-alvo e definição da arquitetura do site.',
      duration: '3-5 dias'
    },
    {
      step: 2,
      title: 'Design e Prototipação',
      description: 'Criação do layout, wireframes e protótipos interativos para aprovação.',
      duration: '1-2 semanas'
    },
    {
      step: 3,
      title: 'Desenvolvimento',
      description: 'Codificação do site seguindo as melhores práticas de performance e SEO.',
      duration: '2-4 semanas'
    },
    {
      step: 4,
      title: 'Testes e Otimização',
      description: 'Testes de funcionalidade, responsividade e otimização de velocidade.',
      duration: '3-5 dias'
    },
    {
      step: 5,
      title: 'Lançamento e Suporte',
      description: 'Publicação do site e suporte contínuo com manutenção e atualizações.',
      duration: '1 dia + ongoing'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Mais Credibilidade',
      description: 'Sites profissionais aumentam a confiança dos clientes em 75%',
      stat: '75%'
    },
    {
      icon: Search,
      title: 'Visibilidade Online',
      description: 'SEO otimizado pode aumentar o tráfego orgânico em até 200%',
      stat: '200%'
    },
    {
      icon: BarChart3,
      title: 'Geração de Leads',
      description: 'Sites otimizados geram 55% mais visitantes qualificados',
      stat: '55%'
    },
    {
      icon: Zap,
      title: 'Conversão Rápida',
      description: 'Sites rápidos têm taxa de conversão 2.5x maior',
      stat: '2.5x'
    }
  ]

  const seoFeatures = [
    'Estrutura HTML5 semântica',
    'Meta tags otimizadas',
    'URLs amigáveis',
    'Sitemap XML automático',
    'Schema markup',
    'Otimização de imagens',
    'Core Web Vitals otimizados',
    'Integração Google Analytics'
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
              <Globe className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Desenvolvimento de <span className="gradient-text">Sites</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Criamos sites modernos, responsivos e otimizados que fortalecem sua presença digital 
              e convertem visitantes em clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de site." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/servicos" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ver Todos os Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site Types Section */}
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
              Tipos de <span className="gradient-text">Sites</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos sites personalizados para diferentes necessidades e objetivos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="card space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{type.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{type.description}</p>
                  <div>
                    <h4 className="text-accent font-medium mb-3">Funcionalidades:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Características dos Nossos <span className="gradient-text">Sites</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Funcionalidades essenciais para um site de sucesso no mercado digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="card text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-orange-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="gradient-text">SEO</span> Otimizado
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  Todos os nossos sites são desenvolvidos seguindo as melhores práticas de SEO 
                  para garantir máxima visibilidade nos buscadores.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {seoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-white/70"
                  >
                    <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card space-y-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Resultados Comprovados</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Aumento no tráfego orgânico</span>
                  <span className="text-orange-400 font-bold">+150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Melhoria no ranking Google</span>
                  <span className="text-orange-400 font-bold">Top 3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Tempo de carregamento</span>
                  <span className="text-orange-400 font-bold">2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Score PageSpeed</span>
                  <span className="text-orange-400 font-bold">95+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              <span className="gradient-text">Tecnologias</span> Utilizadas
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stack tecnológico moderno para sites rápidos, seguros e escaláveis
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center space-y-2 p-4"
              >
                <div className="text-lg font-semibold text-white">{tech.name}</div>
                <div className="text-sm text-accent">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="gradient-text">Vantagens</span> de um Site Profissional
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Por que investir em um site profissional para seu negócio
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
                  className="card text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-accent" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-accent">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nosso <span className="gradient-text">Processo</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Metodologia estruturada para desenvolvimento de sites de sucesso
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
              >
                <div className="flex-1">
                  <div className="card space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        <p className="text-accent text-sm">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Pronto para ter um site que converte?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como um site profissional pode 
              transformar sua presença digital e alavancar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento gratuito para desenvolvimento de site." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/servicos" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver Outros Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



export default DesenvolvimentoSitesPage