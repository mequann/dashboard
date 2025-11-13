"use client";
import type React from "react"
import { Typography as MuiTypography, type TypographyProps as MuiTypographyProps, styled } from "@mui/material"
import { forwardRef } from "react"

// Extend the MUI Typography props
export interface TypographyProps extends MuiTypographyProps {
  component?: React.ElementType
  gutterBottom?: boolean
  noMargin?: boolean
}

// Create styled components for each heading level to ensure consistent usage
export const H1 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h1"
      component="h1"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const H2 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h2"
      component="h2"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const H3 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h3"
      component="h3"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const H4 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h4"
      component="h4"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const H5 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h5"
      component="h5"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const H6 = styled(
  forwardRef<HTMLHeadingElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="h6"
      component="h6"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const Paragraph = styled(
  forwardRef<HTMLParagraphElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="body1"
      component="p"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const Subtitle = styled(
  forwardRef<HTMLParagraphElement, TypographyProps>(({ gutterBottom = true, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="subtitle1"
      component="p"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

export const Caption = styled(
  forwardRef<HTMLParagraphElement, TypographyProps>(({ gutterBottom = false, noMargin, ...props }, ref) => (
    <MuiTypography
      variant="caption"
      component="span"
      ref={ref}
      gutterBottom={gutterBottom && !noMargin}
      sx={{ margin: noMargin ? 0 : undefined, ...props.sx }}
      {...props}
    />
  )),
)({})

// Export a general Typography component that can be used for any variant
export const Typography = MuiTypography
