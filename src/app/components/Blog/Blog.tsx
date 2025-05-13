import { NOTES } from "@/app/constants/data";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {
        NOTES.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <Link href="https:asdasd.com">See more</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Blog;
