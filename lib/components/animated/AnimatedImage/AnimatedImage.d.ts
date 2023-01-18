/// <reference types="react" />
import { ImageProps } from 'react-native';
interface IAnimatedImageProps extends ImageProps {
    fromColor?: any;
    toColor?: any;
}
export declare const AnimatedImage: (props: IAnimatedImageProps) => JSX.Element;
export default AnimatedImage;
