import styles from "../styles/Weather.module.css";

function Weather({ data }) {
  return (
    <div className={styles.container}>
      <p>{data.sys.country}</p>
      <p>{data.name}</p>
      <p>{data.weather[0].description}</p>
      <p>{data.main.temp}</p>
      <p>{data.main.feels_like}</p>
      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt="wthr img"
      />
    </div>
  );
}

export default Weather;
