
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/home/Hero'
import Info from '../components/home/Info'
import MoreInfo from '../components/home/MoreInfo'
export default function Home() {
  return (
  <div>
<Hero/>
<Info/>
<MoreInfo/>
    </div>
  )
}
