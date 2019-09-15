import L = require("leaflet");
import icon from "../assets/coffee.svg"

export const coffeeIcon = L.icon({
    iconUrl: icon,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -45],
})