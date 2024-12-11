import React, { useState, useRef, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import { userController, userPostController } from "../../../controllers/user.controller";
import axios from "axios";

function ProfilePage() {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploadImageInputRef = useRef(null);
  const uploadImagePreviewRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
      setSelectedFileName(file); // Lưu tên tệp đã chọn

      if (uploadImagePreviewRef.current) {
        uploadImagePreviewRef.current.src = imageURL;
      }
    }
  };

  // Lấy dữ liệu người dùng từ userController
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await userController();
        setData(result); // Lưu dữ liệu người dùng
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Xử lý cập nhật dữ liệu
  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      let uploadedImageUrl = data?.UserAvatar; // URL ảnh hiện tại (nếu không có ảnh mới)

      // Nếu người dùng đã chọn ảnh mới, tải lên Cloudinary
      if (selectedFileName) {
        console.log(selectedFileName)
        const formData = new FormData();
        formData.append("file", selectedFileName);
        formData.append("upload_preset", "discenda"); // Preset từ Cloudinary

        const response = await axios.post(
          process.env.REACT_APP_CLOUDINARY_URL,
          formData
        );

        uploadedImageUrl = response.data.secure_url; // Lấy URL của ảnh đã tải lên
      }

      // Gửi dữ liệu cập nhật (bao gồm URL ảnh mới) tới backend
      const updatedData = {
        ...formData,
        UserAvatar: uploadedImageUrl, // Thêm URL ảnh vào dữ liệu gửi đi
      };
      console.log("form", updatedData)

      const response = await userPostController(updatedData); // Gửi dữ liệu cập nhật
      if (response.code === 200) {
        alert("Cập nhật thành công!");
        setData(response.updatedData); // Cập nhật lại dữ liệu trên giao diện
        // window.location.reload();
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Cập nhật thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div
      className="flex flex-col w-full min-h-screen"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    >
      <div className="flex relative flex-col max-w-screen max-md:max-w-full">
        <section className="relative z-10 mb-0 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative grow px-0 py-20 w-full bg-white bg-opacity-10 backdrop-blur-[10px] max-md:px-5 max-md:w-full min-h-screen">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(data); // Gửi dữ liệu hiện tại khi submit
                  }}
                  className="flex gap-5 max-md:flex-col"
                >
                  {/* Left Section */}
                  <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col ml-[61px] max-w-[227px] max-h-[220px] aspect-auto text-xl leading-none text-black max-md:mt-10">
                      <img
                        ref={uploadImagePreviewRef}
                        loading="lazy"
                        src={data?.UserAvatar ? data.UserAvatar : "https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/2b926db059289d5c08128dea3316455c4081d26d19035d156f09a2e2fbe1385b?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"}
                        alt="Profile avatar"
                        className="w-full rounded-full aspect-[1.03] text-center justify-center object-cover"
                      />
                      <div className="btn flex gap-2 items-center self-center w-[175px] px-[12px] mt-[33px] bg-white/10 text-white  min-h-[43px] hover:bg-black">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/5110a31b2b6d9408a73c85866d98ee04c0a795e8d44a9e67ee0b4359388dbaea?apiKey=1914b3001bed44e2a53adf842ab19f47&"
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto my-aspect-square w-[30px]"
                        />
                        <label htmlFor="UserAvatar">
                          Tải ảnh lên {/* Hiển thị tên tệp đã chọn hoặc thông báo */}
                        </label>
                        <input
                          type="file"
                          className="form-control-file hidden" // Ẩn input file
                          id="UserAvatar"
                          name="UserAvatar"
                          accept="image/*"
                          ref={uploadImageInputRef}
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className="flex flex-col mr-[162px] w-4/5 max-md:ml-0 max-md:w-full">
                    <ProfileForm
                      data={data}
                      setData={setData}
                      onSubmit={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
