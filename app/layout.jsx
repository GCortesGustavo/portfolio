import { Inter } from 'next/font/google'
import './globals.css'

//components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
//themeprovider
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio Gustavo Cortés',
  description: 'Created by Gustavo Cortés',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}


//suppressHydrationWarning: Se utiliza para suprimir advertencias en tiempo de ejecución relacionadas con la hidratacion de datos del servidor. En el contexto de Next.js, la hidratación es el proceso de sincronizar el estado del lado del servidor con el estado del lado del cliente al renderizar una aplicación de React en el servidor y luego continuar la ejecución en el navegador. La supresión de advertencias relacionadas con la hidratación puede ser útil en ciertos casos para evitar mensajes innecesarios en la consola del navegador. 