import { sha256 } from 'js-sha256'

// Generate a user identifier from IP and User-Agent
export function generateUserIdentifier(request: Request): string {
  const ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  
  // Hash to anonymize
  return sha256(ip + userAgent).substring(0, 16)
}

// Simple honeypot check
export function checkHoneypot(honeypot: string | null): boolean {
  return !honeypot || honeypot === ''
}

// Simple rate limiting using timestamp
export function checkTimestamp(timestamp: number): boolean {
  const now = Date.now()
  const minTime = 3000 // Minimum 3 seconds to fill form
  const maxTime = 3600000 // Maximum 1 hour
  
  const elapsed = now - timestamp
  return elapsed >= minTime && elapsed <= maxTime
}

// Sanitize text input
export function sanitizeText(text: string): string {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 5000) // Enforce max length
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
