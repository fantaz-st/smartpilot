import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import classes from "./HomeAbout.module.css";

const copy = {
  hr: {
    title: "O projektu",
    p1: "SMARTPILOT je interdisciplinarni projekt usmjeren na digitalizaciju pomorskih informacijskih sustava i povećanje sigurnosti plovidbe malih (non-SOLAS) plovila u Jadranu. Projekt odgovara na ograničenja postojećih analognih alata razvojem naprednog digitalnog peljara koji integrira 360° snimke, GIS i GPS tehnologije.",
    p2: "Sustav omogućuje virtualnu navigaciju i pregled stvarnih ruta, sidrišta, dubina i pomorskih opasnosti kroz intuitivno korisničko sučelje. Uz znanstvenu integraciju podataka i izradu otvorenih metapodataka, SMARTPILOT stvara skalabilnu infrastrukturu znanja za sigurniju plovidbu, edukaciju i upravljanje obalnim prostorom.",
    p3: "Očekuje se da će projekt doprinijeti smanjenju pomorskih nesreća, jačanju digitalne pismenosti te unaprjeđenju lokalne turističke ponude.",
    cta: "Više o projektu",
    href: "/projekt/o-projektu",
  },
  en: {
    title: "About the project",
    p1: "SMARTPILOT is an interdisciplinary project focused on the digitalization of maritime information systems and improving the safety of navigation for small (non-SOLAS) vessels in the Adriatic. The project addresses the limitations of existing analog tools by developing an advanced digital pilot guide that integrates 360° imagery, GIS and GPS technologies.",
    p2: "The system enables virtual navigation and the review of real routes, anchorages, depths and maritime hazards through an intuitive user interface. With scientific data integration and the creation of open metadata, SMARTPILOT builds scalable knowledge infrastructure for safer navigation, education and coastal zone management.",
    p3: "The project is expected to contribute to reducing maritime accidents, strengthening digital literacy, and improving the local tourism offering.",
    cta: "More about the project",
    href: "/en/project/about",
  },
};

export default function HomeAbout({ locale = "hr" }) {
  const t = copy[locale] || copy.hr;

  return (
    <section className={classes.wrap}>
      <Container className={classes.container}>
        <div className={classes.panel}>
          <div className={classes.grid}>
            <div className={classes.left}>
              <Typography variant="h2" className={classes.title}>
                {t.title}
              </Typography>

              <div className={classes.text}>
                <Typography variant="body1" color="text.secondary" className={classes.p}>
                  {t.p1}
                </Typography>
                <Typography variant="body1" color="text.secondary" className={classes.p}>
                  {t.p2}
                </Typography>
                <Typography variant="body1" color="text.secondary" className={classes.p}>
                  {t.p3}
                </Typography>
              </div>

              <Link href={t.href} className={classes.ctaLink}>
                <Button component="span" variant="outlined" className={classes.cta}>
                  {t.cta}
                </Button>
              </Link>
            </div>

            <div className={classes.right} aria-hidden="true">
              <div className={classes.art}>
                <div className={classes.artInner} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
