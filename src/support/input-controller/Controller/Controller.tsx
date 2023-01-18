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

import BaseView from '../../../components/BaseView';

export class Controller<T> {
  value?: T | null;
  view: BaseView;
  callback: any;
  validation: any;

  constructor(
    view: BaseView,
    value?: T | null,
    callback?: any,
    validation?: any
  ) {
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

  public getValue(): T | null | undefined {
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
