import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  backgroundClassName: string;
  children: React.ReactNode;
}

function HeroLayout(props: Props) {
  const classes = useStyles();
  const { backgroundClassName, children } = props;

  return (
    <React.Fragment>
      <section className={classes.root}>
        <Container className={classes.container}>
          <img
            src="/static/img/Wonder.png"
            alt="wonder"
            width="147"
            height="80"
          />
          {children}
          <div className={classes.backdrop} />
          <div className={clsx(classes.background, backgroundClassName)} />
          <img
            className={classes.arrowDown}
            src="/static/img/ArrowDown.png"
            height="16"
            width="12"
            alt="arrow down"
          />
        </Container>
      </section>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4),
  },
}));

export default HeroLayout;
