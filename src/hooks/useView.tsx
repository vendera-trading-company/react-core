import BaseView from "../components/BaseView";
import { IBaseViewState } from "../components/BaseView/BaseView";

interface IViewProps {
  inner?: any;
  init?: any;
  loadingComponent?: any;
}

class View<S extends IBaseViewState> extends BaseView<IViewProps, S> {
  onInit(): S {
    return this.props.init(this);
  }
  onRender() {
    return <ViewRoot view={this} inner={this.props.inner}></ViewRoot>;
  }

  getLoadingComponent() {
    return this.props.loadingComponent() ?? <></>;
  }
}

const ViewRoot = (props: any) => {
  return <>{props.inner(props.view)}</>;
};

export function useView<S extends IBaseViewState>(
  init: (view: View<S>) => S,
  view: (view: View<S>) => {},
  loadingComponent?: (view: View<S>) => {}
) {
  return (
    <View loadingComponent={loadingComponent} init={init} inner={view}></View>
  );
}

export default useView;
