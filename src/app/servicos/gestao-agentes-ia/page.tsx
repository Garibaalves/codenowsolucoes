'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, 
  Brain, 
  MessageSquare, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Cpu,
  Database,
  Settings,
  BarChart3,
  Headphones,
  ShoppingCart,
  FileText,
  Calendar
} from 'lucide-react'

const GestaoAgentesIAPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Avançada',
      description: 'Agentes inteligentes com processamento de linguagem natural e aprendizado contínuo.'
    },
    {
      icon: MessageSquare,
      title: 'Conversas Naturais',
      description: 'Interações humanizadas que proporcionam experiências autênticas aos usuários.'
    },
    {
      icon: Clock,
      title: 'Disponibilidade 24/7',
      description: 'Atendimento ininterrupto, garantindo suporte aos clientes a qualquer momento.'
    },
    {
      icon: TrendingUp,
      title: 'Aprendizado Contínuo',
      description: 'Agentes que evoluem constantemente com base nas interações e feedbacks.'
    },
    {
      icon: Shield,
      title: 'Segurança de Dados',
      description: 'Proteção avançada de informações com criptografia e compliance LGPD.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Detalhado',
      description: 'Relatórios completos sobre performance, satisfação e métricas de conversão.'
    }
  ]

  const agentTypes = [
    {
      icon: Headphones,
      title: 'Atendimento ao Cliente',
      description: 'Agentes especializados em suporte, dúvidas frequentes e resolução de problemas.',
      features: ['Suporte técnico', 'FAQ inteligente', 'Escalação humana', 'Histórico de conversas'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: ShoppingCart,
      title: 'Vendas e E-commerce',
      description: 'Assistentes de vendas que qualificam leads e auxiliam no processo de compra.',
      features: ['Qualificação de leads', 'Recomendações personalizadas', 'Carrinho abandonado', 'Upsell e cross-sell'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calendar,
      title: 'Agendamentos',
      description: 'Automatização completa de agendamentos com integração a calendários.',
      features: ['Agenda inteligente', 'Confirmações automáticas', 'Reagendamentos', 'Lembretes por WhatsApp'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Geração de Conteúdo',
      description: 'Criação automatizada de textos, relatórios e materiais personalizados.',
      features: ['Copywriting', 'Relatórios automáticos', 'E-mail marketing', 'Descrições de produtos'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const platforms = [
    { name: 'WhatsApp Business', integration: 'API Oficial' },
    { name: 'Telegram', integration: 'Bot API' },
    { name: 'Facebook Messenger', integration: 'Graph API' },
    { name: 'Instagram Direct', integration: 'Business API' },
    { name: 'Site/Chat Widget', integration: 'Embed Nativo' },
    { name: 'Slack', integration: 'Slack API' },
    { name: 'Discord', integration: 'Discord.js' },
    { name: 'Microsoft Teams', integration: 'Bot Framework' }
  ]

  const technologies = [
    { name: 'OpenAI GPT-4', category: 'LLM' },
    { name: 'Claude 3', category: 'LLM' },
    { name: 'Gemini Pro', category: 'LLM' },
    { name: 'LangChain', category: 'Framework' },
    { name: 'Vector Database', category: 'Storage' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'Redis', category: 'Cache' }
  ]

  const process = [
    {
      step: 1,
      title: 'Análise e Estratégia',
      description: 'Mapeamento dos processos atuais e definição da estratégia de implementação da IA.',
      duration: '1-2 semanas'
    },
    {
      step: 2,
      title: 'Design Conversacional',
      description: 'Criação dos fluxos de conversa, personalidade do agente e cenários de uso.',
      duration: '1-2 semanas'
    },
    {
      step: 3,
      title: 'Desenvolvimento e Treinamento',
      description: 'Programação do agente, treinamento com dados específicos e integração com sistemas.',
      duration: '3-4 semanas'
    },
    {
      step: 4,
      title: 'Testes e Otimização',
      description: 'Testes extensivos, ajustes de performance e validação da qualidade das respostas.',
      duration: '1-2 semanas'
    },
    {
      step: 5,
      title: 'Deploy e Monitoramento',
      description: 'Implementação em produção e monitoramento contínuo com melhorias iterativas.',
      duration: '1 semana + ongoing'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Redução de Tempo',
      description: 'Agentes IA reduzem tempo de resposta em até 90%',
      stat: '90%'
    },
    {
      icon: Users,
      title: 'Satisfação do Cliente',
      description: 'Melhoria na satisfação do cliente em até 85%',
      stat: '85%'
    },
    {
      icon: TrendingUp,
      title: 'Aumento nas Vendas',
      description: 'Conversões podem aumentar em até 300%',
      stat: '300%'
    },
    {
      icon: BarChart3,
      title: 'Redução de Custos',
      description: 'Economia operacional de até 60% em atendimento',
      stat: '60%'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Assistente de vendas que recomenda produtos, tira dúvidas e finaliza compras.',
      results: ['40% mais conversões', '60% menos carrinho abandonado', '24/7 atendimento']
    },
    {
      title: 'Clínicas e Consultórios',
      description: 'Agendamento automático, confirmações e lembretes de consultas.',
      results: ['80% menos no-shows', '50% redução tempo administrativo', 'Agenda otimizada']
    },
    {
      title: 'Imobiliárias',
      description: 'Qualificação de leads, agendamento de visitas e informações sobre imóveis.',
      results: ['3x mais leads qualificados', '70% mais visitas agendadas', 'Vendas 24/7']
    },
    {
      title: 'Restaurantes',
      description: 'Pedidos automatizados, reservas e atendimento ao cliente via WhatsApp.',
      results: ['50% mais pedidos', '30% aumento ticket médio', 'Zero erro de pedido']
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
              <Bot className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Gestão de <span className="gradient-text">Agentes de IA</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Revolucione seu atendimento com agentes de IA inteligentes que automatizam processos, 
              qualificam leads e proporcionam experiências excepcionais aos seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma demonstração de gestão de agentes IA." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Solicitar Demonstração
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

      {/* Agent Types Section */}
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
              Tipos de <span className="gradient-text">Agentes IA</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos agentes especializados para diferentes necessidades do seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {agentTypes.map((type, index) => {
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
              Características dos Nossos <span className="gradient-text">Agentes</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tecnologia de ponta para agentes inteligentes que realmente fazem a diferença
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
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-purple-400" size={32} />
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
              <span className="gradient-text">Plataformas</span> Integradas
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Nossos agentes funcionam em todas as principais plataformas de comunicação
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center space-y-2 p-4"
              >
                <div className="text-lg font-semibold text-white">{platform.name}</div>
                <div className="text-sm text-accent">{platform.integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados reais obtidos por nossos clientes com agentes de IA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{useCase.description}</p>
                </div>
                <div>
                  <h4 className="text-accent font-medium mb-3">Resultados:</h4>
                  <div className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                        {result}
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
              <span className="gradient-text">Tecnologias</span> de IA
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stack tecnológico de última geração para agentes inteligentes e eficientes
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
              <span className="gradient-text">Resultados</span> Comprovados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Impacto real dos agentes de IA no seu negócio
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
              Metodologia estruturada para implementação de agentes de IA eficazes
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
              Revolucione seu atendimento com IA!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como nossos agentes de IA 
              podem transformar a experiência dos seus clientes e impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de agendar uma demonstração gratuita de gestão de agentes IA." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Agendar Demonstração Gratuita
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



export default GestaoAgentesIAPage