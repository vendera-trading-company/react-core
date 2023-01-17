import React from "react";
import BaseView from "../BaseView";
import { IBaseViewState } from "../BaseView/BaseView";

interface IApplicationProps {
  children: any;
}

export interface IApplicationState extends IBaseViewState {}

export const ApplicationContext = React.createContext<IApplicationState | null>(
  null
);

export class Application extends BaseView<
  IApplicationProps,
  IApplicationState
> {
  getLoadingComponent() {
    return <></>;
  }

  isLoadingOnInit(): boolean {
    return true;
  }

  onMount(): void {
    this.loadApplication();
  }

  async loadApplication() {
    this.setLoading(true);
    await this.onLoadApplication();
    this.setLoading(false);
  }

  async onLoadApplication() {}

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
