import type { TypographyVariantsOptions } from "@mui/material/styles"

// Define responsive typography settings for the Material UI theme
export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

  // Main headings
  h1: {
    fontWeight: 700,
    fontSize: "2.5rem", // 40px base
    lineHeight: 1.2,
    letterSpacing: "-0.01562em",
    marginBottom: "0.5em",
    "@media (max-width:900px)": {
      fontSize: "2.125rem", // 34px on medium screens
    },
    "@media (max-width:600px)": {
      fontSize: "1.875rem", // 30px on small screens
    },
  },

  h2: {
    fontWeight: 700,
    fontSize: "2rem", // 32px base
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
    marginBottom: "0.5em",
    "@media (max-width:900px)": {
      fontSize: "1.75rem", // 28px on medium screens
    },
    "@media (max-width:600px)": {
      fontSize: "1.5rem", // 24px on small screens
    },
  },

  h3: {
    fontWeight: 600,
    fontSize: "1.75rem", // 28px base
    lineHeight: 1.3,
    letterSpacing: "0em",
    marginBottom: "0.5em",
    "@media (max-width:900px)": {
      fontSize: "1.5rem", // 24px on medium screens
    },
    "@media (max-width:600px)": {
      fontSize: "1.25rem", // 20px on small screens
    },
  },

  h4: {
    fontWeight: 600,
    fontSize: "1.5rem", // 24px base
    lineHeight: 1.35,
    letterSpacing: "0.00735em",
    marginBottom: "0.5em",
    "@media (max-width:900px)": {
      fontSize: "1.25rem", // 20px on medium screens
    },
    "@media (max-width:600px)": {
      fontSize: "1.125rem", // 18px on small screens
    },
  },

  h5: {
    fontWeight: 600,
    
    fontSize: "1.25rem", // 20px base
    lineHeight: 1.4,
    letterSpacing: "0em",
    marginBottom: "0.5em",
    "@media (max-width:600px)": {
      fontSize: "1.125rem", // 18px on small screens
    },
  },

  h6: {
    fontWeight: 600,
    fontSize: "1.125rem", // 18px base
    lineHeight: 1.4,
    letterSpacing: "0.0075em",
    marginBottom: "0.5em",
    "@media (max-width:600px)": {
      fontSize: "1rem", // 16px on small screens
    },
  },

  // Body text
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },

  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "0.01071em",
  },

  // Other typography variants
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
    fontWeight: 500,
  },

  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.00714em",
    fontWeight: 500,
  },

  button: {
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    fontWeight: 600,
    textTransform: "none",
  },

  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },

  overline: {
    fontSize: "0.75rem",
    lineHeight: 2.66,
    letterSpacing: "0.08333em",
    fontWeight: 500,
    textTransform: "uppercase",
  },
}
