import {
  AppBar,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

interface Props {
  sections: any[];
  title: string;
}

function Header(props: Props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.customToolBar}>
          <Container className={classes.navbarDisplayFlex}>
            <Typography
              component="h2"
              variant="h5"
              noWrap
              color='textPrimary'
              align='center'
            >
              {title}
            </Typography>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
              disablePadding={true}
            >
              {sections.map((section) => (
                <Link
                  key={section.title}
                  href={section.url}
                  className={classes.linkText}
                >
                  <ListItem>
                    <ListItemText primary={section.title} classes={{ primary: classes.title }} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingBottom: "none",
  },
  customToolBar: {
    minHeight: "0",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#293842`,
    borderBottom: "6px solid #f4f4f4",
    "&:hover": {
      color: "#db8024",
      textDecoration: "none",
      borderBottom: "6px solid #db8024",
    },
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "0.5rem"
    }
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}));

export default Header;
