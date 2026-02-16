const site = {
  name: "SmartPilot",
  description: "Digitalni peljar i interaktivni sustav za navigaciju i peljarenje malih plovila",
  locale: "en",
  menu: "smartpilot",

header: {
  sticky: true,
  transparent: false,
  height: 72,
  solidOnScroll: true,
  solidOnScrollOffset: 12,
},


  hero: {
    variant: "background",
    height: { desktop: "100vh", mobile: "70vh" },
    background: { type: "image", src: "/images/hero-smartpilot.png", alt: "SmartPilot hero" },
    overlay: { enabled: true, gradient: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.75))" },
    content: {
      kicker: "SMARTPILOT",
      title: "Digital Pilotage for Small Craft",
      subtitle:
        "Interdisciplinary contribution to digitalization of maritime information systems and safe navigation.",
    },

    align: { vertical: "center", horizontal: "left" },
  },

  footer: {
  variant: "simple", // future-proof

  summary: {
    title: "SmartPilot",
    text: "Digitalni peljar i interaktivni sustav za navigaciju i peljarenje malih plovila.",
  },

  columns: [
    {
      title: "Project",
      links: [
        { label: "Home", href: "/" },
        { label: "News", href: "/news" },
        { label: "Project", href: "/Project" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Links",
      links: [
        { label: "PFST", href: "https://www.pfst.unist.hr" },
        { label: "University of Split", href: "https://www.unist.hr" },
      ],
    },
  ],

  bottomLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Impressum", href: "/impressum" },
  ],

  copyright: {
    owner: "Faculty of Maritime Studies, University of Split",
    year: "auto",
  },
},
backToTop: {
  enabled: true,
  showAfter: 300,     // px scrolled before showing
  position: "right",  // right | left
},

};

export default site;
