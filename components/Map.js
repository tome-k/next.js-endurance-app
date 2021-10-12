import styles from "../styles/Map.module.css";
import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 50.06,
    longitude: 19.911,
    zoom: 13.5,
    width: "80%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mariog8/cku83ivq220v217o4zvc5frcr"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      className={styles.map}
      {...viewport}
      //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {/* <Marker
        longitude={19.911}
        latitude={50.065}
        offsetLeft={20}
        offsetTop={10}
      >
        <p className={styles.marker}>📌</p>
      </Marker> */}
    </ReactMapGL>
  );
}

export default Map;
