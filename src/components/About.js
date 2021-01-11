import React from "react";

export default function About(){
  return <div className="About">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 col-sm-12">
        <div className="Content">
          <div>
            <p className="about-title"><span role="img" aria-label="img">✅</span> 17/10/2020 V1.0.0:</p>
            <p className="about-body">
              <b><span role="img" aria-label="img">🚀</span> Tính năng</b>
              <p className="about-content">
                <p>+ Cập nhật thông tin thời tiết theo thời gian thực 63 tỉnh, thành phố của Việt Nam ( <code>nhiệt độ, tốc độ gió, hướng gió, áp suất không khí, độ ẩm, tầm nhìn, thời gian mặt trời mọc/lặn</code> )</p>
                <p>+ Biểu đồ dự báo thời tiết 5 ngày ( <code>nhiệt độ, tốc độ gió, hướng gió, áp suất không khí, độ ẩm, tầm nhìn</code> )</p>
              </p>
              <b><span role="img" aria-label="img">❎</span> Sửa lỗi</b>: Làm gì có lỗi đâu <span role="img" aria-label="img">😂😂😂</span>
            </p>
          </div>
          <div>
            <p className="about-title"><span role="img" aria-label="img">✅</span> 21/10/2020 V1.1.0:</p>
            <p className="about-body">
              <b><span role="img" aria-label="img">🚀</span> Tính năng</b>
              <p className="about-content">
                <p>+ Tính năng định vị cho phép bạn xem thời tiết tại vị trí hiện tại của bạn 
                  (<code> hãy cho phép trang web sử dụng định vị để mở khóa tính năng này </code>)</p>
              </p>
              <b><span role="img" aria-label="img">❎</span> Sửa lỗi</b>: Vẫn chưa thấy lỗi <span role="img" aria-label="img">😢</span>
            </p>
          </div>
          <div>
            <p className="about-title"><span role="img" aria-label="img">🌐</span> Góp ý:</p>
            <p className="about-body">
              <p className="about-content">
                <p>Facebook: <a href="https://www.facebook.com/namee2810" target="_blank" rel="noopener noreferrer">Đào Nam</a></p>
                <p>Github: <a href="https://github.com/Namee2810" target="_blank" rel="noopener noreferrer">Namee2810</a></p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}