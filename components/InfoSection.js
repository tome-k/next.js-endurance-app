import styles from "../styles/InfoSection.module.css";
import Image from "next/image";
import Error from "next/error";
import Article from "./Article";

function InfoSection({ data, errorCode }) {
  const date = new Date().toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  if (!data || errorCode) {
    return (
      <Error
        statusCode="503 Service Unavailable"
        title="External Data Fetching Error! We apologize for any inconvenience. Please Try again later"
      />
    );
  }

  return (
    <section className={styles.wrapper}>
      <Article />
      <div className={styles.card}>
        <Image
          className={styles.icon}
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="forecast icon"
          width={65}
          height={65}
          quality={100}
        />
        <div className={styles.body}>
          <p>
            Current Weather <br /> {data.weather[0].description}
          </p>
          <h4>{date}</h4>
          <h2>{data.sys.country}</h2>
          <h3>{data.name}</h3>
          <h4>Temp: {data.main.temp} &#8451;</h4>
          <h4>Pressure: {data.main.pressure} hPa</h4>
          <h4>Wind: {data.wind.speed} m/s</h4>
          <h4>Visibility: {data.visibility} m</h4>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
