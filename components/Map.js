import styles from "../styles/Map.module.css";
import ReactMapGL from "react-map-gl";
import { useState } from "react";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 50.06,
    longitude: 19.911,
    zoom: 14,
    width: "60%",
    height: "60%",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mariog8/cku83ivq220v217o4zvc5frcr"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      className={styles.map}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
