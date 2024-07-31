import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const changeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const changeMessage = (e)=>{
    setMessage(e.target.value)
  }
  const submit = ()=>{
    setEmail("");
    setMessage("");
    navigate('/contact');
  }

  return (
    <div className='flex gap-5'>
    <Sidebar/>
    <div className='mt-[60px] bg-slate-200 min-h-[98vh] w-[80vw]'>
      <form className='mt-10 h-full w-full flex flex-col gap-10 items-center'>
        <span className='text-black text-lg'> Email :  <input onChange={changeEmail} value={email} placeholder=' Ex. falana@gmail.com' className=' text-black w-[300px] rounded-2xl border border-black px-2 py-1' type="text" name="email"/></span>
        <span className='text-black text-lg flex gap-6'> <span className='mt-4'>Message :</span> <textarea onChange={changeMessage} value={message} placeholder=' Ex. Your projects are intriguing'  className='mt-2 text-black w-[400px] rounded-2xl border border-black px-2 py-1' name="message"/></span>
        <button onClick={submit} className='px-3 py-1 bg-blue-500 text-white rounded-lg font-semibold'> Submit </button>
      </form>
    </div>
    </div>
  )
}

export default Contact
