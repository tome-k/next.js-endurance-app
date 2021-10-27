import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SingleBlogPost.module.css";
import Head from "next/head";

function SingleBlogPostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <>
      <Head>
        <title>blog | {title}</title>
      </Head>
      <div className="center">
        <Link href="/blog">
          <a className={styles.link}>Go Back</a>
        </Link>
        <div className={styles.post_container}>
          <div className={styles.post_items}>
            <h1 className={styles.post_title}>{title}</h1>
            <p className={styles.post_category}>{category}</p>
          </div>
          <img
            src={cover_image}
            alt="Run Of Colors"
            className={styles.post_img}
          />
          <div className={styles.post_info}>
            <div className={styles.post_info_wrapper}>
              <Image
                src={author_image}
                alt="images"
                height={80}
                width={80}
                className={styles.post_info_img}
              />
              <h6>{author}</h6>
            </div>
            <div className={styles.post_date}>{date}</div>
          </div>
          <div className={styles.post_txt}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
    revalidate: 600,
  };
};

export default SingleBlogPostPage;
