'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  BarChart3
} from 'lucide-react'

const DesenvolvimentoSistemasPage = () => {
  const features = [
    {
      icon: Database,
      title: 'Arquitetura Robusta',
      description: 'Sistemas escaláveis com arquitetura moderna e padrões de desenvolvimento consolidados.'
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Implementação de protocolos de segurança, criptografia e controle de acesso rigoroso.'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Sistemas rápidos e eficientes, otimizados para alta performance e baixa latência.'
    },
    {
      icon: Users,
      title: 'Interface Intuitiva',
      description: 'Design centrado no usuário com interfaces modernas e experiência otimizada.'
    },
    {
      icon: Globe,
      title: 'Integração Completa',
      description: 'Conectividade com APIs, sistemas legados e plataformas de terceiros.'
    },
    {
      icon: Cloud,
      title: 'Cloud Ready',
      description: 'Sistemas preparados para nuvem com deploy automatizado e escalabilidade.'
    }
  ]

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python/Django', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS/Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' }
  ]

  const benefits = [
    {
      title: 'Aumento da Produtividade',
      description: 'Automatização de processos manuais resulta em até 70% de aumento na produtividade.',
      percentage: '70%'
    },
    {
      title: 'Redução de Custos',
      description: 'Otimização de recursos e eliminação de retrabalho reduz custos operacionais.',
      percentage: '45%'
    },
    {
      title: 'Melhoria na Qualidade',
      description: 'Padronização de processos e controles automatizados melhoram a qualidade.',
      percentage: '85%'
    },
    {
      title: 'Escalabilidade',
      description: 'Sistemas preparados para crescer junto com seu negócio sem limitações.',
      percentage: '∞'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Análise de Requisitos',
      description: 'Levantamento detalhado das necessidades e objetivos do projeto.',
      duration: '1-2 semanas'
    },
    {
      step: 2,
      title: 'Arquitetura e Design',
      description: 'Definição da arquitetura técnica e prototipagem das interfaces.',
      duration: '2-3 semanas'
    },
    {
      step: 3,
      title: 'Desenvolvimento',
      description: 'Codificação do sistema seguindo as melhores práticas de desenvolvimento.',
      duration: '6-12 semanas'
    },
    {
      step: 4,
      title: 'Testes e Validação',
      description: 'Testes unitários, integração e validação com usuários finais.',
      duration: '2-3 semanas'
    },
    {
      step: 5,
      title: 'Deploy e Treinamento',
      description: 'Implementação em produção e treinamento da equipe.',
      duration: '1-2 semanas'
    }
  ]

  const cases = [
    {
      title: 'Sistema de Gestão Industrial',
      description: 'ERP completo para indústria metalúrgica com controle de produção, estoque e qualidade.',
      results: ['40% redução no tempo de produção', '60% melhoria no controle de qualidade', '30% economia em custos']
    },
    {
      title: 'Plataforma de E-commerce',
      description: 'Sistema completo de vendas online com integração a marketplaces e gestão de pedidos.',
      results: ['200% aumento nas vendas online', '50% redução no tempo de processamento', '90% satisfação dos clientes']
    },
    {
      title: 'Sistema de Gestão Hospitalar',
      description: 'Plataforma integrada para gestão de pacientes, prontuários e agendamentos.',
      results: ['70% redução no tempo de atendimento', '95% precisão nos dados', '80% satisfação dos usuários']
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
              <Code2 className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Desenvolvimento de <span className="gradient-text">Sistemas</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Criamos sistemas personalizados e escaláveis que transformam processos empresariais, 
              aumentam a produtividade e impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de sistema personalizado." 
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

      {/* Features Section */}
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
              Características dos Nossos <span className="gradient-text">Sistemas</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Desenvolvemos sistemas com tecnologias modernas e as melhores práticas do mercado
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
              Trabalhamos com as tecnologias mais modernas e confiáveis do mercado
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
              <span className="gradient-text">Benefícios</span> Comprovados
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados reais que nossos clientes alcançaram com nossos sistemas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center space-y-4"
              >
                <div className="text-4xl font-bold text-accent">{benefit.percentage}</div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
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
              Uma metodologia estruturada que garante a entrega de sistemas de alta qualidade
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

      {/* Case Studies */}
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
              Conheça alguns projetos que transformaram negócios e geraram resultados excepcionais
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{case_study.title}</h3>
                  <p className="text-white/70 leading-relaxed">{case_study.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-accent font-medium">Resultados:</h4>
                  <ul className="space-y-1">
                    {case_study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle className="text-orange-400 mr-2 flex-shrink-0" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
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
              Pronto para revolucionar seus processos?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como um sistema personalizado pode 
              transformar a eficiência do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5531984380893?text=Olá! Gostaria de solicitar uma consultoria gratuita para desenvolvimento de sistema personalizado." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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



export default DesenvolvimentoSistemasPage