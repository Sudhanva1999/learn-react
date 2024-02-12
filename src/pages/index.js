// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import ListPlain from './components/list_plain'
import ListKeys from './components/list_keys'
import ListQ from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import Button from './components/button'
import StateExample from './qcomps/state'
import StuckFunction from './qcomps/stuckForm'

export default function Home() {
  return (
    <div className={styles.main}>
       <StuckFunction />
    </div>
  )
}
