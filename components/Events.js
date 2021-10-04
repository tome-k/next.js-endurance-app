import styles from "../styles/Events.module.css";
import AwesomeCard from "./AwesomeCard";

function Events() {
  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h2>Choose your event</h2>
      </div>
      <div className={styles.wrapper}>
        <AwesomeCard
          img="/images/zurich.jpg"
          title="Zurich Marathon"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolore nobis repellendus iusto optio at."
          link="https://www.zuerichmarathon.ch/"
        />
        <AwesomeCard
          img="/images/tokyo.jpg"
          title="Tokyo Marathon"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolore nobis repellendus iusto optio at."
          link="https://www.marathon.tokyo/en/"
        />
        <AwesomeCard
          img="/images/boston.jpg"
          title="Boston Marathon"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolore nobis repellendus iusto optio at."
          link="https://www.baa.org/"
        />
      </div>
    </section>
  );
}

export default Events;
