import { FlatList, ListRenderItem, StyleProp, ViewStyle } from "react-native";

export interface IGridViewProps {
  numColumns?: number;
  data: any[];
  renderItem: ListRenderItem<any> | null | undefined;
  style: StyleProp<ViewStyle>;
  showsHorizontalScrollIndicator: boolean | undefined;
  showsVerticalScrollIndicator: boolean | undefined;
}

export const GridView = (props: IGridViewProps) => {
  const {
    numColumns = 2,
    data,
    renderItem,
    style,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    ...rest
  } = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={numColumns}
      renderItem={renderItem}
      style={style}
      {...rest}
    />
  );
};

export default GridView;
