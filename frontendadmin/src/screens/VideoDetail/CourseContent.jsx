import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CourseHeader } from "./CourseHeader";
import { NavigationBreadcrumb } from "./NavigationBreadcrumb";
import { VideoSection } from "./VideoSection";
import { videoDetailController } from "../../controllers/lesson.controller";

import Loading from "../../components/Loading";

export default function CourseContent() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { VideoID } = useParams();

  const onClick = () => {
    navigate(`/courses/lesson/video/edit/${VideoID}`)
  }

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await videoDetailController(setLoading, VideoID);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else
    return (
        <section className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full overflow-hidden">
          <div className="flex flex-col pb-16 w-full max-md:max-w-full h-full">
            <form className="flex flex-wrap gap-10 items-end w-full font-medium leading-none max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink justify-center text-xl basis-0 min-w-[240px] max-md:max-w-full">
                <label htmlFor="lessonName" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                  Tên bài <span className="text-red-600">*</span>
                </label>
                <div className="flex-1 shrink gap-2.5 self-stretch py-3 w-full rounded-lg min-h-[63px] text-neutral-900 max-md:max-w-full">
                  {data?.VideoName}
                </div>
              </div>
              <div className="flex gap-2.5 items-end text-xl text-white min-w-[240px]">
                <button onClick={onClick} type="submit" className="flex gap-3 justify-center items-center px-3 py-3 rounded-lg bg-[#6C8299]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c84cc0d21b5241ee40d83334bf9289f4fc6a242a7bb8a736e90effdbd86720?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="gap-2.5 self-stretch my-auto">Chỉnh sửa</span>
                </button>
                <button type="button" className="flex gap-3 justify-center items-center px-3 py-3 bg-[#DF322B] rounded-lg">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/42648122efa6f387983f11efeb38ca614809d3a449f7a41f54d965ae2b480b89?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="gap-2.5 self-stretch my-auto">Xóa</span>
                </button>
              </div>
            </form>
            <div className="flex flex-col flex-1 shrink justify-center text-xl basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="lessonName" className="text-neutral-900 text-opacity-50 max-md:max-w-full">
                Mô tả <span className="text-red-600">*</span>
              </label>
              <div className="flex-1 shrink gap-2.5 self-stretch py-3 w-full rounded-lg min-h-[63px] text-neutral-900 max-md:max-w-full">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: data?.VideoDescription }}
                ></div>
              </div>
            </div>
            <VideoSection video={data} />
          </div>
        </section>
    );
}