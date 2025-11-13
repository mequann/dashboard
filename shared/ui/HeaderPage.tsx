import { Box } from "@mui/material"
import { H1, Subtitle } from "@/shared/ui/typography"
import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
}

export const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        mb: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <Box>
        <H1 noMargin>{title}</H1>
        {description && (
          <Subtitle color="text.secondary" gutterBottom={false}>
            {description}
          </Subtitle>
        )}
      </Box>
      {actions && <Box sx={{ mt: { xs: 2, md: 0 } }}>{actions}</Box>}
    </Box>
  )
}
