import Link from "next/link";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import PostCard from "@/components/PostCard/PostCard";
import site from "@/settings/site";
import Hero from "@/components/Hero/Hero";
import Spacer from "@/components/Spacer/Spacer";

export default async function Page() {
  const data = await wpFetch(ALL_NEWS, {
    terms: [process.env.SITE_KEY],
  });
  return (
    <Box component="main">
      <Hero/>
<Spacer size={{ mobile: "md", desktop: "xl" }} />

      <Container sx={{ pb: { xs: 8, md: 12 } }}>
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ mb: { xs: 3, md: 4 } }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}>
              Latest posts
            </Typography>
            <Typography color="text.secondary">Fresh updates from the newsroom.</Typography>
          </Box>

          <Link href="/news">
            <Button component="span" variant="outlined">
              View all
            </Button>
          </Link>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data.posts.nodes.slice(0, 6).map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PostCard slug={p.slug} title={p.title} date={p.date} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
