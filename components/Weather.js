import styles from "../styles/Weather.module.css";
import Image from "next/image";

function Weather({ data }) {
  const date =
    new Date().toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      //   hour: "2-digit",
      //   minute: "2-digit",
    }) + " ";
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Image
          className={styles.icon}
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="forecast icon"
          width={70}
          height={70}
          quality={100}
        />
        <div className={styles.body}>
          <h4>{date}</h4>
          <h2>{data.sys.country}</h2>
          <h3>{data.name}</h3>
          <h4>{data.weather[0].description}</h4>
          <h5>{data.main.temp}</h5>
          <h5>{data.main.feels_like}</h5>
        </div>
      </div>
    </div>
  );
}

export default Weather;
