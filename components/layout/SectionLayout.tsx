import { makeStyles } from "@material-ui/core";
import React from "react";
import { theme } from "../../theme";
import DividerWithText from "./DividerLayout";

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
      <DividerWithText title={title || ""} content={content || ""} mainTitle={mainTitle} />
      {sections}
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: (props: Props) => ({
    backgroundColor: props.backgroundColor,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  }),
}));

export default SectionLayout;
