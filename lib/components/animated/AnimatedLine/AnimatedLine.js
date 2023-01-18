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
exports.AnimatedLine = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-shorthand */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
const react_1 = require("react");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const AnimatedLine = (props) => {
    const { from = {
        opacity: 1,
    }, to = {}, duration = 300, delay, } = props;
    const opacity = (0, react_native_reanimated_1.useSharedValue)(from.opacity);
    const marginTop = (0, react_native_reanimated_1.useSharedValue)(from.marginTop);
    const marginBottom = (0, react_native_reanimated_1.useSharedValue)(from.marginBottom);
    const marginLeft = (0, react_native_reanimated_1.useSharedValue)(from.marginLeft);
    const marginRight = (0, react_native_reanimated_1.useSharedValue)(from.marginRight);
    const width = (0, react_native_reanimated_1.useSharedValue)(from.width);
    const height = (0, react_native_reanimated_1.useSharedValue)(from.height);
    const backgroundColor = (0, react_native_reanimated_1.useSharedValue)(from.backgroundColor);
    const borderTopLeftRadius = (0, react_native_reanimated_1.useSharedValue)(from.borderTopLeftRadius);
    const borderTopRightRadius = (0, react_native_reanimated_1.useSharedValue)(from.borderTopRightRadius);
    const borderBottomLeftRadius = (0, react_native_reanimated_1.useSharedValue)(from.borderBottomLeftRadius);
    const borderBottomRightRadius = (0, react_native_reanimated_1.useSharedValue)(from.borderBottomRightRadius);
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            width: width.value,
            height: height.value,
            borderTopLeftRadius: borderTopLeftRadius.value,
            borderTopRightRadius: borderTopRightRadius.value,
            borderBottomLeftRadius: borderBottomLeftRadius.value,
            borderBottomRightRadius: borderBottomRightRadius.value,
            backgroundColor: backgroundColor.value,
            opacity: opacity.value,
            marginTop: marginTop.value,
            marginBottom: marginBottom.value,
            marginLeft: marginLeft.value,
            marginRight: marginRight.value,
        };
    }, [from, to]);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        if (delay) {
            width.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_a = to.width) !== null && _a !== void 0 ? _a : from.width, {
                duration: duration,
            }));
            height.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_b = to.height) !== null && _b !== void 0 ? _b : from.height, {
                duration: duration,
            }));
            borderTopLeftRadius.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_c = to.borderTopLeftRadius) !== null && _c !== void 0 ? _c : from.borderTopLeftRadius, {
                duration: duration,
            }));
            borderTopRightRadius.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_d = to.borderTopRightRadius) !== null && _d !== void 0 ? _d : from.borderTopRightRadius, {
                duration: duration,
            }));
            borderBottomLeftRadius.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_e = to.borderBottomLeftRadius) !== null && _e !== void 0 ? _e : from.borderBottomLeftRadius, {
                duration: duration,
            }));
            borderBottomRightRadius.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_f = to.borderBottomRightRadius) !== null && _f !== void 0 ? _f : from.borderBottomRightRadius, {
                duration: duration,
            }));
            backgroundColor.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_g = to.backgroundColor) !== null && _g !== void 0 ? _g : from.backgroundColor, {
                duration: duration,
            }));
            opacity.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_h = to.opacity) !== null && _h !== void 0 ? _h : from.opacity, {
                duration: duration,
            }));
            marginTop.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_j = to.marginTop) !== null && _j !== void 0 ? _j : from.marginTop, {
                duration: duration,
            }));
            marginBottom.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_k = to.marginBottom) !== null && _k !== void 0 ? _k : from.marginBottom, {
                duration: duration,
            }));
            marginLeft.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_l = to.marginLeft) !== null && _l !== void 0 ? _l : from.marginLeft, {
                duration: duration,
            }));
            marginRight.value = (0, react_native_reanimated_1.withDelay)(delay, (0, react_native_reanimated_1.withTiming)((_m = to.marginRight) !== null && _m !== void 0 ? _m : from.marginRight, {
                duration: duration,
            }));
        }
        else {
            width.value = (0, react_native_reanimated_1.withTiming)((_o = to.width) !== null && _o !== void 0 ? _o : from.width, {
                duration: duration,
            });
            height.value = (0, react_native_reanimated_1.withTiming)((_p = to.height) !== null && _p !== void 0 ? _p : from.height, {
                duration: duration,
            });
            borderTopLeftRadius.value = (0, react_native_reanimated_1.withTiming)((_q = to.borderTopLeftRadius) !== null && _q !== void 0 ? _q : from.borderTopLeftRadius, {
                duration: duration,
            });
            borderTopRightRadius.value = (0, react_native_reanimated_1.withTiming)((_r = to.borderTopRightRadius) !== null && _r !== void 0 ? _r : from.borderTopRightRadius, {
                duration: duration,
            });
            borderBottomLeftRadius.value = (0, react_native_reanimated_1.withTiming)((_s = to.borderBottomLeftRadius) !== null && _s !== void 0 ? _s : from.borderBottomLeftRadius, {
                duration: duration,
            });
            borderBottomRightRadius.value = (0, react_native_reanimated_1.withTiming)((_t = to.borderBottomRightRadius) !== null && _t !== void 0 ? _t : from.borderBottomRightRadius, {
                duration: duration,
            });
            backgroundColor.value = (0, react_native_reanimated_1.withTiming)((_u = to.backgroundColor) !== null && _u !== void 0 ? _u : from.backgroundColor, {
                duration: duration,
            });
            opacity.value = (0, react_native_reanimated_1.withTiming)((_v = to.opacity) !== null && _v !== void 0 ? _v : from.opacity, {
                duration: duration,
            });
            marginTop.value = (0, react_native_reanimated_1.withTiming)((_w = to.marginTop) !== null && _w !== void 0 ? _w : from.marginTop, {
                duration: duration,
            });
            marginBottom.value = (0, react_native_reanimated_1.withTiming)((_x = to.marginBottom) !== null && _x !== void 0 ? _x : from.marginBottom, {
                duration: duration,
            });
            marginLeft.value = (0, react_native_reanimated_1.withTiming)((_y = to.marginLeft) !== null && _y !== void 0 ? _y : from.marginLeft, {
                duration: duration,
            });
            marginRight.value = (0, react_native_reanimated_1.withTiming)((_z = to.marginRight) !== null && _z !== void 0 ? _z : from.marginRight, {
                duration: duration,
            });
        }
    }, [from, to, duration]);
    return (0, jsx_runtime_1.jsx)(react_native_reanimated_1.default.View, { style: animatedStyle }, void 0);
};
exports.AnimatedLine = AnimatedLine;
exports.default = exports.AnimatedLine;
