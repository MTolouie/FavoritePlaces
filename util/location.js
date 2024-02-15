import axios from "axios";
export async function getReadableAddress(lat, lng) {

  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;

  try {
    const response = await axios.get(url);
    const address = response.data.display_name;
    return address;
  } catch (error) {
    console.log(error);
  }
}
