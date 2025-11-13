"use client"

import type React from "react"
import { Box } from "@mui/material"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { SidebarProvider } from "@/hooks/userSidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            mt: "64px",
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }}
        >
          {children}
        </Box>
      </Box>
    </SidebarProvider>
  )
}
