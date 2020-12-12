import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    color: "#db8024",
    marginBottom: "10px",
  },
  hr: (props: Props) => ({
    border: "none",
    borderTop: "4px solid #333",
    color: "#333",
    overflow: "visible",
    textAlign: "left",
    height: "5px",
    marginBottom: "30px",
    width: "100%",
    margin: 0,

    "&::after": {
      background: "#f5f5f5",
      content: props.titleWithLine,
      padding: "0px 10px 0px 0px",
      position: "relative",
      height: "50px",
      top: "-21px",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
      fontSize: "1.6rem",
      textTransform: "uppercase",
      color: "#db8024",
    },
  }),
});

interface Props {
  title?: string;
  titleWithLine: string;
}

const TitleWithLine: React.FC<Props> = (props: Props) => {
  const { title } = props;

  const classes = useStyles(props);

  if (title) {
    return (
      <>
        <Typography className={classes.title}>{title}</Typography>
        <hr className={classes.hr} />
      </>
    );
  }

  return <hr className={classes.hr} />;
};

export default TitleWithLine;
