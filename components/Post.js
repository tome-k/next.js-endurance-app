import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Post.module.css";
import CategoryLabel from "./CategoryLabel";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <Image
        src={post.frontmatter.cover_image}
        alt="images"
        height={400}
        width={630}
        className={styles.post_img}
      />

      <div className={styles.post_category}>
        <span className={styles.date}>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </span>
        <div>{post.frontmatter.date}</div>
      </div>

      <div className={styles.post_title}>
        <h4>{post.frontmatter.title}</h4>
        <p>{post.frontmatter.excerpt}</p>
      </div>

      <div className={styles.post_links_container}>
        <div className={styles.post_items}>
          <div>
            <Image
              src={post.frontmatter.author_image}
              alt="images"
              height={80}
              width={80}
              className={styles.post_author_img}
            />
          </div>
          <p>{post.frontmatter.author}</p>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  );
}

export default Post;
