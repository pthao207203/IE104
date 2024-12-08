import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { headerController } from "../../controllers/home.controller"

export default function Header({ setHeaderHeight, handleTaskBarToggle }) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Theo dõi URL hiện tại
  const [openDetails, setOpenDetails] = useState(false);

  const toggleTaskBar = () => {
    setOpenDetails(!openDetails); // Đảo trạng thái openDetails
    handleTaskBarToggle();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  let [data, setData] = useState(
    {
      category: [],
      setting: [],
    }
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await headerController(setLoading);
      // console.log("result", result)
      setData(result);
    }

    fetchData();
  }, []);

  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight); // Truyền chiều cao của header qua props
    }
  }, [headerRef, setHeaderHeight]);

  useEffect(() => {
    const currentPath = location.pathname;

    // Cập nhật `activeLink` dựa trên URL
    if (currentPath === "/courses" || currentPath.startsWith("/category/")) {
      setActiveLink(currentPath);
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);


  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  // console.log("category ", data.category)
  // console.log("setting ", data.setting)

  return (
    <header
      ref={headerRef}
      className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed fixed top-0 left-0 w-full z-50 backdrop-blur-[40px] "
    >
      <div className="flex gap-3 items-center justify-between px-[60px] py-3 text-white">
        <div className="text-6xl uppercase font-['Squada One']">
          <img src={data?.setting?.WebsiteLogoUser} alt={data?.setting?.WebsiteName} />
          {/* <h1 className="gap-2.5 self-stretch my-auto max-md:text-4xl">Distenda</h1> */}
        </div>

        {/* Navigation và Button */}
        <div className="flex flex-1 items-center justify-between gap-6">
          {/* Navigation */}
          <nav className="flex gap-[30px] ml-auto items-center text-xl font-semibold text-center max-md:text-lg overflow-x-auto scrollbar-hide" style={{ whiteSpace: "nowrap" }}>
            <Link
              to="/courses"
              className={`flex-1 px-3 py-3 ${activeLink === "/courses" ? "bg-[#CFF500] text-black" : ""
                }`}
              onClick={() => handleLinkClick("/courses")}
            >
              Trang chủ
            </Link>
            {data.category.map((cate) => (
              <Link
                key={cate.CategorySlug}
                to={`/category/${cate.CategorySlug}`}
                className={`flex-1 px-3 py-3 ${activeLink === `/category/${cate.CategorySlug}` ? "bg-[#CFF500] text-black" : ""
                  }`}
                onClick={() => handleLinkClick(`/category/${cate.CategorySlug}`)}
              >
                {cate.CategoryName}
              </Link>
            ))}
          </nav>

          {/* Button */}
          <button
            className="flex flex-row items-center gap-2"
            onClick={toggleTaskBar}
          >
            <img
              loading="lazy"
              src={data.setting.user?.UserAvatar ? data.setting.user.UserAvatar : "https://cdn.builder.io/api/v1/image/assets/9c7992bcbe164b8dad4f2629b8fc1688/2b926db059289d5c08128dea3316455c4081d26d19035d156f09a2e2fbe1385b?apiKey=9c7992bcbe164b8dad4f2629b8fc1688&"}
              alt=""
              className="object-cover shrink-0 w-14 rounded-full aspect-square"
            />
            <img
              loading="lazy"
              src={`../Icon/${openDetails ? "tam_giac2" : "tam_giac"}.svg`}
              alt=""
              className="object-center shrink-0 w-[15px] aspect-[2.14]"
            />
          </button>
        </div>
      </div>
    </header>

  );
}
