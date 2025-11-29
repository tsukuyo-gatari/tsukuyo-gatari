import { Home } from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShinzouRoutes } from './routes/ShinzouRoutes'
import { SorekamiRoutes } from './routes/SorekamiRoutes'
import { ParadeRoutes } from './routes/ParadeRoutes'
import { NingenRoutes } from './routes/NingenRoutes'
import { JigokuRoutes } from './routes/JigokuRoutes'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shinzou/*" element={<ShinzouRoutes />} />
      <Route path="/sorekami/*" element={<SorekamiRoutes />} />
      <Route path="/parade/*" element={<ParadeRoutes />} />
      <Route path="/ningen/*" element={<NingenRoutes/>} />
      <Route path="/jigoku/*" element={<JigokuRoutes />} />
    </Routes>
  )
}

export default App
