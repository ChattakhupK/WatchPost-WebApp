import React, { useState } from "react";
import useDutyStore from "../../store/useDutyStore";

const AddLocationModal = ({ lat, lng, setAdding, setPending }) => {
  const [name, setName] = useState("");

  const addLocation = useDutyStore((state) => state.addLocation);

  const handleAddLocation = async () => {
    addLocation(lat, lng, name);
    setAdding(false);
    setPending(null);
  };

  const handleCancel = () => {
    setAdding(false);
    setPending(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
      <div className="bg-white p-4 rounded-xl shadow-2xl w-96 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          เพิ่มจุดเข้าเวรใหม่
        </h3>
        <div className="text-xs text-gray-400">
          Lat:{lat.toFixed(6)}, lng:{lng.toFixed(6)}
        </div>
        <input
          className="w-full border px-2 my-2 border-gray-400 rounded-md py-2 focus:outline-none"
          placeholder="กรอกชื่อ"
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-start gap-x-2">
          <button
            disabled={!name.trim()}
            onClick={() => handleAddLocation()}
            className="cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 flex-1 bg-blue-600 py-3 text-white rounded-md hover:bg-blue-800 duration-300"
          >
            บันทึก
          </button>
          <button
            onClick={() => handleCancel()}
            className="cursor-pointer flex-1 bg-white py-3 text-black rounded-md hover:bg-gray-200 duration-300"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLocationModal;
