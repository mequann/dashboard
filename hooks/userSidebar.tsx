"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"
import { useMediaQuery, useTheme } from "@mui/material"
import type { ISidebarContextType } from "@/types"

const SIDEBAR_COLLAPSED_KEY = "sidebarCollapsed"
const EXPANDED_DRAWER_WIDTH = 240
const COLLAPSED_DRAWER_WIDTH = 70

const SidebarContext = createContext<ISidebarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Load sidebar state from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem(SIDEBAR_COLLAPSED_KEY)
      if (savedState !== null) {
        setIsCollapsed(savedState === "true")
      }
    }
  }, [])

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(isCollapsed))
    }
  }, [isCollapsed])

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    } else {
      setIsCollapsed((prev) => !prev)
    }
  }

  const handleMouseEnter = () => {
    if (isCollapsed && !isMobile) {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
        hoverTimerRef.current = null
      }
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    if (isCollapsed && !isMobile) {
      hoverTimerRef.current = setTimeout(() => {
        setIsHovering(false)
      }, 300)
    }
  }

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
      }
    }
  }, [])

  const showSidebarText = !isCollapsed || (isCollapsed && isHovering)
  const drawerWidth = showSidebarText ? EXPANDED_DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        isHovering,
        isMobile,
        mobileOpen,
        setMobileOpen,
        toggleSidebar,
        showSidebarText,
        drawerWidth,
        handleMouseEnter,
        handleMouseLeave,
        EXPANDED_DRAWER_WIDTH,
        COLLAPSED_DRAWER_WIDTH,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = (): ISidebarContextType => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
