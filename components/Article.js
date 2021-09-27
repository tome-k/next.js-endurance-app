import styles from "../styles/Article.module.css";
import Image from "next/image";

function Weather({ data }) {
  const date = new Date().toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <Image
          src="/images/run_02.jpg"
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

export default Weather;
