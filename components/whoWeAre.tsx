import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        display: "block",
        marginBottom: theme.spacing(5),
    },
    img: {
        objectFit: "contain",
        width: "100%",
    },
    content: {
        fontFamily: "Roboto, sans-serif",
        color: theme.palette.secondary.main,
    }
}));

const WhoWeAre: React.FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container direction="row" spacing={10}>
                <Grid item md={6} xs={12}>
                    <Box>
                        <img alt="Image d'ilustration de prothèse" className={classes.img} src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"/>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography variant="subtitle1" className={classes.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis risus vulputate, pulvinar odio vel, feugiat nulla.
                        Vestibulum sollicitudin sapien et malesuada eleifend.
                        Nunc id gravida nunc, vitae posuere sapien. Morbi a cursus quam. Morbi velit lectus, porttitor ac auctor id, sollicitudin ac augue.
                        Cras vehicula, quam eget eleifend iaculis, lectus est vehicula lectus, at venenatis eros nibh et metus. Mauris ac egestas augue.
                        Cras vitae dolor eu est sagittis consequat.
                        Integer fermentum enim vitae enim convallis, et vulputate massa vehicula. Praesent lobortis porta placerat.
                        Nunc ac ligula sed velit cursus eleifend. Suspendisse sit amet nulla ligula. Duis et efficitur leo.
                        Aliquam velit nulla, ultricies non semper vel, tempus sed nibh. Nulla semper scelerisque dolor eget tristique. Etiam eu erat sit amet elit tempor efficitur.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhoWeAre