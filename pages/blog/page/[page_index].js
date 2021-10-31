import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../../../styles/AllBlogPost.module.css";
import Post from "../../../components/Post";
import { sortByDate } from "../../../utils/sort-by-date";
import { POST_PER_PAGE } from "../../../config";
import Pagination from "../../../components/Pagination";

function AllBlogPostsPage({ posts, numPages, currentPage }) {
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
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const numPages = Math.ceil(files.length / POST_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.page_index) || 1);
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

  const numPages = Math.ceil(files.length / POST_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
};

export default AllBlogPostsPage;
