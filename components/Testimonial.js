import styles from "../styles/Testimonial.module.css";
import Image from "next/image";

function Testimonial({ text, img, name, desc }) {
  return (
    <div className={styles.testimonial}>
      <p className={styles.testimonial__text}>{text}</p>

      <div className={styles.testimonial__details}>
        <div className={styles.testimonial__img}>
          <Image
            src={img}
            alt="Miniature portrait of a runner"
            objectFit="cover"
            width={100}
            height={100}
            quality={100}
          />
        </div>
        <div className={styles.testimonial__info}>
          <h4 className={styles.testimonial__name}>{name}</h4>
          <h5 className={styles.testimonial__desc}>{desc}</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
