
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MoreInfo from '../components/services/MoreInfo'
import Hero from '../components/services/Hero'
import ServiceCard from '../components/services/ServiceCard'
export default function Services() {
  return (
  <div>
<Hero title="Services"/>
<ServiceCard/>
<MoreInfo/>
    </div>
  )
}
