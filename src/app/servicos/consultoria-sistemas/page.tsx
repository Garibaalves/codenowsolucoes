'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  BarChart3,
  Settings,
  Shield,
  Zap,
  Clock,
  DollarSign,
  FileText,
  Database,
  Workflow,
  Brain,
  Search,
  Presentation,
  Cog,
  RefreshCw,
  Award,
  MessageSquare,
  Calendar,
  CheckSquare
} from 'lucide-react'

const ConsultoriaSistemasPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Análise de Processos',
      description: 'Mapeamento detalhado dos processos atuais, identificação de gargalos e oportunidades de melhoria.',
      deliverables: ['Diagnóstico completo', 'Mapeamento de processos', 'Relatório de oportunidades', 'Plano de ação']
    },
    {
      icon: Target,
      title: 'Estratégia Digital',
      description: 'Definição de roadmap tecnológico alinhado aos objetivos de negócio da empresa.',
      deliverables: ['Roadmap tecnológico', 'Arquitetura de soluções', 'Análise de ROI', 'Cronograma de implementação']
    },
    {
      icon: Cog,
      title: 'Otimização de Sistemas',
      description: 'Melhoria de performance, segurança e usabilidade de sistemas existentes.',
      deliverables: ['Auditoria técnica', 'Plano de otimização', 'Implementação de melhorias', 'Monitoramento contínuo']
    },
    {
      icon: Workflow,
      title: 'Automação de Processos',
      description: 'Identificação e implementação de oportunidades de automação para aumentar eficiência.',
      deliverables: ['Análise de automação', 'Prototipagem', 'Desenvolvimento', 'Treinamento da equipe']
    }
  ]

  const expertise = [
    {
      area: 'Transformação Digital',
      description: 'Modernização de processos e sistemas para a era digital',
      technologies: ['Cloud Computing', 'Microserviços', 'APIs', 'DevOps'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      area: 'Inteligência Artificial',
      description: 'Implementação de IA para automação inteligente e insights',
      technologies: ['Machine Learning', 'NLP', 'Computer Vision', 'Chatbots'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      area: 'Integração de Sistemas',
      description: 'Conectividade entre sistemas legados e modernos',
      technologies: ['APIs REST', 'GraphQL', 'ESB', 'Middleware'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      area: 'Segurança e Compliance',
      description: 'Proteção de dados e conformidade regulatória',
      technologies: ['LGPD', 'ISO 27001', 'Criptografia', 'Auditoria'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const industries = [
    {
      name: 'Indústria',
      challenges: ['Sistemas legados desconectados', 'Processos manuais', 'Falta de visibilidade'],
      solutions: ['ERP integrado', 'IoT e sensores', 'Dashboards em tempo real'],
      results: 'Até 40% aumento na eficiência operacional'
    },
    {
      name: 'Varejo',
      challenges: ['Gestão de estoque', 'Experiência do cliente', 'Omnichannel'],
      solutions: ['Sistema unificado', 'CRM avançado', 'E-commerce integrado'],
      results: 'Até 60% melhoria na satisfação do cliente'
    },
    {
      name: 'Serviços Financeiros',
      challenges: ['Compliance regulatório', 'Segurança de dados', 'Processos manuais'],
      solutions: ['Automação de compliance', 'Segurança avançada', 'RPA'],
      results: 'Até 70% redução em riscos operacionais'
    },
    {
      name: 'Saúde',
      challenges: ['Gestão de pacientes', 'Prontuários', 'Agendamentos'],
      solutions: ['Sistema hospitalar', 'Prontuário eletrônico', 'Telemedicina'],
      results: 'Até 50% melhoria no atendimento'
    }
  ]

  const methodology = [
    {
      phase: 'Descoberta',
      duration: '1-2 semanas',
      activities: ['Entrevistas com stakeholders', 'Análise de sistemas atuais', 'Mapeamento de processos', 'Identificação de dores'],
      deliverable: 'Relatório de Diagnóstico'
    },
    {
      phase: 'Estratégia',
      duration: '1-2 semanas',
      activities: ['Definição de objetivos', 'Priorização de iniciativas', 'Análise de ROI', 'Roadmap tecnológico'],
      deliverable: 'Plano Estratégico'
    },
    {
      phase: 'Design',
      duration: '2-3 semanas',
      activities: ['Arquitetura de soluções', 'Prototipagem', 'Validação com usuários', 'Especificações técnicas'],
      deliverable: 'Projeto Detalhado'
    },
    {
      phase: 'Implementação',
      duration: 'Variável',
      activities: ['Desenvolvimento', 'Testes', 'Treinamento', 'Go-live'],
      deliverable: 'Solução Implementada'
    },
    {
      phase: 'Otimização',
      duration: 'Contínuo',
      activities: ['Monitoramento', 'Ajustes', 'Melhorias', 'Suporte'],
      deliverable: 'Melhoria Contínua'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      description: 'Melhoria de até 300% na eficiência dos processos',
      stat: '300%'
    },
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      description: 'Economia operacional de até 50% com otimizações',
      stat: '50%'
    },
    {
      icon: Clock,
      title: 'Time to Market',
      description: 'Redução de até 60% no tempo de lançamento',
      stat: '60%'
    },
    {
      icon: Award,
      title: 'ROI Garantido',
      description: 'Retorno sobre investimento em até 12 meses',
      stat: '12 meses'
    }
  ]

  const caseStudies = [
    {
      client: 'Indústria Metalúrgica',
      challenge: 'Processos produtivos desconectados e falta de visibilidade em tempo real',
      solution: 'Implementação de sistema MES integrado com ERP e dashboards em tempo real',
      results: [
        '35% aumento na produtividade',
        '50% redução no tempo de setup',
        '90% melhoria na rastreabilidade',
        'ROI de 280% em 18 meses'
      ]
    },
    {
      client: 'Rede de Varejo',
      challenge: 'Gestão de estoque descentralizada e experiência do cliente fragmentada',
      solution: 'Plataforma omnichannel com gestão unificada de estoque e CRM integrado',
      results: [
        '40% redução no estoque parado',
        '65% aumento nas vendas online',
        '80% melhoria na satisfação',
        'Payback em 14 meses'
      ]
    },
    {
      client: 'Cooperativa de Crédito',
      challenge: 'Processos manuais de análise de crédito e compliance regulatório',
      solution: 'Automação completa com IA para análise de risco e compliance automatizado',
      results: [
        '85% redução no tempo de análise',
        '95% precisão na avaliação de risco',
        '100% compliance regulatório',
        'ROI de 450% em 2 anos'
      ]
    }
  ]

  const team = [
    {
      role: 'Arquiteto de Soluções',
      expertise: 'Design de arquiteturas escaláveis e integração de sistemas',
      experience: '15+ anos'
    },
    {
      role: 'Consultor de Processos',
      expertise: 'Mapeamento e otimização de processos empresariais',
      experience: '12+ anos'
    },
    {
      role: 'Especialista em IA',
      expertise: 'Implementação de soluções de inteligência artificial',
      experience: '10+ anos'
    },
    {
      role: 'Analista de Negócios',
      expertise: 'Análise de requisitos e gestão de mudanças',
      experience: '8+ anos'
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
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Consultoria em <span className="gradient-text">Sistemas</span> e <span className="gradient-text">Automação</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Transforme sua empresa com estratégias tecnológicas personalizadas. 
              Otimize processos, reduza custos e acelere o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de agendar uma consultoria gratuita em sistemas." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Agendar Consultoria Gratuita
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

      {/* Services Section */}
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
              Nossos <span className="gradient-text">Serviços</span> de Consultoria
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Soluções estratégicas personalizadas para transformar sua operação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                  <div>
                    <h4 className="text-accent font-medium mb-3">Entregáveis:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                          {deliverable}
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

      {/* Expertise Section */}
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
              Áreas de <span className="gradient-text">Especialização</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expertise técnica e estratégica em tecnologias de ponta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${area.color}`}></div>
                  <h3 className="text-xl font-semibold text-white">{area.area}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{area.description}</p>
                <div>
                  <h4 className="text-accent font-medium mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Experiência comprovada em diversos segmentos de mercado
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
                
                <div>
                  <h4 className="text-red-400 font-medium mb-2">Desafios Comuns:</h4>
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
                  <h4 className="text-orange-400 font-medium mb-2">Nossas Soluções:</h4>
                  <div className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        {solution}
                      </div>
                    ))}
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

      {/* Methodology Section */}
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
              Nossa <span className="gradient-text">Metodologia</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Processo estruturado para garantir resultados efetivos e sustentáveis
            </p>
          </motion.div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
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
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white">{phase.phase}</h3>
                      <span className="text-accent font-medium">{phase.duration}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-white/80 font-medium mb-2">Atividades:</h4>
                      <div className="space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-white/70">
                            <CheckSquare className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-accent font-medium">📋 {phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Resultados reais obtidos por nossos clientes através de consultoria estratégica
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
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
                    <h3 className="text-xl font-semibold text-white mb-3">{study.client}</h3>
                    <div>
                      <h4 className="text-red-400 font-medium mb-2">Desafio:</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-orange-400 font-medium mb-2">Solução:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-accent font-medium mb-3">Resultados:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
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
              <span className="gradient-text">Benefícios</span> Comprovados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Impacto mensurável da nossa consultoria no seu negócio
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

      {/* Team Section */}
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
              Nossa <span className="gradient-text">Equipe</span> de Especialistas
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Profissionais experientes e certificados nas principais tecnologias do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{member.role}</h3>
                  <span className="text-accent font-medium">{member.experience}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{member.expertise}</p>
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
              Transforme seu negócio hoje mesmo!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos otimizar seus processos, 
              reduzir custos e acelerar o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de agendar uma consultoria gratuita em sistemas." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Agendar Consultoria Gratuita
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



export default ConsultoriaSistemasPage