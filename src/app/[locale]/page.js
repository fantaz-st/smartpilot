import { Box } from "@mui/material";
import { wpFetch } from "@/lib/wpFetch";
import { ALL_NEWS } from "@/lib/queries";
import Hero from "@/components/Hero/Hero";
import Spacer from "@/components/Spacer/Spacer";
import HomeAbout from "@/sections/HomeAbout/HomeAbout";
import { wpLangFromLocale } from "@/lib/lang";
import HomeNews from "@/sections/HomeNews/HomeNews";

export default async function Page({ params }) {
  const { locale } = await params;

  const data = await wpFetch(ALL_NEWS, {
    terms: [process.env.SITE_KEY],
    lang: wpLangFromLocale(locale),
    first: 6,
    order: "DESC",
  });

  return (
    <Box component="main">
      <Hero />
      <Spacer size={{ mobile: "md", desktop: "xl" }} />
      <HomeAbout locale={locale} />
      {data?.posts?.nodes?.length ? <HomeNews data={data} locale={locale} /> : null}
    </Box>
  );
}
