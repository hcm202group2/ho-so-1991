# HỒ SƠ 1991 – BẢN 3.2 ỔN ĐỊNH

Đây là bản đơn-file (chỉ **index.html**) để tránh nhầm lẫn giữa `styles.css` / `style.css` và các bản JavaScript cũ khi tải lên GitHub Pages.

## Cách cập nhật
1. Vào repository `hcm202group2/ho-so-1991`, tab **Code**.
2. Thay file `index.html` hiện tại bằng file `index.html` trong bản cập nhật này. Cách đơn giản: mở file `index.html` trên GitHub, chọn biểu tượng chỉnh sửa, thay nội dung toàn bộ bằng file mới, rồi **Commit changes**; hoặc dùng **Add file > Upload files** để tải lên ghi đè.
3. Chờ GitHub Pages triển khai. Nhấn `Ctrl+Shift+R` trên website nếu trình duyệt vẫn dùng cache.
4. Kiểm tra dòng chân trang **BẢN 3.2 ỔN ĐỊNH**. Nếu không thấy, website đang chạy bản cũ.

Không phải xóa `styles.css`, `style.css`, `app.js` hoặc thư mục `assets` đang có: file HTML mới không dùng chúng. Có thể xóa sau khi xác nhận đã chạy bản mới.

## Các sửa lỗi
- Giữ title/nhãn trong flow khác nhau; biến số thứ tự thành watermark nền, không chiếm chiều cao.
- Điều chỉnh typography, co giãn theo viewport 1280×720 đến 1920×1080.
- Bỏ hiệu ứng nhấp nháy, xoay, trôi lặp vô hạn; chỉ giữ chuyển cảnh ngắn khi bấm.
- Nhúng sẵn toàn bộ 5 hình SVG dự phòng để game vẫn hiện đầy đủ khi không có mạng.
- Không có bonus, bảng điểm hay vòng quay.

### Ghi chú
Ảnh lịch sử từ Wikimedia Commons (nếu tải được) là lớp minh họa bổ sung và vẫn có ghi nguồn. Nếu không tải được ảnh, SVG dự phòng được sử dụng. Trên màn hình quá nhỏ có thể cần cuộn, nhưng chữ không bị che/đè.
