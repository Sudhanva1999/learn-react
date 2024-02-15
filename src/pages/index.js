// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import ShoppingCart from './qcomps/shoppingCart'
import ObjetForm from './qcomps/updObjectsForm'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile />
        <ShoppingCart /> */}
        <ObjetForm />
    </div>
  )
}
