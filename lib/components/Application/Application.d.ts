import React from 'react';
import BaseView from '../BaseView';
import { IBaseViewState } from '../BaseView/BaseView';
interface IApplicationProps {
    children: any;
}
export interface IApplicationState extends IBaseViewState {
}
export declare const ApplicationContext: React.Context<IApplicationState | null>;
export declare class Application<P extends IApplicationProps, S extends IApplicationState> extends BaseView<P, S> {
    getLoadingComponent(): JSX.Element;
    isLoadingOnInit(): boolean;
    onMount(): void;
    loadApplication(): Promise<void>;
    onLoadApplication(): Promise<void>;
    onRender(): JSX.Element;
}
export default Application;
