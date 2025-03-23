
import * as React from "react"

const MOBILE_BREAKPOINT = 640

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => 
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Set up event listener for resize
    window.addEventListener("resize", checkMobile)
    
    // Check on mount
    checkMobile()
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
