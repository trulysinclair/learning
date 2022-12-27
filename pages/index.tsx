import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex flex-col flex-wrap bg-back-black justify-center w-screen h-screen items-center'>
      <div className='flex flex-col drop-shadow-md rounded-lg bg-bottom-black w-1/5 h-1/2 text-white'>
        <div className='flex flex-col w-full h-16 justify-center drop-shadow-md items-center rounded-t-lg bg-upper-black' >
          <h1 className='text-3xl font-bold text-white'>Login</h1>
        </div>
        <div className='flex justify pl-5 pt-5'>
          <label htmlFor='email' className='font'>Email</label>
          <input></input>
        </div>    
      </div>
    </div>
  )
}