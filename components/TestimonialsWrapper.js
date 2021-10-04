import styles from "../styles/TestimonialsWrapper.module.css";

function TestimonialsWrapper(props) {
  return <section className={styles.container}>{props.children}</section>;
}

export default TestimonialsWrapper;
