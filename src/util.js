import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_GEOCODE_KEY;

function currencyFormatter(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function minutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();

  return Math.trunc((d2 - d1) / 60000);
}

async function getAddress(lat, lng) {
  const res = await fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${apiKey}`,
  );
  if (!res.ok)
    throw new Error("Failed getting address, Add your address manually");

  const data = await res.json();
  const newData = {
    localty: data.address.county,
    district: data.address.state_district,
    state: data.address.state,
    country: data.address.country,
    postcode: data.address.postcode,
  };
  return newData;
}

function getPosition() {
  // const coords = {};
  // navigator.geolocation.getCurrentPosition(function(pos){
  //   coords.lat = pos.coords.latitude;
  //   coords.lng = pos.coords.longitude;
  // }, function(){
  //     coords.error = 'User declined location permission';
  //   })
  // return coords;

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      () =>
        reject("User denied location Permission. Add your address manually"),
    );
  });
}

function dateFormatter(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
export {
  currencyFormatter,
  minutesLeft,
  dateFormatter,
  baseURL,
  getPosition,
  getAddress,
};
