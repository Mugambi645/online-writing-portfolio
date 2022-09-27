
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MoreInfo from '../components/home/MoreInfo'
import Hero from '../components/why/Hero'
import WhyComponent from '../components/why/WhyComponent'
export default function Why() {
  return (
  <div>
<Hero/>
<WhyComponent/>
<MoreInfo/>
    </div>
  )
}
