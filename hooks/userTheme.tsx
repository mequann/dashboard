"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material"
import { createAppTheme } from "@/theme/createAppTheme"
import { getInitialTheme, saveThemePreference } from "@/utils/themeStorage"
import type { IThemeContextType } from "@/types"

const ThemeContext = createContext<IThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setIsDarkMode(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      saveThemePreference(newMode)
      document.documentElement.classList.toggle("dark", newMode)
      return newMode
    })
  }

  const theme = createAppTheme(isDarkMode)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
