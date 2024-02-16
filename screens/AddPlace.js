import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (placeData) => {
    await insertPlace(placeData);
    navigation.navigate("AllPlaces", {
      place: placeData,
    });
  };
  return <PlaceForm onSubmit={createPlaceHandler} />;
};
export default AddPlace;
