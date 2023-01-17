import Theme from "../themes/Theme";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppPage } from "../enums/AppPage";

const Stack = createNativeStackNavigator();

export const AppNavigation = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName={AppPage.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group
        screenOptions={{
          title: "Vendera Trading Company",
          presentation: "fullScreenModal",
          contentStyle: { backgroundColor: Theme.white },
        }}
      >
        <Stack.Screen name={AppPage.HOME} component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;
