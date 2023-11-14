import { API_KEY } from "@/secrets/apiKey";

export const getEventById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/event/${id}`)
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export const parsePlaceId = async (id: string) => {
  try {
    const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?fields=name,formatted_address&place_id=${id}&key=${API_KEY}`)
    return res.json();
  } catch (error) {
    console.log(error);
  }
}