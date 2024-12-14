import React, { useState } from "react";

export function CourseInfo() {
  const basicInfo = [
    { label: "Tên khóa học", value: "HTML cơ bản" },
    { label: "Phân loại", value: "HTML" },
    { label: "Giảng viên", value: "Võ Tấn Khoa" },
  ];

  const initialStats = [
    { label: "Giá", value: "2.000.000", type: "input" },
    { label: "Giảm giá", value: "20%", type: "input" },
    { label: "Trạng thái", value: "Đang hoạt động", type: "status" },
    { label: "Đánh giá", value: "4.5", type: "rating" },
  ];

  const [courseStats, setCourseStats] = useState(initialStats);
  const [showMore, setShowMore] = useState(false); // State để quản lý hiển thị thông tin chi tiết
  const [details, setDetails] = useState({
    description: `Khóa học dành cho các bạn học viên có định hướng theo phát triển website phía Backend sử dụng NodeJS và các Framework liên quan.
    Yêu cầu chung: Khóa học sẽ dạy từ cơ bản đến nâng cao. Các bạn chỉ cần: chăm chỉ, không ngại hỏi đáp cũng như đưa ra các thắc mắc trong quá trình học tập.
    Sau khóa học, các bạn có thể tự tin ứng tuyển vị trí Fresher tại các công ty.`,
    overview:
      "Khóa học dành cho các bạn sinh viên CNTT có định hướng theo phát triển website phía Backend sử dụng NodeJS và các Framework liên quan.",
    outcomes:
      "Các kiến thức cơ bản, nền móng của ngành IT.\nCác kiến thức nâng cao để làm dự án thực tế.",
  });

  const handleDetailChange = (field, value) => {
    setDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
        Thông tin cơ bản
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-6 w-full max-md:max-w-full">
        {basicInfo.map((info, index) => (
          <BasicInfoItem key={index} label={info.label} value={info.value} />
        ))}
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-6 w-full text-xl font-medium leading-none max-md:max-w-full">
        {courseStats.map((stat, index) => (
          <StatItem
            key={index}
            {...stat}
            onChange={(newValue) => {
              const updatedStats = [...courseStats];
              updatedStats[index].value = newValue;
              setCourseStats(updatedStats);
            }}
          />
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)} // Toggle hiển thị thêm
        className="flex gap-3 justify-center items-center self-start px-3 py-3 mt-6 text-xl font-medium leading-none text-white rounded-lg bg-slate-500 min-h-[46px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e508b7f86805034b65e4f5b8894548c2e5a0d294454c8a6811cd5654badde28?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">
          {showMore ? "Ẩn bớt" : "Xem thêm"}
        </span>
      </button>

      {/* Hiển thị thêm chi tiết */}
      {showMore && (
        <div className="mt-6">
          <EditableDetail
            title="Mô tả"
            value={details.description}
            onChange={(value) => handleDetailChange("description", value)}
          />
          <EditableDetail
            title="Tổng quan khóa học"
            value={details.overview}
            onChange={(value) => handleDetailChange("overview", value)}
          />
          <EditableDetail
            title="Bạn sẽ học được gì?"
            value={details.outcomes}
            onChange={(value) => handleDetailChange("outcomes", value)}
          />
        </div>
      )}
    </div>
  );
}

function BasicInfoItem({ label, value }) {
  return (
    <div className="flex flex-col font-semibold min-w-[240px] w-[270px]">
      <div className="text-lg text-neutral-900 text-opacity-50">{label}</div>
      <div className="mt-4 text-xl text-neutral-900 text-opacity-80">
        {value}
      </div>
    </div>
  );
}

function StatItem({ label, value, type, onChange }) {
  const renderValue = () => {
    switch (type) {
      case "status":
        return (
          <div className="flex mt-3 gap-3 justify-center items-center px-3 py-2.5 w-full bg-lime-300 min-h-[40px] rounded-[99px]">
            <div className="gap-2.5 self-stretch my-auto">{value}</div>
          </div>
        );
      case "rating":
        return (
          <div className="flex mt-3 gap-3 justify-center items-center px-3 py-2.5 w-full bg-amber-300 min-h-[40px] rounded-[99px]">
            <div className="gap-2.5 self-stretch my-auto">{value}</div>
          </div>
        );
      case "input":
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );
      default:
        return (
          <div className="flex-1 shrink gap-2.5 self-stretch p-2.5 mt-2 rounded-lg border border-solid border-slate-500 border-opacity-80 size-full text-neutral-900">
            {value}
          </div>
        );
    }
  };

  return (
    <div
      className={`flex flex-col grow shrink ${
        type === "input" ? "min-h-[91px]" : "h-[91px]"
      } min-w-[240px] ${type === "rating" ? "w-[131px]" : "w-[237px]"}`}
    >
      <div className="text-neutral-900 text-opacity-50">{label}</div>
      {renderValue()}
    </div>
  );
}

function EditableDetail({ title, value, onChange }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
      />
    </div>
  );
}
