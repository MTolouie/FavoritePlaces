import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { place } from "../../models/place";

function PlaceForm({onSubmit}) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [takenImage, setTakenImage] = useState("");
  const [enteredLocation, setEnteredLocation] = useState();

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const takeImageHandler = (takneImage) => {
    setTakenImage(takneImage);
  };
  const pickLocationHandler = (enteredLocation) => {
    setEnteredLocation(enteredLocation);
  };
  const savePlaceHandler = () => {
    const placeData = new place(enteredTitle, takenImage, enteredLocation);
    console.log(placeData);
    onSubmit(placeData);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
