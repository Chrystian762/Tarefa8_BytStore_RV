import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="contato" element={<Contato/>} />
        </Routes>
      
    </div>
  )
}

export default App;
