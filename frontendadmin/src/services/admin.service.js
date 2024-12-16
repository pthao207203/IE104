// [GET] /
export const adminService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const adminCreateService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/create`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const adminCreatePostService = async (personalInfo) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/create`, {
      method: "POST",
      body: JSON.stringify(personalInfo),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/admin`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

// [GET] /
export const adminDetailService = async (AdminID) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/admin/detail/${AdminID}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};