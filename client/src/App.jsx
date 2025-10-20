import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import PersonelList from "./components/people/PersonelList";
import useDutyStore from "./store/useDutyStore";

function App() {
  const fetchAll = useDutyStore((state) => state.fetchAll);
  const [adding, setAdding] = useState(false);
  const [pending, setPending] = useState(null);
  useEffect(() => {
    fetchAll();
  }, []);

  const onPick = (lat, lng) => {
    setPending({ lat, lng });
  };
  console.log(pending);
  return (
    <div className="flex h-screen bg-gray-200 text-black">
      <PersonelList />
      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />
        <div className="flex flex-1 overflow-hidden">
          <MapView adding={adding} onPick={onPick} />
          <LocationList />
        </div>
      </div>
    </div>
  );
}

export default App;
