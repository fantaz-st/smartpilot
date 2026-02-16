"use client";

import PostCard from "@/components/PostCard/PostCard";
import classes from "./NewsGrid.module.css";

export default function NewsGrid({ posts = [] }) {
  return (
    <div className={classes.grid}>
      {posts.map((p) => (
        <PostCard
          key={p.id || p.slug}
          slug={p.slug}
          title={p.title}
          date={p.date}
        />
      ))}
    </div>
  );
}
