import * as React from "react";
import { ApplicationContext } from "../components/Application/Application";

export default () => {
  const application = React.useContext(ApplicationContext);

  if (application === undefined) {
    throw new Error(
      "Couldn't find a application object. Is your component inside ApplicationProvider?"
    );
  }

  // FIXME: Figure out a better way to do this
  return application;
};
