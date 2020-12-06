import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuItems = [
    { menuTitle: "Qui Sommes-nous ?", pageURL: "#who" },
    { menuTitle: "L'équipe", pageURL: "#team" },
    { menuTitle: "Services", pageURL: "#service" },
    { menuTitle: "Equipement", pageURL: "#equipement" },
    { menuTitle: "Nous Contacter", pageURL: "#contact" },
  ];

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.customToolBar}>
          <Container className={classes.navbarDisplayFlex}>
            <Typography
              component="h2"
              variant="h5"
              noWrap
              color='textPrimary'
              align='center'
            >
              {props.title}
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  id="menu-appbar"
                  anchor="right"
                  keepMounted
                  open={open}
                  onClose={handleClose}
                >
                  <Typography variant="h2" color="primary">Oraltec</Typography>
                  <List
                    aria-labelledby="main navigation"
                    disablePadding={true}
                  >
                    {menuItems.map((section) => (
                      <Link
                        key={section.menuTitle}
                        href={section.pageURL}
                        className={classes.linkText}
                        onClick={handleClose}
                      >
                        <ListItem button key={section.menuTitle}>
                          <ListItemText primary={section.menuTitle} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
                <div className={classes.headerOptions}>
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navbarDisplayFlex}
                    disablePadding={true}
                  >
                    {menuItems.map((section) => (
                      <Link
                        key={section.menuTitle}
                        href={section.pageURL}
                        className={classes.linkText}
                      >
                        <ListItem>
                          <ListItemText primary={section.menuTitle} classes={{ primary: classes.title }} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </div>
              )}
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "0.6rem"
    }
  },
  customToolBar: {
    minHeight: "0",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  headerOptions: {
    display: "flex",
    justifyContent: "space-between"
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
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingBottom: "none",
  },
}));

export default Header;
