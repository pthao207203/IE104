import * as React from "react";

function CourseTableRow({ id, name, sold, price, profit, status }) {
  const statusClass = status === "active" ? "bg-lime-300" : "bg-slate-300";
  const statusText = status === "active" ? "Hoạt động" : "Tạm dừng";

  return (
    <article className="flex overflow-hidden flex-wrap mt-6 w-full bg-white h-[70px] cursor-pointer">
      {/* Mã sản phẩm */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px] shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
        <span className="text-center">{id}</span>
      </div>

      {/* Tên sản phẩm */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span className="text-center">{name}</span>
      </div>

      {/* Số lượng bán */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span className="text-center">{sold}</span>
      </div>

      {/* Giá */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <span className="text-center">{price}</span>
      </div>

      {/* Lợi nhuận */}
      <div className="flex flex-1 shrink justify-center items-center bg-indigo-50 min-w-[240px]">
        <span className="text-center">{profit}</span>
      </div>

      {/* Trạng thái */}
      <div className="flex flex-1 shrink justify-center items-center min-w-[240px]">
        <div className={`flex justify-center items-center px-14 min-w-[240px] py-2 rounded-full ${statusClass} text-center`}
        >
          <span>{statusText}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseTableRow;
