import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { userAuthentication } from './hooks/userAuthentication'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import loading from './assets/Loading.gif'
import Footer from './components/Footer/Footer'
import ShowUserName from './components/ShowUserName/ShowUserName'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <div className='container load'><img src={loading} alt="Gif Loading User" width="120px" height="120px" /></div>
  }
  
  return (
    <>      
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/login/showusername' element={<ShowUserName />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App