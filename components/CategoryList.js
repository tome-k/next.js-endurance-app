import Link from "next/link";
import styles from "../styles/CategoryList.module.css";

function CategoryList({ categories }) {
  return (
    <div className={styles.category_list}>
      <p>Blog Categories</p>
      <ul>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/blog/category/${category.toLowerCase()}`}
            passHref
          >
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
