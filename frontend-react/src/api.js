const BASE_URL = "http://127.0.0.1:8000";

export async function getPlaces(search = "") {
  const res = await fetch(`${BASE_URL}/places?search=${search}`);
  return await res.json();
}

export async function getPlacesByState(state) {
  const res = await fetch(`${BASE_URL}/places?search=${state}`);
  return await res.json();
}

export async function addPlace(place) {
  const res = await fetch(`${BASE_URL}/places`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(place),
  });

  return await res.json();
}
