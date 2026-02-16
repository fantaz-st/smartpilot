import site from "@/settings/site";
import classes from "./Hero.module.css";
import Image from "next/image";
import { Container, Stack, Typography, Button } from "@mui/material";

const getAlignClass = (align) => {
  const v = align?.vertical || "center";
  const h = align?.horizontal || "left";
  return `${classes[`v_${v}`]} ${classes[`h_${h}`]}`;
};

const getOverlay = (overlay) => {
  if (!overlay?.enabled) return "none";
  if (overlay.gradient && overlay.color) return `${overlay.gradient}, ${overlay.color}`;
  if (overlay.gradient) return overlay.gradient;
  if (overlay.color) return overlay.color;
  return "rgba(0,0,0,0.45)";
};

export default function Hero() {
  const hero = site.hero;
  if (!hero || hero.variant !== "background") return null;

  const heightDesktop = hero.height?.desktop || "100vh";
  const heightMobile = hero.height?.mobile || "70vh";

  const bg = hero.background || {};
  const overlay = getOverlay(hero.overlay);
  const alignClass = getAlignClass(hero.align);

  const title = hero.content?.title || site.name;
  const subtitle = hero.content?.subtitle || site.description;
  const kicker = hero.content?.kicker;

  const cta = hero.content?.cta;

  const style = {
    ["--hero-h-desktop"]: heightDesktop,
    ["--hero-h-mobile"]: heightMobile,
    ["--hero-overlay"]: overlay,
  };

  return (
    <section className={classes.wrap} style={style}>
      <div className={classes.bg}>
        {bg.type === "video" ? (
          <video
            className={classes.video}
            src={bg.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={bg.src}
            alt={bg.alt || ""}
            fill
            priority
            className={classes.image}
            sizes="100vw"
            style={{
              objectFit: bg.size || "cover",
              objectPosition: bg.position || "center center",
            }}
          />
        )}
      </div>

      <div className={classes.overlay} />

      <Container className={classes.container}>
        <div className={`${classes.content} ${alignClass}`}>
          <Stack spacing={2} className={classes.stack}>
            {kicker ? (
              <Typography className={classes.kicker} component="div">
                {kicker}
              </Typography>
            ) : null}

            <Typography variant="h1" component="h1" className={classes.title}>
              {title}
            </Typography>

            {subtitle ? (
              <Typography variant="body1" component="p" className={classes.subtitle}>
                {subtitle}
              </Typography>
            ) : null}

            {cta?.href && cta?.label ? (
              <div className={classes.actions}>
                <Button variant="contained" href={cta.href}>
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </Stack>
        </div>
      </Container>
    </section>
  );
}
