
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MoreInfo from '../components/samples/MoreInfo'
import Hero from '../components/samples/Hero'
import Samples from '../components/samples/Samples'
export default function Sample() {
  return (
  <div>
<Hero title="Sample project"/>
<Samples/>
<MoreInfo/>
    </div>
  )
}
