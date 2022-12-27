import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Login from '../components/login-card'

export default function Home() {
  return (
    <div className='flex flex-col flex-wrap bg-back-black justify-center w-screen h-screen items-center'>
      <Login />
    </div>
  )
}