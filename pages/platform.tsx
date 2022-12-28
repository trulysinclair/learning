import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Menu from '../components/menu'

export default function Platform() {
    return (
        <div className='flex flex-col bg-back-black w-screen h-screen'>
            <Menu name="Your Name"/>
        </div>
    )
}