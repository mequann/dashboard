// theme/createAppTheme.ts
import { createTheme } from "@mui/material/styles"
import { typography } from "@/theme/typography"

export const createAppTheme = (isDarkMode: boolean) =>
  createTheme({
    typography,
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: { main: "#4070f4" },
      background: {
        default: isDarkMode ? "#121212" : "#f8f9fa",
        paper: isDarkMode ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: isDarkMode ? "#f8f9fa" : "#1a1a1a",
        secondary: isDarkMode ? "#aaaaaa" : "#666666",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
            color: isDarkMode ? "#f8f9fa" : "#1a1a1a",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
            color: isDarkMode ? "#f8f9fa" : "#1a1a1a",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })
