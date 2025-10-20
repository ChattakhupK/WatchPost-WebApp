import { MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const ClickAdd = ({ adding, onPick }) => {
  const map = useMapEvents({
    click(e) {
      if (adding) {
        map.flyTo(e.latlng);
        onPick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return;
};

const MapView = ({ adding, onPick }) => {
  const center = [14.067316587876158, 100.61416625976564];
  return (
    <div className="flex-1">
      <MapContainer className="h-full" center={center} zoom={10}>
        <Layers />
        <ClickAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  );
};

export default MapView;
