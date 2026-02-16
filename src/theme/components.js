const components = {
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        paddingInline: "1.4rem",
        paddingBlock: "0.7rem",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#ffffff",
        color: "#0b1f2a",
        boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
};

export default components;
