'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Bell,
  Shield,
  Download,
  Star,
  TrendingUp,
  Palette
} from 'lucide-react'

const DesenvolvimentoAplicativosPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Nativo e Híbrido',
      description: 'Desenvolvemos apps nativos para iOS/Android e híbridos com React Native e Flutter.'
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description: 'Interfaces intuitivas seguindo as diretrizes de Material Design e Human Interface.'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Apps rápidos e responsivos com otimização de código e recursos.'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Sistema completo de notificações push para engajamento dos usuários.'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Implementação de autenticação segura, criptografia e proteção de dados.'
    },
    {
      icon: Download,
      title: 'Offline First',
      description: 'Funcionalidades offline com sincronização automática quando conectado.'
    }
  ]

  const platforms = [
    {
      name: 'iOS',
      icon: Smartphone,
      description: 'Apps nativos para iPhone e iPad usando Swift e Objective-C',
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Android',
      icon: Tablet,
      description: 'Apps nativos para dispositivos Android usando Kotlin e Java',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Cross-Platform',
      icon: Monitor,
      description: 'Apps híbridos com React Native e Flutter para ambas as plataformas',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Swift', category: 'iOS Native' },
    { name: 'Kotlin', category: 'Android Native' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Node.js', category: 'API' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS Mobile', category: 'Cloud' }
  ]

  const appTypes = [
    {
      title: 'Apps Corporativos',
      description: 'Soluções internas para gestão, produtividade e comunicação empresarial.',
      examples: ['CRM Mobile', 'Gestão de Vendas', 'Controle de Ponto', 'Relatórios Gerenciais']
    },
    {
      title: 'E-commerce Mobile',
      description: 'Lojas virtuais completas com carrinho, pagamentos e gestão de pedidos.',
      examples: ['Marketplace', 'Loja Virtual', 'Delivery', 'Catálogo Digital']
    },
    {
      title: 'Apps de Serviços',
      description: 'Plataformas de serviços sob demanda com geolocalização e agendamentos.',
      examples: ['Agendamentos', 'Delivery', 'Transporte', 'Serviços Domésticos']
    },
    {
      title: 'Apps Educacionais',
      description: 'Plataformas de ensino com conteúdo interativo e gamificação.',
      examples: ['E-learning', 'Cursos Online', 'Treinamentos', 'Avaliações']
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Descoberta e Planejamento',
      description: 'Análise do público-alvo, definição de funcionalidades e arquitetura da informação.',
      duration: '1-2 semanas'
    },
    {
      step: 2,
      title: 'UX/UI Design',
      description: 'Criação de wireframes, protótipos interativos e design das interfaces.',
      duration: '2-3 semanas'
    },
    {
      step: 3,
      title: 'Desenvolvimento',
      description: 'Codificação do app seguindo as melhores práticas de cada plataforma.',
      duration: '6-10 semanas'
    },
    {
      step: 4,
      title: 'Testes e QA',
      description: 'Testes em dispositivos reais, correção de bugs e otimização de performance.',
      duration: '2-3 semanas'
    },
    {
      step: 5,
      title: 'Publicação e Suporte',
      description: 'Publicação nas lojas e suporte contínuo com atualizações.',
      duration: '1 semana + ongoing'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Maior Engajamento',
      description: 'Apps móveis geram 3x mais engajamento que sites mobile',
      stat: '3x'
    },
    {
      icon: TrendingUp,
      title: 'Aumento nas Vendas',
      description: 'Conversões mobile são 160% maiores em apps nativos',
      stat: '160%'
    },
    {
      icon: Star,
      title: 'Melhor Experiência',
      description: 'Apps oferecem experiência 5x mais rápida que sites',
      stat: '5x'
    },
    {
      icon: Bell,
      title: 'Retenção de Usuários',
      description: 'Push notifications aumentam retenção em até 90%',
      stat: '90%'
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
              <Smartphone className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Desenvolvimento de <span className="gradient-text">Aplicativos</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Criamos aplicativos móveis nativos e híbridos que conectam sua empresa aos clientes, 
              oferecendo experiências excepcionais em iOS e Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de aplicativo móvel." 
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

      {/* Platforms Section */}
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
              <span className="gradient-text">Plataformas</span> Suportadas
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos para todas as principais plataformas móveis do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="card text-center space-y-6"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center mx-auto`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{platform.name}</h3>
                    <p className="text-white/70 leading-relaxed">{platform.description}</p>
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
              Características dos Nossos <span className="gradient-text">Apps</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Funcionalidades avançadas que garantem a melhor experiência para seus usuários
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

      {/* App Types Section */}
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
              Tipos de <span className="gradient-text">Aplicativos</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos apps para diversos segmentos e necessidades empresariais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{type.description}</p>
                </div>
                <div>
                  <h4 className="text-accent font-medium mb-3">Exemplos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Stack tecnológico moderno para desenvolvimento de apps de alta performance
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
              <span className="gradient-text">Vantagens</span> dos Apps Móveis
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Por que investir em um aplicativo móvel para seu negócio
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
              Metodologia estruturada para desenvolvimento de apps de sucesso
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
              Transforme sua ideia em um app de sucesso!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como um aplicativo móvel pode 
              revolucionar a forma como seus clientes interagem com seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma consultoria gratuita para desenvolvimento de aplicativo móvel." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicitar Consultoria Gratuita
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



export default DesenvolvimentoAplicativosPage