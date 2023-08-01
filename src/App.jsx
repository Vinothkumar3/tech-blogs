import './App.css'
import BlogDetail from './Pages/BlogDetail'
import Home from './Pages/Home'
import Header from './Components/Header'
import {Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  return (
    <>
       <div> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Blog-detail/:id' element={<BlogDetail/>}/>
      </Routes> 
    </div> 
     <Footer/> 
    </>
   

  )
}

export default App
