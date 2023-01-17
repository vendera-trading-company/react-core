import BaseView from "../../../../../../app/components/BaseView";

export class Controller<T> {
  value: T;
  view: BaseView;
  callback: any;
  validation: any;

  constructor(view: BaseView, value?: T, callback?: any, validation?: any) {
    this.view = view;
    this.value = value;
    this.callback = callback;
    this.validation = validation;
  }

  setCallback(callback: any) {
    this.callback = callback;
    return this;
  }

  setValidation(validation: any) {
    this.validation = validation;
    return this;
  }

  public setValue(value: T) {
    this.value = value;

    if (this.callback) {
      this.callback(this);
    }

    return this;
  }

  public getValue(): T {
    return this.value;
  }

  public update(): void {
    this.view.update();
  }

  public validate(): string | null {
    if (!this.validation) {
      return null;
    }

    return this.validation(this);
  }
}

export default Controller;
