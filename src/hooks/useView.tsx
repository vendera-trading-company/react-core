/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable lines-between-class-members */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */

import BaseView from '../components/BaseView';
import { IBaseViewState } from '../components/BaseView/BaseView';

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
