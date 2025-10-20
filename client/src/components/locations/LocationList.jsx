import { MapPin, Trash2 } from "lucide-react";
import useDutyStore from "../../store/useDutyStore";

const LocationList = () => {
  const locations = useDutyStore((state) => state.locations);
  return (
    <div className="w-80 bg-white border-l shadow-md border-gray-200">
      <div className="p-5 border-b border-gray-200 bg-blue-100">
        <div className="flex justify-center gap-x-2">
          <MapPin className="text-blue-500" />
          <h2 className="font-bold text-xl">เพิ่มจุดเข้าเวร</h2>
        </div>
      </div>

      {locations.map((item) => (
        <div
          key={item.id}
          className="border-2 border-gray-400 bg-gray-100 border-dashed rounded-lg m-2"
        >
          <div className="flex justify-between p-2">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">0/{item.maxCapacity} คน</p>
            </div>
            <button className="text-red-500 hover:text-red-400 hover:bg-red-100 px-2 rounded-md duration-200">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
