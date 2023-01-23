/// <reference types="react" />
import { StyleProp, ViewStyle } from "react-native";
export interface IPageViewProps {
    contentWidth?: number;
    children?: any;
    contentStyle?: StyleProp<ViewStyle>;
    scrollEventThrottle?: number;
    innerRef?: any;
    style?: StyleProp<ViewStyle>;
    onChange?: any;
    currentIndex?: number;
}
export declare const PageView: (props: IPageViewProps) => JSX.Element;
export default PageView;
