import * as React from 'react';
import {
  ApplicationContext,
  IApplicationState,
} from '../components/Application/Application';

export function useApplication<S extends IApplicationState>() {
  const application = React.useContext(ApplicationContext);

  if (application === undefined) {
    throw new Error(
      "Couldn't find a application object. Is your component inside ApplicationProvider?"
    );
  }

  if (application) {
    return application as S;
  }

  // FIXME: Figure out a better way to do this
  return application;
}

export default useApplication;
