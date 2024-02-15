import { View, StyleSheet, Text, Alert } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useState } from "react";
import { getReadableAddress } from "../../util/location";
const LocationPicker = ({ onPickLocation }) => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED ||
      locationPermissionInformation.canAskAgain
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant Location permissions to use this app."
      );
      return false;
    }

    return true;
  };

  //   const pickOnMapHandler = () => {};
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    const address = await getReadableAddress(
      location.coords.latitude,
      location.coords.longitude
    );
    onPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
      address: address,
    });
  };

  let locationContent = <Text>No Location Picked</Text>;

  if (pickedLocation) {
    locationContent = (
      <Text>
        Lat:{pickedLocation.lat} | lng:{pickedLocation.lng}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationContent}</View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        {/* <OutlinedButton icon={"map"} onPress={pickOnMapHandler}>
          Pick On Mapp
        </OutlinedButton> */}
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flex: 1,
    width: "100%",
  },
});
