import Head from 'next/head'
import Link from 'next/link'
import Login from '../components/login-card'

export default function Menu() {
    return (
        <div className="fixed bg-bottom-black w-60 h-screen">
            <div className='flex flex-col bg-upper-black drop-shadow-md w-full h-1/4 justify-center items-center'>
                <div className='flex flex-col rounded-full w-1/2 h-1/2 bg-white justify-center items-center'>
                    <img className='h-full p-5' src='vercel.svg'></img>
                </div>
                <h1 className='text-white text-2xl pt-6 font-medium'>Your Name</h1>
            </div>
        </div>
    )
}