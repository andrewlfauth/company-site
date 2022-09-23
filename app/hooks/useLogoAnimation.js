import { useEffect, useState, useRef } from "react"
import {gsap} from 'gsap'

export default function useLogoAnimation() {
  const [play, setPlay] = useState(false)
  const logoRef = useRef()
  const audioRef = useRef()

  useEffect(() => {
    if (play) {
      let sound = audioRef.current
      sound.volume = 0.5
      sound.play()
     
      let tl = gsap.timeline()
      
      tl.to(logoRef.current, { duration: 1, x: 200, y: -200, ease: 'sine.in' })
      tl.to(logoRef.current, { duration: 1, x: -400 })
      tl.to(logoRef.current, { duration: 1, y: 300, rotate: 65 })
      tl.to(logoRef.current, { duration: 1, x: 0, y: 0, rotate: 45 })

      setTimeout(() => setPlay(false), 4000)
    }
  }, [play, audioRef, logoRef])

  useEffect(() => {
    gsap.to(logoRef.current, { opacity: 1 })
   
    gsap.from(logoRef.current, {
      duration: 1, 
      x: -300, 
      y: 300, 
      rotate: 65, 
      delay: 1.2
    })
  }, [logoRef])

  return {logoRef, audioRef, setPlay}
}