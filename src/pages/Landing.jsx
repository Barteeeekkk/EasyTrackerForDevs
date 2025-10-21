import Hero from '../components/Hero'
import Features from '../components/Features'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <Navbar />
    <div>
      <Hero />
      <Features />
    </div>
    </>
  )
}

export default Landing