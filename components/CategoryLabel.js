import Link from "next/link";
import styles from "../styles/CategoryLabel.module.css";
function CategoryLabel({ children }) {
  return (
    <div>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a className={styles.category_link}>{children}</a>
      </Link>
    </div>
  );
}

export default CategoryLabel;
