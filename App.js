import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fragment } from "react";
import AllPlaces from "./screens/AllPlaces";
import PlaceDetails from "./screens/PlaceDetails";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
              title: "Your Favorite Places",
            })}
          />
          <stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a New Place",
            }}
          />
          <stack.Screen name="PlaceDetails" component={PlaceDetails} />
        </stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
