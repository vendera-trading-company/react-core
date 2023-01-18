/// <reference types="react" />
import { ImageProps } from 'react-native';
interface IImageProps extends ImageProps {
    fromColor?: any;
    toColor?: any;
}
export declare const Image: (props: IImageProps) => JSX.Element;
export default Image;
