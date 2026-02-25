import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const content = {
  hr: {
    title: "O projektu",
    p1: "SMARTPILOT je interdisciplinarni projekt usmjeren na digitalizaciju pomorskih informacijskih sustava i povećanje sigurnosti plovidbe malih (non-SOLAS) plovila u Jadranu. Projekt odgovara na ograničenja postojećih analognih alata razvojem naprednog digitalnog peljara koji integrira 360° snimke, GIS i GPS tehnologije.",
    p2: "Sustav omogućuje virtualnu navigaciju i pregled stvarnih ruta, sidrišta, dubina i pomorskih opasnosti kroz intuitivno korisničko sučelje. Uz znanstvenu integraciju podataka i izradu otvorenih metapodataka, SMARTPILOT stvara skalabilnu infrastrukturu znanja za sigurniju plovidbu, edukaciju i upravljanje obalnim prostorom.",
    p3: "Očekuje se da će projekt doprinijeti smanjenju pomorskih nesreća, jačanju digitalne pismenosti te unaprjeđenju lokalne turističke ponude.",
    button: "Više o projektu",
    href: "/projekt/o-projektu",
  },
  en: {
    title: "About the Project",
    p1: "SMARTPILOT is an interdisciplinary project focused on the digitalization of maritime information systems and improving the safety of small (non-SOLAS) vessel navigation in the Adriatic Sea. The project addresses the limitations of existing analog tools by developing an advanced digital pilot guide integrating 360° imagery, GIS and GPS technologies.",
    p2: "The system enables virtual navigation and visualization of real maritime routes, anchorages, depths and hazards through an intuitive user interface. Through scientific data integration and the development of open metadata standards, SMARTPILOT establishes scalable knowledge infrastructure for safer navigation, education and coastal zone management.",
    p3: "The project is expected to contribute to the reduction of maritime accidents, strengthening digital literacy, and enhancing the local tourism offer.",
    button: "More about the project",
    href: "/en/project/about",
  },
};

const HomeAbout = ({ locale = "hr" }) => {
  const t = content[locale] || content.hr;

  return (
    <Container sx={{ pb: { xs: 8, md: 12 } }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t.title}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {t.p1}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {t.p2}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {t.p3}
        </Typography>
      </Box>

      <Link href={t.href}>
        <Button component="span" variant="outlined" sx={{ padding: "0.5rem" }}>
          {t.button}
        </Button>
      </Link>
    </Container>
  );
};

export default HomeAbout;
