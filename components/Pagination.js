import Link from "next/link";
import styles from "../styles/Pagination.module.css";

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (nextPage === 1) return <></>;

  return (
    <div className={styles.pagination_wrapper}>
      <ul className={styles.pagination_list}>
        {!isFirst && (
          <Link href={prevPage} passHref>
            <li className={styles.pagination_link}>Previous</li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} passHref>
            <li className={styles.pagination_link}>{i + 1}</li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage} passHref>
            <li className={styles.pagination_link}>Next</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
