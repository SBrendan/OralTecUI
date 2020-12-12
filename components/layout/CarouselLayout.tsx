import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  project: {
    position: "relative",
    height: "55vh",
    overflow: "hidden",
    padding: "20px",
  },
  img: {
    objectFit: "contain",
    width: "100%",
  },
}));

interface Props {
  item: string;
}

const CarouselLayout: React.FC<Props> = (props: Props) => {
  const { item } = props;
  const classes = useStyles();
  return <CardMedia image={item} className={classes.project} />;
};

export default CarouselLayout;
