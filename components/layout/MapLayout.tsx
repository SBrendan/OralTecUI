import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, withStyles } from "@material-ui/core";
import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

interface Props {
  classes: any;
}

class Map extends React.Component<Props, any> {
  public state = {
    viewport: {
      width: "fit",
      height: "40vh",
      latitude: 48.2538059,
      longitude: -1.417573,
      zoom: 15,
    },
  };

  public render() {
    const { classes } = this.props;
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAP_BOX_API}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mar
        {...this.state.viewport}
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
  }
}

const useStyles = (theme) => ({
  content: {
    fontFamily: "Roboto, sans-serif",
    color: theme.palette.secondary.main,
  },
});

export default withStyles(useStyles)(Map);
