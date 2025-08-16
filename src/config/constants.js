// WhatsApp Configuration
export const WHATSAPP_NUMBER = '917795452489'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// UTM Source mapping for dynamic WhatsApp messages
export const UTM_SOURCE_MESSAGES = {
  'chatgpt.com': 'Waitlist me - ChatGPT',
  'instagram': 'Waitlist me - Instagram',
  'youtube': 'Waitlist me - Youtube',
  'linkedin': 'Waitlist me - Linkedin',
  'twitter': 'Waitlist me - Twitter',
  'facebook': 'Waitlist me - Facebook',
  'reddit': 'Waitlist me - Reddit',
  'quora': 'Waitlist me - Quora',
  'telegram': 'Waitlist me - Telegram',
  'whatsapp': 'Waitlist me - Whatsapp',
  'google': 'Waitlist me - Google',
  'bing': 'Waitlist me - Bing',
  'duckduckgo': 'Waitlist me - Duckduckgo',
  'default': 'Waitlist me - Website'
}

// Brand Colors
export const COLORS = {
  primary: '#6493E6',
  secondary: '#6b7280',
  accent: '#10b981',
  dark: '#1f2937',
  light: '#f9fafb',
  white: '#ffffff',
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
}

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/getyaad/',
  youtube: 'https://www.youtube.com/@getyaad',
  linkedin: 'https://www.linkedin.com/company/getyaad/',
  twitter: 'https://x.com/getyaad',
  privacy: 'https://drive.google.com/file/d/1aHP9P63Vtn3QY1Yz1olTVwflasWAZWB0/view'
}

// App Configuration
export const APP_CONFIG = {
  name: 'Yaad',
  tagline: 'Revise less. Remember more.',
  earlyAccessDate: '27 Aug 2025',
  description: 'Master UPSC PYQs with spaced repetition. Think you know them? Test yourself.',
  features: [
    '30+ Years of PYQs',
    'Science-backed',
    'Free'
  ]
}

// Utility function to get WhatsApp URL with UTM source
export const getWhatsAppUrl = (utmSource = null) => {
  const baseUrl = WHATSAPP_BASE_URL
  
  if (!utmSource) {
    return `${baseUrl}?text=${UTM_SOURCE_MESSAGES.default}`
  }
  
  // Clean the UTM source (remove .com and capitalize)
  const cleanSource = utmSource
    .replace(/\.com$/i, '')
    .toLowerCase()
  
  const message = UTM_SOURCE_MESSAGES[cleanSource] || UTM_SOURCE_MESSAGES.default
  
  return `${baseUrl}?text=${message}`
}

// Utility function to extract UTM source from URL
export const getUtmSource = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('utm_source')
}
