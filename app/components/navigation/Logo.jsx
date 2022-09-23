import {useRef} from 'react'
import {Link} from '@remix-run/react'
import useLogoAnimation from '../../hooks/useLogoAnimation'

function Logo() {
  const {logoRef, audioRef, setPlay} = useLogoAnimation()

  return (
    <>
      <Link to='/' className='flex items-end cursor-none'>
        <img 
          ref={logoRef} 
          src="https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657574578/Company/logo_kxaqvc.svg" 
          alt="company logo" 
          className='w-6 rotate-45 opacity-0 cursor-none hover:animate-wiggle' 
          onClick={() => setPlay(true)} 
        />
        <span className="text-2xl font-bold tracking-tighter text-white">Liftoff Web</span>
      </Link>

      <audio 
        ref={audioRef} 
        src="https://res.cloudinary.com/dpnkrz8c8/video/upload/v1657584736/Company/624231__ninjasharkstudios__enginethrust-1_mp3cut.net_1_pmmvsi.wav">
      </audio>
    </>
  )
}

export default Logo