import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/places/PlacesList";
import { useEffect, useState } from "react";

const AllPlaces = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currentPlaces) => [
        route.params.place,
        ...currentPlaces,
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
