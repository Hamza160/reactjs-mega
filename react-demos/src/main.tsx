import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { TodoProvider } from './states/TodoContext'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <TodoProvider>
      <App/>
    </TodoProvider>
  // </StrictMode>,
)
