import {useEffect} from 'react'

export default function useTranslateInOut(ref, open, direction) {
  useEffect(() => {    
    if (open) {  
      switch (direction) {
        case "right":
        case "left":
          ref.style.transform = "translateX(0)"
          break
        case "top":
        case "bottom":
            ref.style.transform = "translateY(0)"
            break
        default:
          break
      }
    }
    
    if (!open) {
      switch(direction) {
        case "right":
          ref.style.transform = "translateX(100%)"
          break
        case "left":
          ref.style.transform = "translateX(-100%)"
          break
        case "top":
          ref.style.transform = "translateY(100%)"
          break
        case "bottom":
          ref.style.transform = "translateY(-100%)"
          break
      }
    }
  }, [direction, ref, open])
}