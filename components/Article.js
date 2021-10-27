import Image from "next/image";
import styles from "../styles/Article.module.css";

function Article() {
  return (
    <>
      <article className={styles.article}>
        <Image
          src="/images/run_08.jpg"
          alt="stadium"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.img}
        />
        <h1>Cracovia Marathon</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          hic vitae maiores at tempore mollitia, repellendus reiciendis quisquam
          aliquam! Voluptate consequuntur natus ex provident, deserunt suscipit
          consequatur, sint commodi at, assumenda facilis ducimus! aliquam!
          Voluptate consequuntur natus ex provident, deserunt suscipit
          consequatur, sint commodi at, assumenda facilis ducimus!
        </p>
      </article>
    </>
  );
}

export default Article;
