import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppShell, createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({})

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <div>Count is: {count}</div>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      </AppShell>
    </MantineProvider>
  )
}

export default App
