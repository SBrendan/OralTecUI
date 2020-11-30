import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props { }

function Hardware(props: Props) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container direction="row" spacing={10}>
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
                <Grid item md={6} xs={12}>
                    <Box>
                        <img className={classes.img} src="https://www.amanngirrbach.com/management/files/products/images/700/product.jpg" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

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

export default Hardware