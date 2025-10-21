import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set, get) => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try {
      const personnel = await api.get("/personnel");
      const locations = await api.get("/locations");
      set({
        personnel: personnel,
        locations: locations,
      });
    } catch (err) {
      console.log(err);
    }
  },

  addLocation: async (lat, lng, name) => {
    try {
      await api.post("/locations", {
        name: name,
        lat: Number(lat),
        lng: Number(lng),
        maxCapacity: 5,
      });
      await get().fetchAll();
    } catch (err) {
      console.log("Add Location Err", err);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
