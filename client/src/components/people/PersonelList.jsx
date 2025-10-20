import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Clock, Users } from "lucide-react";

const PersonelList = () => {
  const personnel = useDutyStore((state) => state.personnel);
  // console.log(personnel);
  return (
    <div className="w-80 shadow-md bg-white overflow-y-auto">
      <div className="p-5 border-b border-gray-200">
        <div className="flex gap-x-2 items-center mb-2">
          <Users className="text-blue-500" size={24} />
          <h2 className="font-bold text-xl">รายชื่อเจ้าหน้าที่</h2>
        </div>
        <p className="text-sm text-gray-500 text-center">ลากไปยังจุด</p>
      </div>

      <div className="m-2 space-y-2">
        {personnel.map((item) => (
          <div
            key={item.id}
            className="flex bg-blue-100 border items-center border-blue-300 rounded-lg p-5 cursor-move hover:shadow-md hover:scale-105 duration-300"
          >
            <div className="text-3xl">{item.avatar}</div>
            <div className="ml-3 flex-1 hidden min-[510px]:block">
              <div className="font-semibold text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-500">{item.position}</div>
            </div>
            <div className="text-gray-400 hidden sm:block">
              <Clock />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonelList;
