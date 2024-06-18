import React from 'react'
import Navebar from '../components/Navebar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

function Home() {
  return (
   <>
   <Navebar />
   <Banner />
   <Freebook/>

   <Footer />
   </>
  )
}

export default Home