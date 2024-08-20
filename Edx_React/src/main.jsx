import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

function ref() {
  root.render(
    <App />
)
}
setInterval(ref,1000)

