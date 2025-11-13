
export const THEME_KEY = "theme"

export const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false

  const savedTheme = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  return savedTheme === "dark" || (!savedTheme && prefersDark)
}

export const saveThemePreference = (isDark: boolean) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light")
  }
}
