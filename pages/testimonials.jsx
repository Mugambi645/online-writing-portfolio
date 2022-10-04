
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MoreInfo from '../components/testimonials/MoreInfo'
import Hero from '../components/testimonials/Hero'
import TestimonialComponent from '../components/testimonials/TestimonialComponent'
export default function Testimonials() {
  return (
  <div>
<Hero title="Testimonials" />
<TestimonialComponent/>
<MoreInfo/>
    </div>
  )
}
