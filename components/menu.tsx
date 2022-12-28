import Head from 'next/head'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Login from '../components/login-card'

export default function Menu(props: { name: string }) {
    return (
        <div className="fixed bg-bottom-black w-60 h-screen">
            <div className='flex flex-col min-h-6 bg-upper-black drop-shadow-md w-full h-1/4 justify-center items-center'>
                <div className='flex flex-col rounded-full w-1/2 h-1/2 bg-white justify-center items-center'>
                    <img className='h-full p-5' src='vercel.svg'></img>
                </div>
                <h1 className='text-white text-2xl pt-6 font-medium'>{props.name}</h1>
            </div>
            <div className='flex flex-col w-full h-full'>
                <ul className='h-full flex flex-col'>
                    <button className='justify-center items-center bg-red-200 h-14 w-full flex flex-row text-white'>
                        <span className='mr-2'>
                            <img src='thirteen.svg' className='w-full h-full'></img>
                        </span>
                        <h2 className='flex text-xl justify-center text-white'>Dashboard</h2>
                    </button>
                </ul>
            </div>
        </div>
    )
}