import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import { Box, Container, Typography } from "@mui/material";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import { wpLangFromLocale } from "@/lib/lang";

export const revalidate = 300;

export default async function NewsIndex({ title, locale }) {
  const siteKey = process.env.SITE_KEY;
  if (!siteKey) throw new Error("Missing SITE_KEY env var");

  const data = await wpFetch(ALL_NEWS, {
    first: 24,
    after: null,
    search: null,
    category: null,
    tag: null,
    year: null,
    month: null,
    order: "DESC",
    terms: [siteKey],
    lang: wpLangFromLocale(locale),
  });

  const posts = data?.posts?.nodes || [];

  return (
    <Box component="main" sx={{ pt: `calc(var(--header-h, 72px) + 48px)`, pb: { xs: 8, md: 10 } }}>
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 2, md: 3 } }}>
          {title}
        </Typography>
        <NewsGrid posts={posts} />
      </Container>
    </Box>
  );
}
