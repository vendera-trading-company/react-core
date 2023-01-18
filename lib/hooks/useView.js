"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
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
const BaseView_1 = __importDefault(require("../components/BaseView"));
class View extends BaseView_1.default {
    onInit() {
        return this.props.init(this);
    }
    onRender() {
        return (0, jsx_runtime_1.jsx)(ViewRoot, { view: this, inner: this.props.inner }, void 0);
    }
    getLoadingComponent() {
        var _a;
        return (_a = this.props.loadingComponent()) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
    }
}
const ViewRoot = (props) => {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.inner(props.view) }, void 0);
};
function useView(init, view, loadingComponent) {
    return ((0, jsx_runtime_1.jsx)(View, { loadingComponent: loadingComponent, init: init, inner: view }, void 0));
}
exports.useView = useView;
exports.default = useView;
