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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_1 = require("react");
const Image = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { style, source, resizeMode = 'cover', resizeMethod, fromColor, toColor, } = props;
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const placeholderHeight = (0, react_native_reanimated_1.useSharedValue)((_a = style['height']) !== null && _a !== void 0 ? _a : 'auto');
    const placeholderWidth = (0, react_native_reanimated_1.useSharedValue)((_b = style['width']) !== null && _b !== void 0 ? _b : 'auto');
    const borderRadius = (0, react_native_reanimated_1.useSharedValue)(parseFloat((_c = style['borderRadius']) !== null && _c !== void 0 ? _c : 0));
    const aspectRatio = (0, react_native_reanimated_1.useSharedValue)(parseFloat((_d = style['aspectRatio']) !== null && _d !== void 0 ? _d : 1));
    const imageBackgroundColor = (0, react_native_reanimated_1.useSharedValue)(0);
    const animatedOpacity = (0, react_native_reanimated_1.useSharedValue)(0);
    const fixedWidth = (0, react_native_reanimated_1.useSharedValue)((_e = style['width']) !== null && _e !== void 0 ? _e : 'auto');
    const fixedHeight = (0, react_native_reanimated_1.useSharedValue)((_f = style['height']) !== null && _f !== void 0 ? _f : 'auto');
    const placeholderStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const backgroundColor = (0, react_native_reanimated_1.interpolateColor)(imageBackgroundColor.value, [0, 1], [fromColor, toColor !== null && toColor !== void 0 ? toColor : fromColor]);
        return {
            position: 'absolute',
            aspectRatio: aspectRatio.value,
            height: placeholderHeight.value,
            width: placeholderWidth.value,
            borderRadius: borderRadius.value,
            backgroundColor,
        };
    });
    const imageStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            aspectRatio: aspectRatio.value,
            width: fixedWidth.value,
            opacity: animatedOpacity.value,
            height: fixedHeight.value,
            borderRadius: borderRadius.value,
        };
    });
    (0, react_1.useEffect)(() => {
        if (loaded) {
            placeholderHeight.value = 0;
            placeholderWidth.value = 0;
        }
        imageBackgroundColor.value = !loaded
            ? (0, react_native_reanimated_1.withRepeat)((0, react_native_reanimated_1.withTiming)(1, { duration: 600 }), -1, true)
            : (0, react_native_reanimated_1.withTiming)(0, { duration: 600 });
    }, [loaded]);
    (0, react_1.useEffect)(() => {
        animatedOpacity.value = loaded ? (0, react_native_reanimated_1.withTiming)(1, { duration: 400 }) : 0;
    }, [loaded]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [animatedOpacity.value == 0 && (0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { style: placeholderStyle }, void 0), (0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.Image, { resizeMethod: resizeMethod, resizeMode: resizeMode, style: imageStyle, source: { uri: '' + source }, onLoad: (e) => {
                    if (loaded) {
                        return;
                    }
                    setLoaded(true);
                } }, void 0)] }, void 0));
};
exports.Image = Image;
exports.default = exports.Image;
