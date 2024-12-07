import React, { useState, useEffect } from "react";
//import SideBar from "./SideBar"; // Import Sidebar
import SearchBar from "./SearchBar"; // Import SearchBar
import CourseCard from "./CourseCard"; // Import CourseCard
import { coursesController } from "../../../controllers/course.controller";
//import TestimonialSection from "./TestimonialSection"; // Import TestimonialSection
//import TeacherSection from "./TeacherSection"; // Import TeacherSection

const courseData = [
  {
    title: "Lập trình Back-end NodeJS",
    duration: "60 tiếng",
    lessons: "30",
    instructor: "Xuyến Nguyễn",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/8f15a66050d966f182827e9f1113ae4fc18e3b782cbd544fe23bda7adbcc99ce?apiKey=1914b3001bed44e2a53adf842ab19f47&",
  },
  {
    title: "Chuyên viên thiết kế đồ họa & web",
    duration: "60 tiếng",
    lessons: "30",
    instructor: "Xuyến Nguyễn",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/8f15a66050d966f182827e9f1113ae4fc18e3b782cbd544fe23bda7adbcc99ce?apiKey=1914b3001bed44e2a53adf842ab19f47&",
  },
];

function CoursePage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await coursesController(setLoading);
      console.log(result)
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
  // console.log("courses => ", data)

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Sidebar */}
      {/*<SideBar />*/}

      {/* Nội dung chính */}
      <main>
        <div className="max-w-full flex flex-col items-center w-full px-5 pt-12 pb-20 bg-white bg-opacity-10 backdrop-blur-[10px]">
          {/* Thanh tìm kiếm */}
          <SearchBar />
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-5 bg-white min-h-[265px]">
            <div className="col-span-full w-full h-full" />
          </div>

          {/* Khu vực chứa các thẻ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-[60px] mt-10 w-full">
            {data && data.length > 0 && data.map((course) => (
              <CourseCard {...course} className="" />
            ))}
          </div>



          {/* Thêm TestimonialSection và TeacherSection 
          <TestimonialSection />
          <TeacherSection />*/}
        </div>
      </main>
    </div>
  );
}

export default CoursePage;
