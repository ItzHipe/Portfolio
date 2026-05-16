import '@/styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import MotionConfig from '@/components/animations/MotionConfig'
import { fontVariables } from '@/lib/fonts'

export default function App({ Component, pageProps }) {
  return (
    <div className={fontVariables}>
      <ThemeProvider>
        <MotionConfig>
          <Component {...pageProps} />
        </MotionConfig>
      </ThemeProvider>
    </div>
  )
}
