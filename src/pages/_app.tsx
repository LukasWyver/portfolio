import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'

// import { Roboto_Flex as Roboto } from 'next/font/google'
import { Montserrat, JetBrains_Mono as JetBrainsMono } from 'next/font/google'
//

// const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-jetBrainsMono',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.variable} ${jetBrainsMono.variable} bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
    >
      {' '}
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
