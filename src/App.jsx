import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage,Navbar,Checkout,SearchResult,ProductPage } from "./Components"
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/search' element={<SearchResult />} />
        <Route exact path='/product/:id' element={<ProductPage />} />
        <Route exact path='/checkout' element={<Checkout />} />
        

      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
