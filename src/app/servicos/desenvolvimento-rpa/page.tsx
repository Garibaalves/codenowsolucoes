'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Database,
  Mail,
  Calculator,
  BarChart3,
  Settings,
  Shield,
  Cpu,
  RefreshCw,
  Target,
  DollarSign,
  AlertTriangle,
  Workflow,
  MousePointer,
  Keyboard,
  Monitor
} from 'lucide-react'

const DesenvolvimentoRPAPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Automação Completa',
      description: 'Automatização de processos repetitivos com precisão e velocidade superiores.'
    },
    {
      icon: Clock,
      title: 'Execução 24/7',
      description: 'Robôs que trabalham ininterruptamente, aumentando a produtividade.'
    },
    {
      icon: Target,
      title: 'Precisão Total',
      description: 'Zero erros humanos em tarefas repetitivas e cálculos complexos.'
    },
    {
      icon: TrendingUp,
      title: 'ROI Rápido',
      description: 'Retorno sobre investimento em poucos meses com redução de custos.'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Proteção de dados e compliance com regulamentações de segurança.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Detalhados',
      description: 'Monitoramento completo de performance e métricas de automação.'
    }
  ]

  const processTypes = [
    {
      icon: FileText,
      title: 'Processamento de Documentos',
      description: 'Extração, validação e processamento automático de documentos e formulários.',
      examples: ['Faturas e notas fiscais', 'Contratos e propostas', 'Relatórios financeiros', 'Documentos de RH'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Integração de Sistemas',
      description: 'Sincronização automática de dados entre diferentes sistemas e plataformas.',
      examples: ['ERP e CRM', 'Planilhas e bancos de dados', 'APIs e web services', 'Sistemas legados'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Mail,
      title: 'Comunicação Automatizada',
      description: 'Envio automático de e-mails, relatórios e notificações personalizadas.',
      examples: ['E-mails de cobrança', 'Relatórios periódicos', 'Notificações de status', 'Follow-up de vendas'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calculator,
      title: 'Cálculos e Análises',
      description: 'Processamento automático de cálculos complexos e análises de dados.',
      examples: ['Conciliação bancária', 'Cálculos de impostos', 'Análise de performance', 'Relatórios financeiros'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const industries = [
    {
      name: 'Financeiro',
      processes: ['Conciliação bancária', 'Processamento de faturas', 'Relatórios regulatórios', 'Análise de crédito'],
      savings: 'Até 80% redução no tempo de processamento'
    },
    {
      name: 'Recursos Humanos',
      processes: ['Onboarding de funcionários', 'Processamento de folha', 'Gestão de benefícios', 'Relatórios trabalhistas'],
      savings: 'Até 70% menos tempo administrativo'
    },
    {
      name: 'Vendas e Marketing',
      processes: ['Qualificação de leads', 'Atualização de CRM', 'Relatórios de vendas', 'Campanhas de e-mail'],
      savings: 'Até 60% mais produtividade de vendas'
    },
    {
      name: 'Operações',
      processes: ['Gestão de estoque', 'Processamento de pedidos', 'Logística e entregas', 'Controle de qualidade'],
      savings: 'Até 90% redução de erros operacionais'
    },
    {
      name: 'Contabilidade',
      processes: ['Lançamentos contábeis', 'Conciliações', 'Apuração de impostos', 'Demonstrativos financeiros'],
      savings: 'Até 85% menos tempo em tarefas manuais'
    },
    {
      name: 'Atendimento',
      processes: ['Triagem de tickets', 'Atualizações de status', 'Relatórios de SLA', 'Escalação automática'],
      savings: 'Até 75% melhoria no tempo de resposta'
    }
  ]

  const technologies = [
    { name: 'UiPath', category: 'RPA Platform', description: 'Plataforma líder em automação robótica' },
    { name: 'Automation Anywhere', category: 'RPA Platform', description: 'Solução enterprise para automação' },
    { name: 'Blue Prism', category: 'RPA Platform', description: 'Automação inteligente e segura' },
    { name: 'Microsoft Power Automate', category: 'Low-Code RPA', description: 'Automação integrada ao Office 365' },
    { name: 'Python', category: 'Custom Development', description: 'Desenvolvimento de automações personalizadas' },
    { name: 'Selenium', category: 'Web Automation', description: 'Automação de aplicações web' },
    { name: 'OCR/AI', category: 'Document Processing', description: 'Reconhecimento e processamento de documentos' },
    { name: 'API Integration', category: 'System Integration', description: 'Integração com sistemas existentes' }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      description: 'Economia de até 80% em custos operacionais',
      stat: '80%'
    },
    {
      icon: Clock,
      title: 'Ganho de Tempo',
      description: 'Processos até 10x mais rápidos que execução manual',
      stat: '10x'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Redução de 99% nos erros de processamento',
      stat: '99%'
    },
    {
      icon: TrendingUp,
      title: 'Produtividade',
      description: 'Aumento de até 300% na produtividade da equipe',
      stat: '300%'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Análise de Processos',
      description: 'Mapeamento detalhado dos processos atuais e identificação de oportunidades de automação.',
      duration: '1-2 semanas'
    },
    {
      step: 2,
      title: 'Design da Automação',
      description: 'Criação do fluxo de automação, definição de regras de negócio e tratamento de exceções.',
      duration: '1-2 semanas'
    },
    {
      step: 3,
      title: 'Desenvolvimento',
      description: 'Programação dos robôs, configuração de integrações e desenvolvimento de interfaces.',
      duration: '2-4 semanas'
    },
    {
      step: 4,
      title: 'Testes e Validação',
      description: 'Testes extensivos em ambiente controlado, validação de resultados e ajustes finais.',
      duration: '1-2 semanas'
    },
    {
      step: 5,
      title: 'Deploy e Monitoramento',
      description: 'Implementação em produção, treinamento da equipe e monitoramento contínuo.',
      duration: '1 semana + ongoing'
    }
  ]

  const useCases = [
    {
      title: 'Indústria Farmacêutica',
      challenge: 'Processamento manual de 500+ faturas por dia',
      solution: 'RPA para extração automática de dados e validação',
      results: ['90% redução no tempo de processamento', '99.8% precisão na extração', 'ROI de 400% em 8 meses']
    },
    {
      title: 'Banco Regional',
      challenge: 'Conciliação bancária manual demorava 8 horas/dia',
      solution: 'Automação completa do processo de conciliação',
      results: ['De 8 horas para 30 minutos', '100% precisão nos cálculos', 'Equipe realocada para atividades estratégicas']
    },
    {
      title: 'E-commerce',
      challenge: 'Atualização manual de preços em múltiplas plataformas',
      solution: 'RPA para sincronização automática de preços e estoque',
      results: ['Atualizações em tempo real', '0 erros de precificação', '75% redução no tempo operacional']
    },
    {
      title: 'Escritório Contábil',
      challenge: 'Lançamentos contábeis manuais de centenas de clientes',
      solution: 'Automação de lançamentos e geração de relatórios',
      results: ['80% menos tempo em lançamentos', '95% redução de erros', 'Capacidade para 3x mais clientes']
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
              Desenvolvimento de <span className="gradient-text">RPA</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Automatize processos repetitivos com Robotic Process Automation. 
              Reduza custos, elimine erros e libere sua equipe para atividades estratégicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma análise gratuita para automação RPA." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Solicitar Análise Gratuita
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

      {/* Process Types Section */}
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
              Tipos de <span className="gradient-text">Automação RPA</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos soluções RPA personalizadas para diferentes tipos de processos empresariais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processTypes.map((type, index) => {
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
                    <h4 className="text-accent font-medium mb-3">Exemplos de Aplicação:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                          {example}
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
              Vantagens do <span className="gradient-text">RPA</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Benefícios comprovados da automação robótica de processos
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
              <span className="gradient-text">Setores</span> Atendidos
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              RPA aplicado em diversos segmentos com resultados comprovados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card space-y-4"
              >
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.processes.map((process, idx) => (
                    <div key={idx} className="flex items-center text-sm text-white/70">
                      <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                      {process}
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-accent font-medium text-sm">{industry.savings}</p>
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
              <span className="gradient-text">Tecnologias</span> RPA
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Utilizamos as melhores ferramentas e plataformas de automação do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  <span className="text-accent text-sm font-medium">{tech.category}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados reais obtidos por nossos clientes com soluções RPA
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
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-red-400 font-medium text-sm mb-1">Desafio:</h4>
                      <p className="text-white/70 text-sm">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium text-sm mb-1">Solução:</h4>
                      <p className="text-white/70 text-sm">{useCase.solution}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-accent font-medium mb-3">Resultados:</h4>
                  <div className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
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
              <span className="gradient-text">Impacto</span> Mensurável
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados quantificáveis que transformam operações empresariais
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
              Metodologia estruturada para implementação de RPA com máxima eficiência
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
              Automatize seus processos hoje mesmo!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Solicite uma análise gratuita dos seus processos e descubra como o RPA 
              pode revolucionar sua operação e gerar economia imediata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma análise gratuita para automação RPA." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicitar Análise Gratuita
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



export default DesenvolvimentoRPAPage