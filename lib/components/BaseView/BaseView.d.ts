import React from 'react';
export interface IBaseViewState {
    loading?: boolean;
    update?: any;
}
export declare abstract class BaseView<P = {}, S extends IBaseViewState = IBaseViewState, SS = any> extends React.Component<P, S, SS> {
    constructor(props: any);
    isLoadingOnInit(): boolean;
    componentDidMount(): void;
    render(): React.ReactNode;
    abstract onRender(): any;
    getLoadingComponent(): any;
    onLoading(): void;
    onMount(): void;
    init(): S;
    onInit(): S;
    setLoading(value: boolean): void;
    update(value?: S): void;
}
export default BaseView;
