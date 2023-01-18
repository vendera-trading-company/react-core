"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.ApplicationContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-interface */
const react_1 = __importDefault(require("react"));
const BaseView_1 = __importDefault(require("../BaseView"));
exports.ApplicationContext = react_1.default.createContext(null);
class Application extends BaseView_1.default {
    getLoadingComponent() {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
    }
    isLoadingOnInit() {
        return true;
    }
    onMount() {
        this.loadApplication();
    }
    loadApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setLoading(true);
            yield this.onLoadApplication();
            this.setLoading(false);
        });
    }
    onLoadApplication() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    onRender() {
        if (this.state.loading) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return ((0, jsx_runtime_1.jsx)(exports.ApplicationContext.Provider, Object.assign({ value: this.state }, { children: this.props.children }), void 0));
    }
}
exports.Application = Application;
exports.default = Application;
