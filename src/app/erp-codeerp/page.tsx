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
  Cloud,
  Smartphone,
  Brain,
  Database,
  Settings,
  FileText,
  Calendar,
  Truck,
  CreditCard,
  PieChart,
  Target,
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
      title: 'Gestão de Produção',
      description: 'Controle completo do chão de fábrica com planejamento, execução e monitoramento em tempo real.',
      benefits: ['Planejamento de produção otimizado', 'Controle de qualidade integrado', 'Rastreabilidade completa', 'Redução de desperdícios']
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Gestão inteligente de inventário com previsão de demanda e reposição automática.',
      benefits: ['Controle de lotes e validades', 'Inventário em tempo real', 'Previsão de demanda com IA', 'Otimização de compras']
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Módulo financeiro completo com fluxo de caixa, contas a pagar/receber e análises.',
      benefits: ['Fluxo de caixa projetado', 'Conciliação bancária automática', 'Relatórios gerenciais', 'Controle de custos']
    },
    {
      icon: Users,
      title: 'Recursos Humanos',
      description: 'Gestão completa de pessoas com folha de pagamento, ponto eletrônico e avaliações.',
      benefits: ['Folha de pagamento automatizada', 'Controle de ponto biométrico', 'Gestão de benefícios', 'Avaliação de desempenho']
    },
    {
      icon: Truck,
      title: 'Logística e Distribuição',
      description: 'Otimização de rotas, controle de frota e gestão de entregas com rastreamento.',
      benefits: ['Otimização de rotas com IA', 'Rastreamento em tempo real', 'Gestão de transportadoras', 'Controle de custos logísticos']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Dashboards interativos e relatórios avançados para tomada de decisão estratégica.',
      benefits: ['Dashboards em tempo real', 'Relatórios personalizáveis', 'Análises preditivas', 'KPIs automatizados']
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Previsão de Demanda',
      description: 'IA analisa histórico de vendas, sazonalidade e tendências de mercado para prever demanda futura.',
      impact: 'Redução de até 30% no estoque parado'
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
      title: 'Análise Preditiva',
      description: 'Identifica padrões e anomalias para prevenir problemas antes que aconteçam.',
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
      name: 'Vendas e CRM',
      icon: TrendingUp,
      features: ['Pipeline de vendas', 'Gestão de clientes', 'Propostas automáticas', 'Análise de performance'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Compras e Fornecedores',
      icon: Package,
      features: ['Cotações automáticas', 'Gestão de fornecedores', 'Controle de qualidade', 'Análise de custos'],
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
      title: 'Aumento de Produtividade',
      description: 'Melhoria média de 40% na eficiência operacional',
      stat: '40%'
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
      description: 'Go-live em até 90 dias com migração completa',
      stat: '90 dias'
    },
    {
      icon: Award,
      title: 'ROI Garantido',
      description: 'Retorno sobre investimento em até 18 meses',
      stat: '18 meses'
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

  const industries = [
    {
      name: 'Metalurgia',
      challenges: ['Controle de ligas', 'Rastreabilidade de lotes', 'Gestão de fornos'],
      solutions: ['Controle de composição química', 'Rastreamento completo', 'Otimização térmica'],
      results: '45% redução no desperdício de material'
    },
    {
      name: 'Alimentícia',
      challenges: ['Controle de validade', 'Rastreabilidade sanitária', 'Gestão de receitas'],
      solutions: ['FIFO automático', 'Rastreamento sanitário', 'Controle de formulações'],
      results: '60% melhoria na conformidade sanitária'
    },
    {
      name: 'Química',
      challenges: ['Controle de fórmulas', 'Gestão de resíduos', 'Segurança operacional'],
      solutions: ['Controle de formulações', 'Gestão ambiental', 'Protocolos de segurança'],
      results: '50% redução em não conformidades'
    },
    {
      name: 'Têxtil',
      challenges: ['Controle de cores', 'Gestão de coleções', 'Planejamento sazonal'],
      solutions: ['Gestão de cores e padrões', 'Controle de coleções', 'Previsão de demanda'],
      results: '35% melhoria no giro de estoque'
    }
  ]

  const testimonials = [
    {
      company: 'Metalúrgica São Paulo',
      industry: 'Metalurgia',
      testimonial: 'O CodeERP revolucionou nossa operação. A integração com IA nos permitiu otimizar a produção e reduzir custos significativamente.',
      results: ['40% aumento na produtividade', '30% redução no desperdício', 'ROI de 280% em 2 anos'],
      executive: 'Carlos Silva, Diretor Industrial'
    },
    {
      company: 'Alimentos Premium',
      industry: 'Alimentícia',
      testimonial: 'A rastreabilidade completa e o controle de qualidade do CodeERP nos deram total conformidade com as normas sanitárias.',
      results: ['100% conformidade sanitária', '25% redução no tempo de produção', '50% melhoria na qualidade'],
      executive: 'Ana Costa, Gerente de Qualidade'
    },
    {
      company: 'Química Industrial',
      industry: 'Química',
      testimonial: 'O módulo de segurança e gestão ambiental do CodeERP nos ajudou a alcançar certificações internacionais.',
      results: ['Zero acidentes em 2 anos', 'Certificação ISO 14001', '45% redução em resíduos'],
      executive: 'Roberto Lima, Diretor de Operações'
    }
  ]

  const pricing = [
    {
      plan: 'Starter',
      price: 'R$ 2.500',
      period: '/mês',
      description: 'Ideal para pequenas indústrias',
      features: [
        'Até 50 usuários',
        'Módulos básicos (Vendas, Estoque, Financeiro)',
        'Suporte por email',
        'Backup diário',
        'Relatórios padrão'
      ],
      highlight: false
    },
    {
      plan: 'Professional',
      price: 'R$ 4.500',
      period: '/mês',
      description: 'Para médias indústrias em crescimento',
      features: [
        'Até 150 usuários',
        'Todos os módulos inclusos',
        'IA e automação básica',
        'Suporte prioritário',
        'Dashboards personalizados',
        'Integrações ilimitadas'
      ],
      highlight: true
    },
    {
      plan: 'Enterprise',
      price: 'Sob consulta',
      period: '',
      description: 'Solução completa para grandes indústrias',
      features: [
        'Usuários ilimitados',
        'IA avançada e machine learning',
        'Customizações específicas',
        'Suporte 24/7',
        'Consultoria especializada',
        'SLA garantido'
      ],
      highlight: false
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

      {/* Industries Section */}
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
              <span className="gradient-text">Setores</span> Especializados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluções adaptadas para diferentes segmentos industriais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card space-y-6"
              >
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-red-400 font-medium mb-2">Desafios:</h4>
                    <div className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 flex-shrink-0"></div>
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-medium mb-2">Soluções:</h4>
                    <div className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-accent font-medium">{industry.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              O que nossos <span className="gradient-text">Clientes</span> dizem
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Depoimentos reais de indústrias que transformaram seus resultados
            </p>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{testimonial.company}</h3>
                    <p className="text-accent font-medium mb-4">{testimonial.industry}</p>
                    <p className="text-white/70 leading-relaxed italic">"{testimonial.testimonial}"</p>
                    <p className="text-white/60 text-sm mt-4">— {testimonial.executive}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-accent font-medium mb-3">Resultados Obtidos:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              <span className="gradient-text">Integrações</span> Nativas
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Conecte-se com as principais plataformas do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon
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
                  <h3 className="text-lg font-semibold text-white">{integration.category}</h3>
                  <div className="space-y-1">
                    {integration.platforms.map((platform, idx) => (
                      <p key={idx} className="text-white/70 text-sm">{platform}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Planos e <span className="gradient-text">Investimento</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Escolha o plano ideal para o porte da sua indústria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card space-y-6 ${plan.highlight ? 'ring-2 ring-accent' : ''}`}
              >
                {plan.highlight && (
                  <div className="bg-accent text-white text-center py-2 px-4 rounded-lg text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-accent">{plan.price}</span>
                    <span className="text-white/70 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-white/70">
                      <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma proposta do CodeERP." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center ${
                    plan.highlight 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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