import React from "react";

export interface IBaseViewState {
  loading?: boolean;
  update?: any;
}

export abstract class BaseView<
  P = {},
  S extends IBaseViewState = IBaseViewState,
  SS = any
> extends React.Component<P, S, SS> {
  constructor(props) {
    super(props);
    this.state = this.init();
  }

  isLoadingOnStartup() {
    return false;
  }

  componentDidMount(): void {
    this.onMount();
  }

  render(): React.ReactNode {
    return (
      <>
        {this.onRender()}
        {this.state.loading && this.getLoadingComponent()}
      </>
    );
  }

  abstract onRender();

  getLoadingComponent(): any {
    return <></>;
  }

  onLoading() {}

  onMount() {}

  init(): S {
    const data = {
      loading: this.isLoadingOnStartup(),
      update: (value: S) => {
        this.update(value);
      },
    } as S;

    return {
      ...data,
      ...this.onInit(),
    };
  }

  onInit(): S {
    return {
      loading: this.isLoadingOnStartup(),
      update: (value: S) => {
        this.update(value);
      },
    } as S;
  }

  setLoading(value: boolean) {
    if (value === this.state.loading) {
      return;
    }

    this.onLoading();

    this.setState((state) => {
      return {
        loading: value,
      } as S;
    });
  }

  public update(value?: S) {
    if (value) {
      this.setState((state) => {
        return value;
      });
    }

    this.setState((state) => {
      return {};
    });
  }
}

export default BaseView;
