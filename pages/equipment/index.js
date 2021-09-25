import styles from "../../styles/EquipmentPage.module.css";

function EquipmentPage({ data }) {
  const key = process.env.API_KEY;
  return (
    <div>
      <h3>Equipment Page</h3>
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
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // API_KEY
  const key = process.env.API_KEY;
  // Fetch data from external API
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=50.08&lon=19.91&units=metric&appid=${key}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default EquipmentPage;
