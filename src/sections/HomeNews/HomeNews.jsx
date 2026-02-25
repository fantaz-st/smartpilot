import classes from "./HomeNews.module.css";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import PostCard from "@/components/PostCard/PostCard";
import site from "@/settings/site";

const HomeNews = ({ data, locale }) => {
  const newsBase = locale === "hr" ? "/hr/novosti" : "/en/news";

  return (
    <Container sx={{ pb: { xs: 8, md: 12 } }}>
      <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ mb: { xs: 3, md: 4 } }} data-aos="fade-up">
        <Box>
          <Typography variant="h2">{locale === "hr" ? "Najnovije vijesti" : "Latest news"}</Typography>
          <Typography color="text.secondary">{locale === "hr" ? `Friške vijesti sa ${site.name} projekta` : `Fresh updates from the ${site.name} project`}</Typography>
        </Box>

        <Link href={newsBase}>
          <Button component="span" variant="outlined" sx={{ padding: "0.5rem" }}>
            {locale === "hr" ? "Sve novosti" : "All news"}
          </Button>
        </Link>
      </Stack>

      <Grid container spacing={{ xs: 2, md: 3 }} data-aos="fade-up" data-aos-delay="200">
        {data.posts.nodes.slice(0, 6).map((p) => (
          <Grid key={p.id || p.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <PostCard slug={p.slug} title={p.title} date={p.date} locale={locale} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeNews;
