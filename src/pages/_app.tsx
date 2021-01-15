import { FC } from 'react'
import type { AppProps } from 'next/app'
import 'globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
