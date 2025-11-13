import type { ReactNode } from "react"

export interface INavItem {
  text: string
  icon: ReactNode
  path: string
  isActive?: boolean
  badge?: number | string
  children?: INavItem[]
}

export interface INavSection {
  section: string
  items: INavItem[]
  
}

export interface IThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

export interface ISidebarContextType {
  isCollapsed: boolean
  isHovering: boolean
  isMobile: boolean
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  toggleSidebar: () => void
  showSidebarText: boolean
  drawerWidth: number
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  EXPANDED_DRAWER_WIDTH: number
  COLLAPSED_DRAWER_WIDTH: number
}
