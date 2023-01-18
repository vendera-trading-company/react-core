/// <reference types="react" />
import BaseView from '../components/BaseView';
import { IBaseViewState } from '../components/BaseView/BaseView';
interface IViewProps {
    inner?: any;
    init?: any;
    loadingComponent?: any;
}
declare class View<S extends IBaseViewState> extends BaseView<IViewProps, S> {
    onInit(): S;
    onRender(): JSX.Element;
    getLoadingComponent(): any;
}
export declare function useView<S extends IBaseViewState>(init: (view: View<S>) => S, view: (view: View<S>) => {}, loadingComponent?: (view: View<S>) => {}): JSX.Element;
export default useView;
