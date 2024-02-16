import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/places/PlacesList";
import { useEffect, useState } from "react";
import { fetchPlaces } from "../util/database";

const AllPlaces = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    const loadPlaces = async () => {
     const places =  await fetchPlaces();
     setLoadedPlaces(places);
    };
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
