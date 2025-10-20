import { LayersControl, Marker, TileLayer } from "react-leaflet";

const Layers = () => {
  return (
    <LayersControl>
      <LayersControl.BaseLayer checked name="OSM">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="WorldImagery">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {/* https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x} */}
      </LayersControl.BaseLayer>

      <LayersControl.Overlay checked name="Marker">
        <Marker position={[14.067316587876158, 100.61416625976564]}></Marker>
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default Layers;
