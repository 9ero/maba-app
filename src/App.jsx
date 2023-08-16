import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import {Products} from './pages/Products'
import { Contact } from './pages/Contact'
import { LanguageProvider } from './components/LanguageProvider'

function App() {


  return (
    <>
    <LanguageProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      </LanguageProvider>
    </>
  )
}

export default App
