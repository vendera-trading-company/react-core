"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(view, value, callback, validation) {
        this.view = view;
        this.value = value;
        this.callback = callback;
        this.validation = validation;
    }
    setCallback(callback) {
        this.callback = callback;
        return this;
    }
    setValidation(validation) {
        this.validation = validation;
        return this;
    }
    setValue(value) {
        this.value = value;
        if (this.callback) {
            this.callback(this);
        }
        return this;
    }
    getValue() {
        return this.value;
    }
    update() {
        this.view.update();
    }
    validate() {
        if (!this.validation) {
            return null;
        }
        return this.validation(this);
    }
}
exports.Controller = Controller;
exports.default = Controller;
