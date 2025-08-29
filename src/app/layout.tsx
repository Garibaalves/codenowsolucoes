import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Codenow Soluções Digitais - Desenvolvimento de Sistemas e Automação',
    template: '%s | Codenow Soluções Digitais'
  },
  description: 'Especialistas em desenvolvimento de sistemas, aplicativos, sites, gestão de IA, RPA e consultoria em automação de processos. Transforme sua empresa com tecnologia de ponta.',
  keywords: ['desenvolvimento de sistemas', 'aplicativos', 'sites', 'IA', 'RPA', 'automação', 'ERP', 'consultoria tecnológica'],
  authors: [{ name: 'Codenow Soluções Digitais' }],
  creator: 'Codenow Soluções Digitais',
  publisher: 'Codenow Soluções Digitais',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://codenowsolucoes.com.br',
    siteName: 'Codenow Soluções Digitais',
    title: 'Codenow Soluções Digitais - Desenvolvimento de Sistemas e Automação',
    description: 'Especialistas em desenvolvimento de sistemas, aplicativos, sites, gestão de IA, RPA e consultoria em automação de processos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codenow Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenow Soluções Digitais - Desenvolvimento de Sistemas e Automação',
    description: 'Especialistas em desenvolvimento de sistemas, aplicativos, sites, gestão de IA, RPA e consultoria em automação de processos.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-primary text-white antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}