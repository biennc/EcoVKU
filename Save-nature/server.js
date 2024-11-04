// Import express
const express = require("express");
const app = express();

// Đặt cổng server sẽ chạy
const PORT = process.env.PORT || 3000;

// Middleware để phân tích dữ liệu JSON (nếu cần)
app.use(express.json());

// Định nghĩa route đơn giản tại endpoint "/"
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

// Định nghĩa route khác, ví dụ /api
// app.get("/exchange-gift", (req, res) => {
//   // URL của trang ExchangeGift (thay URL này bằng trang thực của bạn)
//   const exchangeGiftURL = "http://localhost:3000/exchange-gift";

//   // Điều hướng đến trang ExchangeGift
//   res.redirect(exchangeGiftURL);
// });

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
