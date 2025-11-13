"use client"

import { Box, Drawer } from "@mui/material"
import { SidebarHeader } from "@/shared/layout/SidebarHeader"
import { SidebarNavSection } from "./SidebarNavSection"
import { useSidebar } from "@/hooks/userSidebar"
import { navItems } from "@/config/navigation"

export const Sidebar = () => {
  const { mobileOpen, setMobileOpen, drawerWidth, handleMouseEnter, handleMouseLeave, EXPANDED_DRAWER_WIDTH } =
    useSidebar()

  const sidebarContent = (
    <Box sx={{ overflow: "auto", height: "100%" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SidebarHeader />
      {navItems.map((section) => (
        <SidebarNavSection key={section.section} section={section} />
      ))}
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
      aria-label="Main navigation"
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: EXPANDED_DRAWER_WIDTH,
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "1px solid rgba(0,0,0,0.1)",
            overflowX: "hidden",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            zIndex: 1,
          },
        }}
        open
      >
        {sidebarContent}
      </Drawer>
    </Box>
  )
}
