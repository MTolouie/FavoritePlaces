import PlaceForm from "../components/places/PlaceForm";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (placeData) => {
    console.log(placeData);
    navigation.navigate("AllPlaces", {
      place: placeData,
    });
  };
  return <PlaceForm onSubmit={createPlaceHandler} />;
};
export default AddPlace;
