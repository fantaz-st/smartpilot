import site from "@/settings/site";
import classes from "./Footer.module.css";
import Link from "next/link";
import { Container, Typography } from "@mui/material";

export default function Footer({ menuItems = [] }) {
  const topLevelLinks = menuItems || [];
  const externalLinks = site.footer?.links || [
    { label: "PFST", href: "https://www.pfst.unist.hr" },
    { label: "University of Split", href: "https://www.unist.hr" },
  ];

  return (
    <footer className={classes.wrap}>
      <Container className={classes.container}>
        <div className={classes.topGrid}>
          <div className={classes.brand}>
            <Typography variant="h6" className={classes.brandTitle}>
              {site.name}
            </Typography>

            <Typography variant="body2" className={classes.brandText}>
              {site.description}
            </Typography>
          </div>

          <div className={classes.col}>
            <Typography variant="overline" className={classes.colTitle}>
              Project
            </Typography>

            <div className={classes.colLinks}>
              {topLevelLinks.map((item) => (
                <Link key={item.databaseId} href={item.uri} className={classes.link}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={classes.col}>
            <Typography variant="overline" className={classes.colTitle}>
              Links
            </Typography>

            <div className={classes.colLinks}>
              {externalLinks.map((l, i) => (
                <a key={i} href={l.href} className={classes.link} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.bottom}>
          <Typography variant="body2" className={classes.copy}>
            © {new Date().getFullYear()} {site.footer?.copyright?.owner || "Faculty of Maritime Studies, University of Split"}
          </Typography>

          <div className={classes.bottomLinks}>
            {(site.footer?.bottomLinks || []).map((l, i) => (
              <Link key={i} href={l.href} className={classes.bottomLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
