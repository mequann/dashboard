"use client"

import { AppBar, Toolbar, IconButton, Box, Badge, Button, Avatar,Typography } from "@mui/material"
import { Menu as MenuIcon, Mail, Notifications, CalendarMonth, DarkMode, LightMode } from "@mui/icons-material"
import { SearchInput } from "@/shared/ui/SearchInput"
import { useTheme } from "@/hooks/userTheme"
import { useSidebar } from "@/hooks/userSidebar"
import {formatDate}from"@/utils/dateFormatter";
import DropDownSelector from "@/shared/ui/DropDownSlector";
import { useState } from "react"

 const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { drawerWidth, toggleSidebar } = useSidebar()
  // console.log(toggleTheme(),"ppp")
  const languageOptions = ["English", "Amharic", "Afan Oromo", "French", "Arabic"];
const [selectedLanguage, setSelectedLanguage] = useState("English");

const handleLanguageChange = (value: string) => {
  setSelectedLanguage(value);
};


  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <SearchInput ariaLabel="search" sx={{ flex: { xs: 1, md: "auto" } }} />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          <IconButton size="large" color="inherit" aria-label="Open mail">
            <Mail />
          </IconButton>

          <IconButton size="large" color="inherit" aria-label="1 notification">
            <Badge badgeContent={1} color="primary">
              <Notifications />
            </Badge>
          </IconButton>

          <Button
            sx={{
              mx: 2,
              textTransform: "none",
              color: "text.primary",
              display: { xs: "none", sm: "flex" },
            }}
            startIcon={
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarMonth fontSize="small" />
              </Box>
            }
          >
            {formatDate(Date.now())}
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
                fontSize: "1.2rem", // Adjust the icon size if needed
              }}
            >
              🌐 {/* You can replace this with an actual language icon or a flag */}
            </Box>

            <Typography variant="body2" sx={{ mr: 1 }}>
              {selectedLanguage} {/* Default Language */}
            </Typography>

            <DropDownSelector
              data={languageOptions}
              value={selectedLanguage}
              onChange={handleLanguageChange}
              fullWidth={false} // Adjust as needed
            />
          </Box>

          <Avatar
            sx={{ ml: 2, width: 36, height: 36 }}
            alt="User profile"
            src="/images/avatar.jpg"
            aria-label="Open user profile"
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Header