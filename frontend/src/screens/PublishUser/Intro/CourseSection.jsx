import React from 'react';
import { Link } from 'react-router-dom';

const courseData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/461185e564abbcabe8a565059033a7552c836cf7cb34770a13288b29d066bd97?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Chuyên viên thiết kế đồ họa & web",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c651f8125d452ea0ce349f8384ba92e10e9e5bef8132e1ed0c250cedc6db7aad?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Data Analytics Certificate",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67414f9ed8f8cc3493bc4c1224dcb669d2f25a151de0cbc054bcac953e0fc938?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Ứng dụng CNTT cơ bản",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a2201ab1d3aaacd3deca64ad983d89b0e4fdf05fd7343080effcb0fcae1cdbb?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Kỹ thuật viên Thiết kế Hệ thống nhận dạng thương hiệu",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa36daa023884cf26fc4cea6c317cf3450d2e378b07667aa8deb23f7a382bf8?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Thiết kế Giao diện Website toàn phần (Layout UX/UI với Figma + HTML, CSS, JQuery)",
    duration: "120 tiếng",
    price: "10.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a292b824d8123307dceca7e5c4b6fce18ef4410b70cf756b94dd1afec8a209?placeholderIfAbsent=true&apiKey=e677dfd035d54dfb9bce1976069f6b0e",
    title: "Trực quan hóa dữ liệu - Data Visualization",
    duration: "120 tiếng",
    price: "10.000.000"
  }
];

function CourseCard({ image, title, duration, price }) {
  return (
    <div className="flex shrink flex-wrap grow gap-[24px] justify-center items-center self-stretch px-[16px] py-[16px] bg-white bg-opacity-10 backdrop-blur-[10px] h-full-[203px] min-w-[347px] max-md:max-w-full ">
      <img loading="lazy" src={image} alt={title} className="object-contain shrink-0  self-stretch my-auto aspect-[1.14] w-[195px] h-[171px]" />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0  min-w-[240px] w-[348px] h-full-[183px]">
        <h3 className="flex items-start text-[28px] font-semibold leading-7 text-white h-[100px]">
          <div className="line-clamp-2">
            {title}
          </div>
        </h3>
        <div className="flex flex-col items-start w-full font-medium leading-none">
          <p className="flex mb-[12px] items-center max-w-full text-[20px] font-medium text-white w-[351px] ">
            Thời gian: {duration}
          </p>
          <p className="flex items-center max-w-full h-5 text-[32px] text-[#CFF500]  whitespace-nowrap w-[351px]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}


function CourseSection() {
  return ( 
<section className="relative flex overflow-hidden justify-self-center flex-col  bg-none max-md:max-w-full">

  <div className="items-center text-left text-white text-[20px] font-medium py-[20px] px-[12px] mb-[8px]">
    Đề xuất
  </div>
  <div className="flex flex-wrap justify-center gap-[50px] mb-[55px] mx-[50px] ">
    {courseData.map((course, index) => (
      <CourseCard key={index} {...course} />
    ))}
  </div>
  <Link to='/courses'
    className="flex justify-center items-center self-center w-[331px] h-[60px] px-[20px] py-[20px] mb-[16px] text-[20px] font-semibold leading-none text-black bg-[#CFF500]">
    Xem tất cả
  </Link>
</section>
  );
}


export default CourseSection;