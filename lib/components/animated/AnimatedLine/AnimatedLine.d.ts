/// <reference types="react" />
interface IAnimatedLine {
    from: {
        height?: any;
        width?: any;
        backgroundColor?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        marginTop?: any;
        marginLeft?: any;
        marginRight?: any;
        marginBottom?: any;
        opacity?: any;
    };
    to: {
        height?: any;
        width?: any;
        backgroundColor?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        marginTop?: any;
        marginLeft?: any;
        marginRight?: any;
        marginBottom?: any;
        opacity?: any;
    };
    duration?: number;
    delay?: number;
}
export declare const AnimatedLine: (props: IAnimatedLine) => JSX.Element;
export default AnimatedLine;
