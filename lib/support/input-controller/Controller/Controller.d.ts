import BaseView from '../../../components/BaseView';
export declare class Controller<T> {
    value?: T | null;
    view: BaseView;
    callback: any;
    validation: any;
    constructor(view: BaseView, value?: T | null, callback?: any, validation?: any);
    setCallback(callback: any): this;
    setValidation(validation: any): this;
    setValue(value: T): this;
    getValue(): T | null | undefined;
    update(): void;
    validate(): string | null;
}
export default Controller;
