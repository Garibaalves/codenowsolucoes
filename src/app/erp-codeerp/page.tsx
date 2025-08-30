'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Factory, 
  BarChart3, 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  BookCheck,
  Cloud,
  Smartphone,
  Brain,
  Database,
  Settings,
  FileText,
  Calendar,
  Smile,
  LightbulbIcon,
  Truck,
  CreditCard,
  PieChart,
  Target,
  BookOpenText,
  Clock,
  Award,
  Lightbulb,
  Workflow,
  MessageSquare,
  RefreshCw,
  Globe,
  Lock,
  Cpu,
  BarChart,
  LineChart,
  Activity
} from 'lucide-react'

const ERPCodeERPPage = () => {
  const features = [
    {
      icon: Factory,
      title: 'Gestão de desvios',
      description: 'Controle completo de desvios de segurança, registro, avaliação e tratativa.',
      benefits: ['Registro de desvio na palma da mão', 'Controle de acesso', 'Notificação imediata', 'Redução e prevenção de acidentes de trabalho']
    },
    {
      icon: LightbulbIcon,
      title: 'Controle de Kaizen',
      description: 'Possibilita o registro, avaliação e votação para premiação de funcionários.',
      benefits: ['Controle total de kaizen', 'Permite avaliação para multiplicação', 'Sistema de votação integrado', 'Todos podem cadastrar']
    },
    {
      icon: Smile,
      title: 'Acompanhamento emocional',
      description: 'Sistema para capturar o estado emocional do colaborador permitindo com notificação para desvios',
      benefits: ['Registor no momento do login', 'Lider imediáto deve tratar', 'Notificações para desvios', 'Geração de KPIs de alta relanvância']
    },
    {
      icon: Users,
      title: 'Controle de efetivo',
      description: 'Gestão completa de efetivo, equipes, letras e turnos.',
      benefits: ['Controle total do efetivo', 'Separação por equipe', 'Separação por turno', 'Liberação de acessos']
    },
    {
      icon: BookOpenText,
      title: 'Gerenciamento de Procedimentos',
      description: 'Organize, controle e consulte todos os procedimentos da sua empresa em um só lugar, garantindo padronização e fácil acesso às informações.',
      benefits: ['Todos os procedimentos reunidos em uma única plataforma', 'Mantém processos atualizados', 'Acesso rápido e seguro a qualquer procedimento', 'Garante versões atualizadas']
    },
    {
      icon: BookCheck,
      title: 'Construtor de Check',
      description: 'Crie e gerencie checklists personalizados para inspeções, auditorias e rotinas operacionais, com controle de não conformidades em tempo real.',
      benefits: ['Construa checklists adaptados a qualquer finalidade', 'Realize inspeções e registros de forma rápida e digital', 'Identifique, registre e acompanhe desvios facilmente', 'Acompanhe resultados e ações']
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Previsão de Acidentes',
      description: 'IA analisa histórico de desvios e assidentes, e retorna uma probabilidade de acontecer um acidente com categorização.',
      impact: 'Redução considerável em acidentes'
    },
    {
      icon: Zap,
      title: 'Otimização de Produção',
      description: 'Algoritmos inteligentes otimizam sequenciamento de produção e alocação de recursos.',
      impact: 'Aumento de 25% na eficiência produtiva'
    },
    {
      icon: MessageSquare,
      title: 'Assistente Virtual',
      description: 'Chatbot integrado para consultas rápidas, relatórios e execução de tarefas via comando de voz.',
      impact: 'Redução de 40% no tempo de consultas'
    },
    {
      icon: Target,
      title: 'Análise dos dados de segurança',
      description: 'Identifica padrões e anomalias para prevenir acidentes antes que aconteçam.',
      impact: 'Redução de 50% em paradas não programadas'
    },
    {
      icon: Workflow,
      title: 'Automação Inteligente',
      description: 'RPA com IA para automatizar processos complexos e tomada de decisões rotineiras.',
      impact: 'Automação de 70% das tarefas repetitivas'
    },
    {
      icon: PieChart,
      title: 'Insights Automáticos',
      description: 'IA gera insights e recomendações automáticas baseadas nos dados da empresa.',
      impact: 'Melhoria de 35% na tomada de decisões'
    }
  ]

  const modules = [
    {
      name: 'Controle de desvios',
      icon: TrendingUp,
      features: ['Registro', 'Avaliação', 'Tratativa', 'Tomada de decisão'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Gestão de almoxarifado e requisições',
      icon: Package,
      features: ['Colaborador requisita', 'Lider aprova', 'Gera ficha de EPI', 'Controle do estoque'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Qualidade e Conformidade',
      icon: Shield,
      features: ['Controle de qualidade', 'Certificações ISO', 'Auditorias internas', 'Não conformidades'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Manutenção Preventiva',
      icon: Settings,
      features: ['Planos de manutenção', 'Controle de equipamentos', 'Histórico de intervenções', 'Indicadores de performance'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Redução de acidentes e incidentes',
      description: 'Colaboradores mais seguro para executar as atividades',
      stat: 'Vida'
    },
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      description: 'Economia operacional de até 35% com otimizações',
      stat: '35%'
    },
    {
      icon: Clock,
      title: 'Tempo de Implementação',
      description: 'Go-live em até 60 dias com migração completa',
      stat: '60 dias'
    },
    {
      icon: Award,
      title: 'Liderança',
      description: 'Liderança mais ativa e participativa',
      stat: 'Evolução'
    }
  ]

  const integrations = [
    {
      category: 'E-commerce',
      platforms: ['Shopify', 'WooCommerce', 'Magento', 'Mercado Livre', 'Amazon'],
      icon: Globe
    },
    {
      category: 'Financeiro',
      platforms: ['Bancos (Open Banking)', 'PayPal', 'PagSeguro', 'Cielo', 'Stone'],
      icon: CreditCard
    },
    {
      category: 'Logística',
      platforms: ['Correios', 'Transportadoras', 'Melhor Envio', 'Kangu', 'Frenet'],
      icon: Truck
    },
    {
      category: 'Contabilidade',
      platforms: ['Domínio Sistemas', 'Alterdata', 'Thomson Reuters', 'Sage', 'TOTVS'],
      icon: FileText
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
              <Factory className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="gradient-text">CodeERP</span> Industrial
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              O ERP mais avançado para indústrias, com Inteligência Artificial integrada 
              para otimizar sua produção, reduzir custos e acelerar o crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma demonstração do CodeERP." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="#funcionalidades" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ver Funcionalidades
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="gradient-text">Funcionalidades</span> Principais
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Módulos integrados para gestão completa da sua indústria
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
                  whileHover={{ y: -10 }}
                  className="card space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4">{feature.description}</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-medium mb-3">Benefícios:</h4>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                          {benefit}
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

      {/* AI Features Section */}
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
              Inteligência Artificial <span className="gradient-text">Integrada</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              IA avançada para otimização automática e insights inteligentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="card space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4">{feature.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-accent font-medium text-sm">{feature.impact}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
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
              <span className="gradient-text">Módulos</span> Especializados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluções específicas para cada área da sua indústria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{module.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
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
              <span className="gradient-text">Resultados</span> Comprovados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Impacto real no desempenho da sua indústria
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
              Transforme sua indústria hoje mesmo!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Agende uma demonstração gratuita do CodeERP e descubra como a IA pode 
              revolucionar sua operação industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de agendar uma demonstração gratuita do CodeERP." 
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



export default ERPCodeERPPage