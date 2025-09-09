import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OfficeAutomation from './pages/OfficeAutomation'
import StudyEfficiency from './pages/StudyEfficiency'
import OtherUseCases from './pages/OtherUseCases'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="office" element={<OfficeAutomation />} />
        <Route path="study" element={<StudyEfficiency />} />
        <Route path="other" element={<OtherUseCases />} />
      </Route>
    </Routes>
  )
}

export default App