import fs from "fs";
import path from "path";
import Head from "next/head";
import Post from "../../../components/Post";
import styles from "../../../styles/AllBlogPost.module.css";
import { getPosts } from "../../../utils/post";
import matter from "gray-matter";
import CategoryList from "../../../components/CategoryList";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
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
      <h3 className={styles.blog_heading}>Post in {categoryName}</h3>
      <CategoryList categories={categories} />
      <div className={styles.blog_container}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // get categories
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
