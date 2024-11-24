// [POST] /auth/login
export const loginService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Đăng nhập thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

// [POST] /auth/register
export const registerService = async (data) => {
  try {
    const response = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Đăng ký thất bại');
    }
    console.log(response);

    const responseData = await response.json();

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};
