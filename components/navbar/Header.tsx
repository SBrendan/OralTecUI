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
        <Toolbar>
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
            >
              {sections.map((section) => (
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  href={section.url}
                  className={classes.linkText}
                >
                  <ListItem>
                    <ListItemText primary={section.title} />
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
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}));

export default Header;
