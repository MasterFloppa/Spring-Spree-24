import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../components/About'
import AuthPage from '../components/Authpage/AuthPage'
import Home from '../components/Home'
import Events from '../components/Events'
import Blogs from '../components/Blogs/Blogs'
import BlogDetail from '../components/Blogs/BlogDetail'
import Profile from '../components/Profile/Profile'
import Sponsors from '../components/Sponsors/Sponsors'
import Teams from '../components/Teams/Teams'
import EachTeam from '../components/Teams/EachTeam'
import { useAuth } from './AuthManager'
import { FAQ } from '../components/FAQ'

import { Register } from '../components/Register';
import Proshow from '../components/Proshow'



const RoutesManager = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {
        !user ? (<>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/register' element={<AuthPage />} />
          <Route path='/profile' element={<AuthPage />} />
        </>) : (
          <>
            <Route path='/auth' element={<Register />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </>
        )
      }

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sponsors' element={<Sponsors />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path="/blogs/:blogId" element={<BlogDetail />} />
      <Route path='/events/' element={<Events />} />
      <Route path='/team' element={<Teams />} />
      <Route path="/team/:teamname" element={<EachTeam />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path="/proshows" element={<Proshow />} />
    </Routes >
  )
}
export default RoutesManager