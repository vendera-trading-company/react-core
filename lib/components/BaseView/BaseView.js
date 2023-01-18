"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
const react_1 = __importDefault(require("react"));
class BaseView extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = this.init();
    }
    isLoadingOnInit() {
        return false;
    }
    componentDidMount() {
        this.onMount();
    }
    render() {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [this.onRender(), this.state.loading && this.getLoadingComponent()] }, void 0));
    }
    getLoadingComponent() {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
    }
    onLoading() { }
    onMount() { }
    init() {
        const data = {
            loading: this.isLoadingOnInit(),
            update: (value) => {
                this.update(value);
            },
        };
        return Object.assign(Object.assign({}, data), this.onInit());
    }
    onInit() {
        return {
            loading: this.isLoadingOnInit(),
            update: (value) => {
                this.update(value);
            },
        };
    }
    setLoading(value) {
        if (value === this.state.loading) {
            return;
        }
        this.onLoading();
        this.setState(() => {
            return {
                loading: value,
            };
        });
    }
    update(value) {
        if (value) {
            this.setState(() => {
                return value;
            });
        }
        this.setState(() => {
            return {};
        });
    }
}
exports.BaseView = BaseView;
exports.default = BaseView;
