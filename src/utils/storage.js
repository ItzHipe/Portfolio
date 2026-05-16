const THEME_KEY = 'portfolio-theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(THEME_KEY)
  } catch {
    return null
  }
}

export function setStoredTheme(theme) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* ignore quota / private mode */
  }
}
