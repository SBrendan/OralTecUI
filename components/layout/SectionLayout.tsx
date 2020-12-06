import { makeStyles } from "@material-ui/core";
import React from "react";
import DividerWithText from "./DividerLayout";

interface Props {
  sections: React.ReactFragment;
  title: string;
  backgroundColor: string;
  id?: string;
}

const SectionLayout: React.FC<Props> = (props: Props) => {
  const { sections, title, id } = props;

  const classes = useStyles(props);

  return (
    <section className={classes.section} id={id}>
      <DividerWithText title={title} />
      {sections}
    </section>
  );
};

const useStyles = makeStyles({
  section: (props: Props) => ({
    backgroundColor: props.backgroundColor,
  }),
});

export default SectionLayout;
