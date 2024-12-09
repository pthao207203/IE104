import * as React from "react";
import { useNavigate } from "react-router-dom";
import { logoutController } from "../../controllers/auth.controller";

function TaskBarItem({ text, onClick }) {
  return (
    <button className="flex items-center text-left first-letter:justify-start px-3 py-4 w-full"
      onClick={onClick} // Gọi hàm onClick khi nhấn vào button
      tabIndex="0"
    >
      {text}
    </button>
  );
}

function TaskBar() {
  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    logoutController(navigate);
    alert("Đã đăng xuất thành công!");
  };
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const handleProfileNavigation = () => {
    navigate("/user/profile"); // Điều hướng đến trang profile
  };
  const menuItems = [
    { text: "Thông báo" },
    { text: "Thông tin học viên", onClick: handleProfileNavigation },
    { text: "Đăng xuất", onClick: handleLogout }
  ];

  return (
    <div className="flex flex-col px-4 py-3 justify-center text-xl leading-none text-white bg-gradient-to-b from-[#131313]/90 via-[#1B1B1B]/90 to-[#403F3F]/90 backdrop-blur-[20px]">
      {menuItems.map((item, index) => (
        <div
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)") // Hiệu ứng hover
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0, 0, 0, 0)") // Reset khi rời chuột
          }>
          <TaskBarItem key={index} text={item.text} onClick={item.onClick} />
        </div>
      ))}
    </div>
  );
}

export default TaskBar;