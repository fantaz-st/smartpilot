import { wpFetch } from "@/lib/wpFetch";
import { POST_BY_SLUG } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import Image from "next/image";
import classes from "./page.module.css";
import { fmtDate } from "@/functions/date";

export const revalidate = 300;

export default async function Post(props) {
  const { slug } = await props.params;

  const data = await wpFetch(POST_BY_SLUG, {
    slug,
    terms: [process.env.SITE_KEY],
  });

  const p = data?.post;
  if (!p) return notFound();

  if (process.env.SITE_KEY && p.projectSites && !p.projectSites.nodes?.length) return notFound();

  const blocks = Array.isArray(p.blocks) ? p.blocks : typeof p.blocks === "string" ? JSON.parse(p.blocks) : [];

  return (
    <Box component="article" className={classes.article}>
      <Container className={classes.container}>
        <header className={classes.header}>
          <Typography variant="h2" className={classes.title} data-aos="fade-up">
            {p.title}
          </Typography>

          <div className={classes.meta} data-aos="fade-up" data-aos-delay="80">
            {p.date ? <span className={classes.metaText}>{fmtDate(p.date)}</span> : null}
          </div>
        </header>

        {p.featuredImage ? (
          <div className={classes.heroMedia} data-aos="fade-up" data-aos-delay="140">
            <Image
              src={p.featuredImage.node.sourceUrl}
              alt={p.featuredImage.node.altText || p.title}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 92vw"
              className={classes.heroImage}
            />
          </div>
        ) : null}

        <div
          className={classes.content}
          data-aos="fade-up"
          data-aos-delay={p.featuredImage ? "220" : "120"}
        >
          {blocks.map((block, i) => (
            <BlockRenderer block={block} key={block?.clientId || i} />
          ))}
        </div>
      </Container>
    </Box>
  );
}
