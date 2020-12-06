import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  title: string;
}

const DividerWithText: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <Container className={classes.container}>
      <Typography align="center" variant="h2" className={classes.contentTitle}>
        {title}
      </Typography>
      <div className={classes.border} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  contentTitle: {
    fontWeight: "bold",
    letterSpacing: "0.4rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
  content: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    fontSize: "1rem",
    fontFamily: "Roboto, sans-serif",
    color: theme.palette.secondary.main,
  },
  border: {
    paddingTop: theme.spacing(3),
    borderBottom: "5px solid #db8024",
    width: "15rem",
  },
  border2: {
    paddingTop: theme.spacing(3),
    borderBottom: "5px solid red",
    width: "15rem",
  },
}));
export default DividerWithText;
