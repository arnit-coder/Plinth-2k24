import React from 'react'
import Explore from './Explore'
import poster from './assets/WhatsApp Image 2023-12-20 at 13.52 1.svg'
const Testing = () => {
  return (
    <Explore 
    day="Quizzinga" 
    artist="CRYPTEX" 
    badaDescription="Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will include all forms of genres. Questions will be posted on Plinth's website, and hints will be posted on the Instagram stories of @quizzingalnm."
    pricepool=" Rs. 10,000/-" 
    image={poster} 
    rulebook='https://plinth-2k24-eight.vercel.app/' />

  )
}

export default Testing