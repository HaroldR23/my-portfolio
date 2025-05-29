"use client";

import { NOTES, READ_MORE } from "@/app/constants/data/data";
import { 
  BLOG_CONTAINER, 
  BLOG_GRID,
  BLOG_ITEM, 
  BLOG_ITEM_DESCRIPTION, 
  BLOG_ITEM_LINK, 
  BLOG_ITEM_TITLE, 
  BLOG_SUB_CONTAINER, 
  BLOG_TITLE 
} from "@/app/constants/styles/blogStyles";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import Link from "next/link";

const Blog = () => {
  const { language } = usePreferencesContext();

  return (
    <div id="blog" className={BLOG_CONTAINER}>
      <div className={BLOG_SUB_CONTAINER}>
        <h1 className={BLOG_TITLE}>Blog</h1>
        <div className={BLOG_GRID}>
          {NOTES[language].map((note) => (
            <div
              key={note.id}
              className={BLOG_ITEM}
            >
              <h2 className={BLOG_ITEM_TITLE}>
                {note.title}
              </h2>
              <p className={BLOG_ITEM_DESCRIPTION}>
                {note.description}
              </p>
              <Link
                href={note.url}
                className={BLOG_ITEM_LINK}
                target="_blank"
              >
                {READ_MORE[language]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
