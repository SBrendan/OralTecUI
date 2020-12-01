import { makeStyles } from "@material-ui/core";
import React from "react";
import DividerWithText from "./DividerLayout";

interface Props {
  sections: React.ReactFragment;
  title: string;
  content?: string;
  backgroundColor: string;
}

const SectionLayout: React.FC<Props> = (props: Props) => {
  const { sections, title, content } = props;

  const classes = useStyles(props);

  return (
    <section className={classes.section}>
      <DividerWithText title={title} content={content || ""} />
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
