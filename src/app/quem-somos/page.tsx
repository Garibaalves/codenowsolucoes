'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Code,
  Lightbulb,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react'

const QuemSomosPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos constantemente novas tecnologias e metodologias para oferecer soluções inovadoras e eficientes.'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Construímos relacionamentos duradouros baseados na confiança, transparência e entrega de resultados.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes, entendendo suas necessidades e objetivos específicos.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometemo-nos com a qualidade superior em todos os projetos, superando expectativas.'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Entregamos soluções no prazo, com processos otimizados e metodologias ágeis de desenvolvimento.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Focamos no crescimento sustentável dos nossos clientes através de soluções escaláveis e eficientes.'
    }
  ]

  const timeline = [
    {
      year: '2019',
      title: 'Fundação da Codenow',
      description: 'Início das atividades com foco em desenvolvimento de sistemas personalizados para pequenas e médias empresas.'
    },
    {
      year: '2020',
      title: 'Expansão dos Serviços',
      description: 'Ampliação do portfólio com desenvolvimento de aplicativos móveis e sites responsivos.'
    },
    {
      year: '2021',
      title: 'Especialização em IA',
      description: 'Investimento em inteligência artificial e automação de processos (RPA) para otimizar operações empresariais.'
    },
    {
      year: '2022',
      title: 'Lançamento do CodeERP',
      description: 'Desenvolvimento e lançamento do nosso ERP industrial próprio, revolucionando a gestão empresarial.'
    },
    {
      year: '2023',
      title: 'Consolidação no Mercado',
      description: 'Reconhecimento como referência em soluções digitais, com mais de 100 projetos entregues.'
    },
    {
      year: '2024',
      title: 'Expansão e Inovação',
      description: 'Crescimento da equipe e investimento em novas tecnologias para atender demandas futuras.'
    }
  ]

  const team = [
    {
      name: 'Garibaldi Neto',
      role: 'Desenvolvedor Senior e Fundador',
      description: 'Especialista em arquitetura de sistemas com mais de 10 anos de experiência em tecnologia.'
    },
    {
      name: 'Bernardo Martins',
      role: 'Desenvolvedor Junior',
      description: 'Líder técnica com expertise em IA, machine learning e desenvolvimento de soluções inovadoras.'
    },
    {
      name: 'Igor Portella',
      role: 'Desenvolvedor Pleno',
      description: 'Especialista em desenvolvimento full-stack e metodologias ágeis de desenvolvimento.'
    },
    {
      name: 'Ana Oliveira',
      role: 'UX/UI',
      description: 'Designer experiente focada em criar experiências digitais intuitivas e impactantes.'
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
              Conheça a <span className="gradient-text">Codenow</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Somos uma empresa de tecnologia especializada em transformar desafios empresariais 
              em oportunidades de crescimento através de soluções digitais inovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossa Missão</h2>
              <p className="text-white/70 leading-relaxed">
                Transformar negócios através de soluções tecnológicas inovadoras, 
                proporcionando crescimento sustentável e vantagem competitiva para nossos clientes.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Eye className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossa Visão</h2>
              <p className="text-white/70 leading-relaxed">
                Ser reconhecida como a principal referência em soluções digitais no Brasil, 
                liderando a transformação tecnológica das empresas.
              </p>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossos Valores</h2>
              <p className="text-white/70 leading-relaxed">
                Inovação, confiabilidade, colaboração, excelência, agilidade e foco no crescimento 
                dos nossos clientes são os pilares que guiam todas as nossas ações.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
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
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Os princípios que norteiam nossa conduta e definem nossa cultura organizacional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
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
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa <span className="gradient-text">História</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Uma jornada de crescimento, inovação e conquistas ao longo dos anos
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/30 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:mb-0 mb-4`}>
                    <div className="card space-y-4">
                      <div className="text-2xl font-bold text-accent">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-primary-800 z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
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
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Profissionais experientes e apaixonados por tecnologia, unidos pelo objetivo de entregar excelência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card text-center space-y-4"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.description}
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
              Vamos trabalhar juntos?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em soluções tecnológicas de sucesso. 
              Entre em contato e descubra como podemos ajudar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531984380893?text=Olá! Gostaria de entrar em contato para conhecer melhor a CodeNow." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Entrar em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/servicos" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Ver Nossos Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default QuemSomosPage