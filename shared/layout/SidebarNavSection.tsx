"use client"

import { Box, Typography, List, Collapse } from "@mui/material"
import { SidebarNavItem } from "./SidebarNavItem"
import { useSidebar } from "@/hooks/userSidebar"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { INavSection } from "@/types"

interface SidebarNavSectionProps {
  section: INavSection
}

export const SidebarNavSection = ({ section }: SidebarNavSectionProps) => {
  const { showSidebarText } = useSidebar()
  const pathname = usePathname()

  // State to track the open/close state of submenus
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const handleToggle = (text: string) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }))
  }

  return (
    <Box className="sidebar-section">
      {showSidebarText && (
        <Typography className="sidebar-section-title " component="h2"
        sx={{ ml: 2, fontWeight: 'bold', color: 'text.primary' }}>
          {section.section}
        </Typography>
      )}
      <List disablePadding>
        {section.items.map((item) => (
          <div key={item.text}>
            {/* Check if the item has children */}
            <SidebarNavItem
              item={item}
              isActive={pathname === item.path}
              
              // onToggle={handleToggle}
            />
            {/* Render submenus (children) */}
            {item.children && (
              <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.children.map((child) => (
                    <SidebarNavItem key={child.text} item={child} isActive={pathname === child.path} />
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  )
}
