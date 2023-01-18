"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
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
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_1 = require("react");
const TextInput = (props) => {
    const { style, errorTextStyle, controller } = props, rest = __rest(props, ["style", "errorTextStyle", "controller"]);
    const errorText = controller.validate();
    const errorTextOpacity = (0, react_native_reanimated_1.useSharedValue)(0);
    const errorTextAnimatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            opacity: errorTextOpacity.value,
            errorTextStyle,
        };
    }, [errorTextStyle]);
    (0, react_1.useEffect)(() => {
        errorTextOpacity.value = errorText
            ? (0, react_native_reanimated_1.withTiming)(1, {
                duration: 300,
            })
            : (0, react_native_reanimated_1.withTiming)(0, {
                duration: 300,
            });
    }, [errorTextOpacity]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.TextInput, Object.assign({ onChangeText: (text) => {
                        controller.setValue(text);
                        controller.update();
                    }, style: style }, rest), void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.Text, Object.assign({ style: errorTextAnimatedStyle }, { children: errorText }), void 0)] }, void 0));
};
exports.TextInput = TextInput;
exports.default = exports.TextInput;
