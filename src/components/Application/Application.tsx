/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import BaseView from '../BaseView';
import { IBaseViewState } from '../BaseView/BaseView';

interface IApplicationProps {
  children: any;
}

export interface IApplicationState extends IBaseViewState {}

export const ApplicationContext = React.createContext<IApplicationState | null>(
  null
);

export class Application<
  P extends IApplicationProps,
  S extends IApplicationState
> extends BaseView<P, S> {
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
