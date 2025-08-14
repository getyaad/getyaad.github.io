import { useState, useEffect } from 'react'
import { getUtmSource, getWhatsAppUrl } from '../config/constants'

export const useUtmTracking = () => {
  const [utmSource, setUtmSource] = useState(null)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  useEffect(() => {
    // Get UTM source from URL on component mount
    const source = getUtmSource()
    setUtmSource(source)
    
    // Generate WhatsApp URL with UTM source
    const url = getWhatsAppUrl(source)
    setWhatsappUrl(url)
  }, [])

  // Function to update UTM source (useful for testing)
  const updateUtmSource = (newSource) => {
    setUtmSource(newSource)
    const url = getWhatsAppUrl(newSource)
    setWhatsappUrl(url)
  }

  return {
    utmSource,
    whatsappUrl,
    updateUtmSource
  }
}
