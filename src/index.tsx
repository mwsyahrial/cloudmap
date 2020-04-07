import { AppRegistry, Platform } from "react-native";
import Main from './App';

const appName = "example";


AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, ({
    rootTag: document.getElementById("root")
  }));
}
