"use client"

import { Box, IconButton } from "@mui/material"
import { ChevronLeft } from "@mui/icons-material"
import Image from "next/image"
import { useSidebar } from "@/hooks/userSidebar"
import { H6 } from "@/shared/ui/typography"

export const SidebarHeader = () => {
  const { showSidebarText, toggleSidebar, isMobile } = useSidebar()

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: !showSidebarText ? "center" : "space-between",
        p: 2,
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src="/images/logo.png" alt="Trinta Logo" width={32} height={32} />
        {showSidebarText && <H6 sx={{ ml: 1, fontWeight: "bold", margin: 0 }}>Trinta</H6>}
      </Box>
      {!isMobile && showSidebarText && (
        <IconButton onClick={toggleSidebar} aria-label="Collapse sidebar">
          <ChevronLeft />
        </IconButton>
      )}
    </Box>
  )
}
