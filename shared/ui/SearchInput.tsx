"use client"

import { InputBase, styled, alpha, SxProps, Theme } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"

// Search component with styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

// Define prop types for SearchInput, including the sx prop
interface SearchInputProps {
  placeholder?: string
  ariaLabel?: string
  className?: string
  sx?: SxProps<Theme>  // Add the sx prop for inline styling
}

export const SearchInput = ({ placeholder = "Search here...", ariaLabel = "search", className, sx }: SearchInputProps) => {
  return (
    <Search
      sx={{
        bgcolor: "rgba(0,0,0,0.05)",
        borderRadius: "8px",
        flex: { xs: 1, md: "auto" },
        ...sx,  // Apply sx prop here
      }}
      className={className}
    >
      <SearchIconWrapper>
        <SearchIcon aria-hidden="true" />
      </SearchIconWrapper>
      <StyledInputBase placeholder={placeholder} inputProps={{ "aria-label": ariaLabel }} />
    </Search>
  )
}
