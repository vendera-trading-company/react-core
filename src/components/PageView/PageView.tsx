import { useCallback, useEffect } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

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

export const PageView = (props: IPageViewProps) => {
  const screenWidth = Dimensions.get("window").width;

  const {
    contentWidth = screenWidth,
    children,
    contentStyle,
    scrollEventThrottle,
    innerRef,
    style,
    onChange,
    currentIndex = 0,
  } = props;

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = event.nativeEvent.contentOffset.x;

      if (offset < contentWidth) {
        onChange(0);
        return;
      }

      children.map((child: any, index: number) => {
        if (offset < contentWidth * (index + 1)) {
          onChange(index);
        }
      });
    },
    []
  );

  useEffect(() => {
    if (innerRef) {
      innerRef.current?.scrollTo({
        x: currentIndex * contentWidth,
      });
    }
  }, [currentIndex]);

  return (
    <ScrollView
      onMomentumScrollEnd={onMomentumScrollEnd}
      style={style}
      ref={innerRef}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={scrollEventThrottle}
      pagingEnabled
      directionalLockEnabled
    >
      {children.map((child: any, index: any) => {
        return (
          <View
            key={index}
            style={[
              {
                width: contentWidth,
              },
              contentStyle,
            ]}
          >
            {child}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PageView;
