import {
  LinkingOptions,
  NavigationContainer,
  ParamListBase,
} from "@react-navigation/native";

import AppNavigation from "./src/navigations/AppNavigation";
import Application from "./src/components/Application";

const linking = {
  prefixes: [],
  config: {
    initialRouteName: "home",
    screens: {
      home: {
        path: "/",
      },
    },
  },
} as LinkingOptions<ParamListBase>;

export default function App() {
  return (
    <NavigationContainer linking={linking} documentTitle={{ enabled: true }}>
      <Application>
        <AppNavigation />
      </Application>
    </NavigationContainer>
  );
}
