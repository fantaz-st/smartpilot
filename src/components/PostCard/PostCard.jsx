"use client";

import Link from "next/link";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import dayjs from "dayjs";

export default function PostCard({ slug, title, date }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardActionArea component={Link} href={`/news/${slug}`} sx={{ height: "100%", alignItems: "stretch" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
          <Typography variant="overline" color="text.secondary">
            {date ? dayjs(date).format("D MMM YYYY") : ""}
          </Typography>

          <Typography variant="h3" sx={{ fontSize: "1.15rem", lineHeight: 1.25 }}>
            {title}
          </Typography>

          <Box sx={{ mt: "auto", pt: 1 }}>
            <Typography component="span" sx={{ fontWeight: 600 }}>
              Read more →
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
