import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import CourseTableRow from "./components/CourseTableRow";

import uploadImage from "../../../components/UploadImage"
import { adminDetailController } from "../../../controllers/admin.controller";

import Loading from "../../../components/Loading";

const courseData = [
  {
    category: "HTML",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động",
  },
  {
    category: "HTML",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Tạm dừng",
  },
  {
    category: "HTML",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động",
  },
  {
    category: "HTML",
    name: "HTML cơ bản",
    sold: "23",
    price: "1.000.000",
    profit: "23.000.000",
    status: "Hoạt động",
  },
];

function InstructorProfile() {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);


  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      // setImageSrc(imageURL);
      setSelectedFileName(file); // Lưu tên tệp đã chọn

      if (uploadImagePreviewRef.current) {
        uploadImagePreviewRef.current.src = imageURL;
      }
    }
  };

  const { AdminID } = useParams();

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      setLoading(true)
      const result = await adminDetailController(setLoading, AdminID);
      setLoading(false)
      // console.log(result)
      if (result) {
        setSelectedFileName(result.AdminAvatar)
        setImageUrl(result.AdminAvatar)
        setData(result)
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    let uploadedImageUrl = data.BannerPicture;
    // Upload ảnh nếu người dùng đã chọn
    if (selectedFileName) {
      uploadedImageUrl = await uploadImage(selectedFileName);;
      console.log("Uploaded Image URL:", uploadedImageUrl);
    }
    const updatedData = {
      ...data,
      CoursePicture: uploadedImageUrl,
    };

    console.log("Data sent to ActionButton:", updatedData);
    setData(updatedData)
    return updatedData;
  };

  if (loading) {
    return <Loading />;
  }
  console.log("coursedetail => ", data)

  // Hàm cập nhật dữ liệu khi người dùng nhập vào
  const handleChange = (e) => {
    // Kiểm tra nếu e.target tồn tại (dành cho input và select)
    if (e?.target) {
      const { id, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [id]: value, // Cập nhật theo id của input
      }));
    } else if (e) {
      // Nếu không có e.target (TinyMCE)
      setData((prevData) => ({
        ...prevData,
        [e.id]: e.getContent(), // Lấy nội dung từ TinyMCE và cập nhật theo id
      }));
    }
  };

  const handleToggle = () => {
    setData((prevData) => ({
      ...prevData,
      CourseStatus:
        prevData.CourseStatus === 1 ? 0 : 1,
    }));
  };

  const lessonChange = (lessonID, event) => {
    const newLessonName = event.target.value; // Lấy giá trị từ input
    setData((prevData) => {
      const updatedLessons = prevData.lesson.map((chapter) =>
        chapter._id === lessonID
          ? { ...chapter, LessonName: newLessonName, change: 1 }
          : chapter
      );
      return { ...prevData, lesson: updatedLessons }; // Sử dụng 'lesson' thay vì 'lessons'
    });
  };
  return (
    <div className="flex overflow-hidden flex-col px-16 py-16 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        {/* Thông tin giảng viên */}
        <div className="flex flex-wrap flex-1 shrink gap-4 items-center basis-0 min-w-[240px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f4c77a7cd8d0d6938085c2329962000d9898f65d43cbc645023d10de84cf689?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
            alt="Instructor profile"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[119px]"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-2xl font-semibold text-neutral-900">
              {data?.AdminFullName}
            </div>
            <div className="mt-3 text-lg font-medium text-neutral-900 text-opacity-50">
              {data?.AdminEmail}
            </div>
          </div>
        </div>
        {/* Nút hành động */}
        <div className="flex gap-2.5 items-center text-xl font-medium leading-none text-white min-w-[240px]">
          <button className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto rounded-lg bg-slate-500 min-h-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84fdfd4c4d34c64c558acb40d245b2d594b0b0f000c7b4c1dd0353682f135f9d?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
          </button>
          <button className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto whitespace-nowrap bg-red-600 rounded-lg min-h-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a71fd8008a53a09d7a877aea83770214d261a5f742c728f7c5a0a06accb635?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Chặn</span>
          </button>
        </div>
      </div>

      {/* Thông tin cá nhân */}
      <PersonalInfo
        name="Võ Tấn Khoa"
        email="khoavt@uit.edu.vn"
        phone="0987654321"
        position="Giảng viên"
        status="Đang hoạt động"
      />

      {/* Tiêu đề Khóa học */}
      <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <div className="font-semibold">Khóa học giảng viên</div>
          <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
            Tổng số khóa học: 100
          </div>
        </div>

        {/* Header Table */}
        <div className="flex overflow-hidden flex-wrap w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Danh mục</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Tên khóa</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Đã bán</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Giá</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Lợi nhuận</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Trạng thái</span>
          </div>
        </div>

        {/* Dữ liệu Table */}
        <div className="flex overflow-hidden flex-wrap w-full rounded-b-3xl bg-white min-h-[70px] max-md:max-w-full">
          {courseData.map((course, index) => (
            <CourseTableRow
              key={index}
              category={course.category}
              name={course.name}
              sold={course.sold}
              price={course.price}
              profit={course.profit}
              status={course.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;