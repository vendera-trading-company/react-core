"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const PageView = (props) => {
    const screenWidth = react_native_1.Dimensions.get("window").width;
    const { contentWidth = screenWidth, children, contentStyle, scrollEventThrottle, innerRef, style, onChange, currentIndex = 0, } = props;
    const onMomentumScrollEnd = (0, react_1.useCallback)((event) => {
        const offset = event.nativeEvent.contentOffset.x;
        if (offset < contentWidth) {
            onChange(0);
            return;
        }
        children.map((child, index) => {
            if (offset < contentWidth * (index + 1)) {
                onChange(index);
            }
        });
    }, []);
    (0, react_1.useEffect)(() => {
        var _a;
        if (innerRef) {
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                x: currentIndex * contentWidth,
            });
        }
    }, [currentIndex]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, Object.assign({ onMomentumScrollEnd: onMomentumScrollEnd, style: style, ref: innerRef, horizontal: true, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, scrollEventThrottle: scrollEventThrottle, pagingEnabled: true, directionalLockEnabled: true }, { children: children.map((child) => {
            return ((0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ style: [
                    {
                        width: contentWidth,
                    },
                    contentStyle,
                ] }, { children: child }), void 0));
        }) }), void 0));
};
exports.PageView = PageView;
exports.default = exports.PageView;
