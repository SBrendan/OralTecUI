import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

interface States {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map: React.FC = () => {
  const [viewport, onViewportChange] = React.useState<States>({
    width: "fit",
    height: "40vh",
    latitude: 48.2538059,
    longitude: -1.417573,
    zoom: 15,
  });

  const classes = useStyles();

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={process.env.MAP_BOX_API}
      onViewportChange={(e) => onViewportChange(e)}
      mar
      {...viewport}
    >
      <Marker
        latitude={48.2538059}
        longitude={-1.417573}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#DB8024" />
        <Typography variant="caption" className={classes.content}>
          Oraltec
        </Typography>
      </Marker>
    </ReactMapGL>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    fontFamily: "Roboto, sans-serif",
    color: theme.palette.secondary.main,
  },
}));

export default Map;
