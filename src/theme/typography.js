const typography = {
  fontFamily: "var(--font-body), system-ui, -apple-system, sans-serif",

  h1: {
    fontFamily: "var(--font-heading)",
    fontWeight: 400,
    fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  h2: {
    fontFamily: "var(--font-heading)",
    fontWeight: 400,
    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
  },

  h3: {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "1.6rem",
    lineHeight: 1.3,
  },

  h4: {
    fontWeight: 600,
    fontSize: "1.3rem",
  },

  body1: {
    fontSize: "1rem",
    lineHeight: 1.7,
  },

  body2: {
    fontSize: "0.9rem",
    lineHeight: 1.6,
  },

  button: {
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.02em",
  },
};

export default typography;
