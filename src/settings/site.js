const site = {
  name: "SmartPilot",
  description: "Digitalni peljar i interaktivni sustav za navigaciju i peljarenje malih plovila",
  locale: "en",
  menu: {
    hr: "main-menu-hr",
    en: "main-menu-en",
  },

  header: {
    sticky: true,
    transparent: false,
    height: 72,
    solidOnScroll: true,
    solidOnScrollOffset: 12,
  },

  hero: {
    variant: "background",
    height: { desktop: "80vh", mobile: "auto" },
    pageBackground: "#ececef",
    panel: {
      background: "#f7f7f8",
      color: "#173f8a",
    },
    media: {
      type: "image",
      src: "/images/smartpilot-hero.png",
      alt: "SmartPilot hero",
      size: "cover",
      position: "center center",
    },
    content: {
      en: {
        kicker: "project",
        title: "SMARTPILOT",
        subtitle: "Digital Pilot Book and Interactive System for Navigation and Pilotage of Small Vessels",
        cta: {
          href: "/en/about-project",
          label: "Learn More",
        },
      },
      hr: {
        kicker: "projekt",
        title: "SMARTPILOT",
        subtitle: "Digitalni peljar i interaktivni sustav za navigaciju i peljarenje malih plovila",
        cta: {
          href: "/hr/o-projektu",
          label: "Saznaj više",
        },
      },
    },
  },

  footer: {
    variant: "simple",

    summary: {
      title: "SmartPilot",
      text: {
        en: "Digital Pilot Book and Interactive System for Navigation and Pilotage of Small Vessels",
        hr: "Digitalni peljar i interaktivni sustav za navigaciju i peljarenje malih plovila",
      },
    },

    links: [
      { label: "PFST", href: "https://www.pfst.unist.hr" },
      { label: "University of Split", href: "https://www.unist.hr" },
    ],

    bottomLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Impressum", href: "/impressum" },
    ],

    copyright: {
      owner: "Faculty of Maritime Studies, University of Split",
      vlasnik: "Sveučilište u Splitu, Pomorski fakultet",
      year: "auto",
    },
  },

  backToTop: {
    enabled: true,
    showAfter: 300,
    position: "right",
  },
};

export default site;
