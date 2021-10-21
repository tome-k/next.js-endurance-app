import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/AllBlogPost.module.css";
import Post from "../../components/Post";

function AllBlogPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>blog | running-passion</title>
        <meta
          name="description"
          content="Blog about running with passion, articles and reports"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.blog_heading}>Blog Posts</h3>
      <div className={styles.blog_container}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default AllBlogPostsPage;
