import React from "react";
import { ScrollView as ReactScrollView } from "react-native";

interface IScrollViewProps {
  children?: any;
  horizontal?: boolean;
  style?: any;
  onEndReached?: any;
  innerRef?: React.LegacyRef<ReactScrollView>;
}
export const ScrollView = (props: IScrollViewProps) => {
  const { children, horizontal = false, onEndReached, innerRef } = props;

  function handleInfinityScroll(event) {
    let mHeight = event.nativeEvent.layoutMeasurement.height;
    let cSize = event.nativeEvent.contentSize.height;
    let Y = event.nativeEvent.contentOffset.y;
    if (Math.ceil(mHeight + Y) >= cSize) return true;
    return false;
  }

  return (
    <ReactScrollView
      ref={innerRef}
      style={props.style}
      horizontal={horizontal}
      bounces={false}
      bouncesZoom={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={0}
      onScroll={(event) => {
        if (handleInfinityScroll(event)) {
          if (onEndReached) {
            onEndReached();
          }
        }
      }}
    >
      {children}
    </ReactScrollView>
  );
};

export default ScrollView;
