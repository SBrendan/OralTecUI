import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import DividerWithText from "./DividerLayout";

const useStyles = makeStyles((theme: Theme) => ({
  section: (props: Props): any => ({
    backgroundColor: props.backgroundColor,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  }),
}));

interface Props {
  sections: React.ReactFragment;
  title?: string;
  content?: string;
  backgroundColor: string;
  mainTitle?: boolean;
  id?: string;
}

const SectionLayout: React.FC<Props> = (props: Props) => {
  const { sections, title, content, mainTitle, id } = props;

  const classes = useStyles(props);

  return (
    <section className={classes.section} id={id}>
      <DividerWithText
        title={title || ""}
        content={content || ""}
        mainTitle={mainTitle}
      />
      {sections}
    </section>
  );
};

export default SectionLayout;
