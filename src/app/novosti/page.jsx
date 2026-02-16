import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import { Box, Container, Typography } from "@mui/material";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import site from "@/settings/site";

export const revalidate = 300;

export default async function NewsPage() {
const data = await wpFetch(ALL_NEWS, {
  first: 24,
  after: null,
  search: null,
  category: null,
  tag: null,
  year: null,
  month: null,
  order: "DESC",
  terms: [process.env.SITE_KEY],
});



  const posts = data?.posts?.nodes || [];

  return (
    <Box component="main" sx={{ pt: `calc(var(--header-h, 72px) + 48px)`, pb: { xs: 8, md: 10 } }}>
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 2, md: 3 } }}>
          Novosti
        </Typography>

        <Typography color="text.secondary" sx={{ maxWidth: 760, mb: { xs: 4, md: 5 } }}>
          Friške vijesti sa {site.name} projekta
        </Typography>

        <NewsGrid posts={posts} />
      </Container>
    </Box>
  );
}
