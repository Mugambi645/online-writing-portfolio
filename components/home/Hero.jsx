import Image from 'next/image'
import styles from "../.././styles/Header.module.css";
import Typewriter from 'typewriter-effect';
const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL =
  "/heros/writing.jpg";
const Hero = (props) => {
    return (
        <>
<div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        <h1 className='p-10'></h1>
       <h1 className='text-4xl font-bold text-white  font-sans p-10'>
       <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Skilled web writer based in Nairobi,Kenya')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500000000000000)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
       </h1>
   
      </div>
    </div>

        </>
    )
}
export default Hero;