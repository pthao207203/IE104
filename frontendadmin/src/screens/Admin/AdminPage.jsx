import React, { useState, useEffect } from "react";
import AdminTable from "./components/AdminTable";
import AddAccountButton from "./components/AddAccountButton";
import SearchBar from "../../layouts/private/SearchBar";
import { adminController } from "../../controllers/admin.controller";

function AdminLayout() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vao")
      const result = await adminController(setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("Admin => ", data)
  const totalAdmin = data?.length || 0; // Đảm bảo không lỗi nếu data undefined
  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <AddAccountButton />
      <section className="flex flex-wrap gap-3 mt-3 max-md:max-w-full">
        <SearchBar />
      </section>
      <div className="flex flex-col mt-6 w-full text-neutral-900 max-md:max-w-full">
        <div className="text-right max-md:max-w-full">
          Tổng số quản trị viên: {totalAdmin}
        </div>
      </div>


      {/* Bảng quản lý admin */}
      <section className="flex flex-col mt-3 w-full text-[#131313] max-md:max-w-full">
        {/* Header của bảng */}
        <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
          {/* Cột ID */}
          <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
            <span className="text-center">Ảnh đại diện</span>
          </div>

          {/* Cột Tên người dùng */}
          <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
            <span className="text-center">Họ và tên</span>
          </div>

          {/* Cột Chức vụ */}
          <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
            <span className="text-center">Chức vụ</span>
          </div>

          {/* Cột Thời gian tham gia */}
          <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
            <span className="text-center">Thời gian tham gia</span>
          </div>

          {/* Cột Trạng thái */}
          <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
            <span className="text-center">Trạng thái</span>
          </div>
        </div>

        {/* Nội dung bảng */}
        {data && data.length > 0 && data.map((admin, index) => (
          <AdminTable
            key={index}
            {...admin}
          />
        ))}
      </section>
    </main>
  );
}

export default AdminLayout;
