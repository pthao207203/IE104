import * as React from "react";
import StatCard from "./components/StatCard";
import CourseTableRow from "./components/CourseTableRow";
import SideBar from "../../layouts/private/SideBar";

const stats = [
  {
    title: "Doanh thu",
    value: "36852",
    percentage: "Tăng 60%",
    iconSrc: "./icons/chart.svg",
  },
  {
    title: "Lợi nhuận",
    value: "36852",
    percentage: "Tăng 60%",
    iconSrc: "./icons/dollar.svg",
  },
  {
    title: "Chi phí quảng cáo",
    value: "36852",
    percentage: "Tăng 60%",
    iconSrc: "./icons/bag.svg",
  },
];

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/674c7cd34777f9081439f55541fe4336160fdbe2e282fbf7d636adcaced32244?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Trang chủ", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/966245d4b78d767d0a42124be3b2ecb29473b490b88eccb2f1cf941f8300bc39?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Khóa học", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2adfff62d49124471b1ae086903d2cc0ded28104b9c9cb54760bbf7b736c750?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Người dùng", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/629ea57d3530919ce312f6e99a59533a39a5d668552c93df73307fb9dd65556d?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Hóa đơn", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05c10a21e9cc5315abf18aee9eef0356f01b91dadc7f23749db46976a6fea404?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Quản lý", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e74fa8d1b31b1ae33817d779e8e91c5dd858921c22a08d19ea41b7efe50a74f3?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Thông báo", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be22da5d86e3ab15328a6fb2e48221290182260ea988d8b52c655bc8080a663b?placeholderIfAbsent=true&apiKey=ce9d43b270ae41158192dec03af70a1a", label: "Thông tin web", isActive: false }
];

const courses = [
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" },
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" },
  { courseId: "HTML2025", name: "HTML cơ bản", sold: "23", price: "1.000.000", profit: "23.000.000" }
];

function DashboardPage() {
  return (
        <div className="flex flex-col flex-1 bg-indigo-50 overflow-auto">
          {/* Stats Section */}
          <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </section>

            {/* Chart Section */}
            <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Biểu đồ Lợi nhuận */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Lợi nhuận</h3>
                <div className="relative flex flex-col items-start rounded-3xl overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/3e0a62bc5856bf77552e4470477365b61a73866bbbed72188c51ba97d7bcacbc?apiKey=ce9d43b270ae41158192dec03af70a1a&"
                    alt="Profit chart"
                    className="w-full h-[368px] object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                  <div className="relative z-10 flex gap-3 items-center px-4 py-2">
                    <h4 className="text-xl font-medium">Lợi nhuận</h4>
                  </div> */}
                </div>
              </div>

        {/* Biểu đồ Tỉ lệ chuyển đổi */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Tỉ lệ chuyển đổi</h3>
                <div className="relative">
                  <div className="flex flex-wrap gap-3.5 items-center text-sm">
                    <div className="flex items-center">
                      <div className="w-[30px] h-[30px] bg-slate-300 rounded-full"></div>
                      <span className="ml-3">Thoát trang</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-[30px] h-[30px] bg-blue-900 rounded-full"></div>
                      <span className="ml-3">Xem chi tiết</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-[30px] h-[30px] bg-slate-500 rounded-full"></div>
                      <span className="ml-3">Thêm vào giỏ</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-[30px] h-[30px] bg-amber-300 rounded-full"></div>
                      <span className="ml-3">Thanh toán</span>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/ce9d43b270ae41158192dec03af70a1a/5cdf6608090b1674cecf2987b505f0c0b8e003b2f0fe6439247be1b280280be3?apiKey=ce9d43b270ae41158192dec03af70a1a&"
                    alt="Conversion rate chart"
                    className="mt-6 w-full h-[400px] object-contain"
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col mt-7 w-full text-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-900 max-md:max-w-full">
              <header className="flex overflow-hidden flex-wrap w-full rounded-3xl bg-slate-500 min-h-[70px] max-md:max-w-full">
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Mã khóa học</div>
                </div>
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Tên khóa</div>
                </div>
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Đã bán</div>
                </div>
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full text-white whitespace-nowrap basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Giá</div>
                </div>
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-indigo-50 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Lợi nhuận</div>
                </div>
                <div className="flex flex-1 shrink gap-3 justify-center items-center px-3 py-5 h-full bg-amber-300 basis-0 shadow-[-6px_6px_0px_rgba(255,255,255,1)]">
                  <div className="gap-2.5 self-stretch my-auto">Trạng thái</div>
                </div>
              </header>

              {courses.map((course, index) => (
                <CourseTableRow key={index} {...course} />
              ))}

              <button className="flex gap-3 justify-center items-start self-center px-3 py-5 max-w-full bg-indigo-50 rounded-lg mt-[20px] shadow-[-6px_6px_0px_rgba(255,255,255,1)] w-[231px] max-md:mt-10">
                <span className="gap-2.5 self-stretch">Xem tất cả</span>
              </button>
            </section>
          </div>
        );
      }

export default DashboardPage;