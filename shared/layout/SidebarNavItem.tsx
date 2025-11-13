'use client'

import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
  ListItemButton,
} from "@mui/material"
import Link from "next/link"
import { useSidebar } from "@/hooks/userSidebar"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import type { INavItem } from "@/types"
import { useEffect, useState } from "react"

interface SidebarNavItemProps {
  item: INavItem
  isActive: boolean
}

export const SidebarNavItem = ({ item, isActive }: SidebarNavItemProps) => {
  const { showSidebarText } = useSidebar()
  const [expanded, setExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = (event: React.MouseEvent) => {
    if (item.children) {
      event.preventDefault()
      setExpanded((prev) => !prev)
    }
  }

  const listItem = (
    <ListItemButton
      component={Link}
      href={item.path}
      onClick={handleClick}
      selected={isActive}
      sx={{
        color: isActive ? "primary.main" : "inherit",
        justifyContent: !showSidebarText ? "center" : "flex-start",
        px: !showSidebarText ? 1 : 2,
        textAlign: "left",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: !showSidebarText ? 0 : 20,
          color: isActive ? "primary.main" : "inherit",
          mr: !showSidebarText ? 0 : 2,
          justifyContent: "center",
        }}
      >
        {item.icon}
      </ListItemIcon>

      {showSidebarText && <ListItemText primary={item.text} />}

      {item.children && (
        <ListItemIcon sx={{ ml: "auto" }}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
      )}

      {showSidebarText && item.badge && (
        <Box
          component="span"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
          }}
          aria-label={`${item.badge} notifications`}
        >
          {item.badge}
        </Box>
      )}
    </ListItemButton>
  )

  return (
    <>
      {isMounted ? (
        <Tooltip
          title={!showSidebarText ? item.text : ""}
          placement="right"
          arrow
          disableHoverListener={showSidebarText}
          
        >
          {listItem}
        </Tooltip>
      ) : (
        listItem
      )}

      {isMounted && expanded && item.children && (
        <Box sx={{ paddingLeft: 3 }}>
          {item.children.map((child) => (
            <SidebarNavItem key={child.text} item={child} isActive={false} />
          ))}
        </Box>
      )}
    </>
  )
}
