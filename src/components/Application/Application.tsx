import React from "react";
import BaseView from "../BaseView";
import { IBaseViewState } from "../BaseView/BaseView";

interface IApplicationProps {
  children: any;
}

interface IApplicationState extends IBaseViewState {}

export const ApplicationContext = React.createContext<IApplicationState>(null);

export class Application extends BaseView<
  IApplicationProps,
  IApplicationState
> {
  getLoadingComponent() {
    return <></>;
  }

  isLoadingOnStartup(): boolean {
    return true;
  }

  onMount(): void {
    this.loadApplication();
  }

  async loadApplication() {
    this.setLoading(true);
    await loadAsync(fontsToLoad);
    const firebaseApp = initializeApp(firebaseConfig);

    const analytics = getAnalytics(firebaseApp);

    logEvent(analytics, "initialize_web_application", {
      additionalParam: __DEV__ ? "development" : "live",
    });

    this.update({
      analytics: analytics,
    });

    this.setLoading(false);
  }

  onRender() {
    if (this.state.loading) {
      return <></>;
    }

    return (
      <ApplicationContext.Provider value={this.state}>
        {this.props.children}
      </ApplicationContext.Provider>
    );
  }
}

export default Application;
