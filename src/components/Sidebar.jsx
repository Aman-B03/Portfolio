import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[15vw] bg-[#2E354A] flex flex-col gap-5 items-center p-5 min-h-[85vh] mt-16 ml-6 glowing-div text-white text-lg font-semibold'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'bg-blue-200 text-black sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg' : 'sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg'}>
        <li className='list-none mx-auto'>Home</li>
      </NavLink>    
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-blue-200 text-black sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg' : 'sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg'}><li className='list-none mx-auto'>Contact Me</li></NavLink>
      <NavLink to="/myProjects" className={({ isActive }) => isActive ? 'bg-blue-200 text-black sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg' : 'sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg'}><li className='list-none mx-auto'>My Projects</li></NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'bg-blue-200 text-black sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg' : 'sideNav w-full hover:bg-[#343d55] transitionForAll p-1 rounded-lg'}><li className='list-none mx-auto'>Resume</li></NavLink>
    </div>
  )
}

export default Sidebar
