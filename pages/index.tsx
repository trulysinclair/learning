import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // MAIN SCREEN CONTAINER //
    <div className='flex flex-col flex-wrap bg-back-black justify-center w-screen h-screen items-center'>
      // Centered container in the middle of the screen //
      <div className='flex flex-col drop-shadow-md rounded-lg bg-bottom-black w-1/5 h-1/3 text-white items-center'>
        // Container for the title bar at the top of the container //
        <div className='flex flex-col w-full h-16 justify-center drop-shadow-md items-center rounded-t-lg bg-upper-black' >
          <h1 className='text-3xl font-bold text-white'>Login</h1>
        </div>
        // Div for email label and input //
        <div className='flex flex-col w-full justify pl-5 pt-5 pr-5'>
          <label htmlFor='email' className='font pb-1'>Email</label>
          <input className='text-black rounded-md h-8 drop-shadow-md border-gray-300' placeholder='user@email.com'></input>
        </div>
        // Div for password label and input //
        <div className='flex flex-col w-full justify pl-5 pt-3 pr-5'>
          <label htmlFor='password' className='font pb-1'>Password</label>
          <input type='password' className='text-black rounded-md h-8 drop-shadow-md border-gray-300' placeholder='password'></input>
        </div>
        // Login button //
        <button className=' rounded-md bg-green-600 mt-8 mb-8 w-24 h-8'>Log In</button>        
      </div>
    </div>
  )
}