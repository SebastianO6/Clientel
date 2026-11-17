import HomePage from './pages/HomePage'
import MpesaPage from './pages/MpesaPage'
import StoryPage from './pages/StoryPage'
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/mpesa') return <MpesaPage/>
  if (path === '/story') return <StoryPage/>
  return <HomePage/>
}
export default App
