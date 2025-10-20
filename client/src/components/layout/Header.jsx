import { Plus, X } from "lucide-react";

const Header = ({ adding, setAdding }) => {
  console.log(adding);
  return (
    <div className="p-5 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          ระบบจัดการเวรประจำจุด
        </h2>
        <button
          onClick={() => setAdding((prev) => !prev)}
          className={`flex items-center gap-1 text-white p-2 rounded-2xl cursor-pointer ${
            adding
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {adding ? (
            <div className="flex items-center gap-1">
              <X size={20} />
              ยกเลิก
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Plus size={20} />
              เพิ่มจุดเวร
            </div>
          )}
        </button>
      </div>
      {adding && (
        <div className="mt-2 text-sm text-amber-600 bg-amber-100 p-2 rounded-md border">
          คลิกบนแผนที่เพื่อเพิ่มตำแหน่งการเข้าเวร
        </div>
      )}
    </div>
  );
};

export default Header;
