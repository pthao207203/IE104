import React, { useState } from "react";
import TableRow from "./components/TableRow";
import SearchBar from "../../layouts/private/SearchBar";
import CourseHeader from "./components/CourseHeader";
import PopUp from "./components/PopUp";

const courseData = [
  { id: 1, name: "HTML", courseCount: 1 },
  { id: 2, name: "CSS", courseCount: 1 },
  { id: 3, name: "JavaScript", courseCount: 1 },
  { id: 4, name: "Node.js", courseCount: 1 },
];

function CourseTable() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddCategoryClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <CourseHeader />
      <div className="flex flex-col pb-16 mt-6 w-full max-md:max-w-full">
        <div className="text-right text-neutral-900 max-md:max-w-full">
          Tổng số danh mục: {courseData.length}
        </div>

        {/* Header Bảng */}
        <div className="flex shrink overflow-hidden w-full rounded-t-3xl mt-3 bg-[#6C8299] h-[70px] max-md:max-w-full">
          <div className="flex gap-3 justify-center items-center px-3 bg-indigo-50 w-[200px]">
            <span className="text-center">STT</span>
          </div>
          <div className="flex flex-1 justify-center items-center px-3 text-white">
            <span className="text-center">Tên</span>
          </div>
          <div className="flex gap-3 justify-center items-center px-3 bg-indigo-50 w-[200px]">
            <span className="text-center">Số khóa học</span>
          </div>
          <div className="flex justify-center items-center px-3 text-white w-[258px]">
            <button
              className="flex items-center gap-2 text-center"
              onClick={handleAddCategoryClick}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8c4b8a9ea3e04a3f28765b51e5832394bc0fb959c8132d5d62ff26652eebc19?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
                alt="Icon"
                className="w-[30px] aspect-square"
              />
              <span className="text-center">Danh mục mới</span>
            </button>
          </div>
        </div>

        {/* Nội dung bảng */}
        {courseData.length > 0 ? (
          courseData.map((course, index) => (
            <TableRow key={course.id} stt={index + 1} {...course} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-5">
            Không có danh mục nào để hiển thị.
          </div>
        )}

        {/* Pop-up */}
        {isPopupOpen && (
          <PopUp onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
}

export default CourseTable;