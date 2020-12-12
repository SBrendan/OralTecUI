import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Container } from "next/app";
import React from "react";
import Carousel, { CarouselProps } from "react-material-ui-carousel";
import CarouselLayout from "./CarouselLayout";
import DividerWithText from "./DividerLayout";

const useStyles = makeStyles((theme) => ({
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
  },
}));

interface Props {
  serviceDetails: Service;
}

interface Service {
  servicePicture: string;
  title: string;
  id: number;
  icon: string;
  imagesUrls: string[];
  content: string;
}

interface States {
  autoPlay: boolean;
  timer: number;
  animation: CarouselProps["animation"];
  indicators: boolean;
  timeout: number;
  navButtonsAlwaysVisible: boolean;
  navButtonsAlwaysInvisible: boolean;
}

const ModalLayout: React.FC<Props> = (props: Props) => {
  const { serviceDetails } = props;
  const classes = useStyles();

  const [carouselOption] = React.useState<States>({
    autoPlay: true,
    timer: 5000,
    animation: "fade",
    indicators: true,
    timeout: 500,
    navButtonsAlwaysInvisible: false,
    navButtonsAlwaysVisible: true,
  });

  return (
    <React.Fragment>
      <Container>
        <DividerWithText title={serviceDetails.title} mainTitle />
        <Grid container direction="row" spacing={2}>
          <Grid item md={6} xs={12}>
            <Carousel
              autoPlay={carouselOption.autoPlay}
              interval={carouselOption.timer}
              animation={carouselOption.animation}
              indicators={carouselOption.indicators}
              timeout={carouselOption.timeout}
              navButtonsAlwaysInvisible={
                carouselOption.navButtonsAlwaysInvisible
              }
              navButtonsAlwaysVisible={carouselOption.navButtonsAlwaysVisible}
            >
              {serviceDetails.imagesUrls.map((item, index) => {
                return <CarouselLayout item={item} key={index} />;
              })}
            </Carousel>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="subtitle1" className={classes.content}>
              {serviceDetails.content}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ModalLayout;
