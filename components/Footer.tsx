import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    border: {
      paddingTop: theme.spacing(1),
      borderBottom: "5px solid #db8024",
      width: "auto",
      textAlign: "center"
    }
  }));

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <footer>
            <br />
            <Typography variant="subtitle1" align="center">
                {(new Date().getFullYear() - 1) + "-" + new Date().getFullYear()} © Laboratoire Oraltec - Tous droits réservés
            </Typography>
            <div className={classes.border}></div>
        </footer>
    )
}

export default Footer