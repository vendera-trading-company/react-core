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
  constructor(props: any) {
    super(props);
    this.state = this.init();
  }

  isLoadingOnInit() {
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

  abstract onRender(): any;

  getLoadingComponent(): any {
    return <></>;
  }

  onLoading() {}

  onMount() {}

  init(): S {
    const data = {
      loading: this.isLoadingOnInit(),
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
      loading: this.isLoadingOnInit(),
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

    this.setState(() => {
      return {
        loading: value,
      } as S;
    });
  }

  public update(value?: S) {
    if (value) {
      this.setState(() => {
        return value;
      });
    }

    this.setState(() => {
      return {};
    });
  }
}

export default BaseView;
