'use client';

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Animate = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  })

  return null;
}

export default Animate;