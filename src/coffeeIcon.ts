import L = require("leaflet");
import icon from "../assets/coffee.svg"

export const coffeeIcon = L.icon({
    iconUrl: icon,
    iconSize: [46, 54],
    iconAnchor: [23, 54],
    popupAnchor: [0, -50],
})