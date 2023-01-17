import { useNavigation } from "@react-navigation/native";
import ScrollView from "../../components/ScrollView";
import { StatusBar } from "expo-status-bar";

export const Home = (props: any) => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView key={"home_scroll_view"}></ScrollView>
      <StatusBar style="dark" />
    </>
  );
};

export default Home;
