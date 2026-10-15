# HỒ SƠ 1991 – Game thuyết trình MLN131

Game điều tra lịch sử dùng **HTML + CSS + JavaScript**, chạy trực tiếp trên **GitHub Pages** (không cần cài Node hay server).

## Có gì trong bản này?

- **5 chương lý thuyết**, theo nội dung Phần 3.1–3.5 của nhóm về nguyên nhân tan rã Liên Xô và Đông Âu.
- **5 kiểu thử thách khác nhau:** sắp xếp chuỗi nguyên nhân; tìm chứng cứ; ghép mối liên hệ; phân bổ ngân sách giả lập; nối sơ đồ nhân quả.
- Mỗi thử thách có **3 lần kiểm tra**: đúng ngay được 100 điểm, đúng sau 1 lần sai 65 điểm, đúng sau 2 lần sai 30 điểm, sau 3 lần sai sẽ mở đáp án với 0 điểm.
- Chế độ **trình chiếu lý thuyết** dành cho người thuyết trình.
- Chế độ **điều phối**, nhập điểm thủ công và chọn ngẫu nhiên một người trong số những người đồng hạng cao nhất.
- Giao diện đáp ứng màn hình lớn và điện thoại.

## Cách chạy thử

Mở `index.html` bằng trình duyệt. Không cần cài đặt gì.

## Đăng lên GitHub Pages

1. Tạo repository công khai trên GitHub, ví dụ `ho-so-1991`.
2. Tải lên ba file ở thư mục gốc: `index.html`, `styles.css`, `app.js` (có thể tải cả README).
3. Mở **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`, rồi bấm **Save**.
5. Chờ GitHub cung cấp liên kết `https://TEN-TAI-KHOAN.github.io/ho-so-1991/`. Mở liên kết đó để chơi, sau đó có thể tạo mã QR từ URL thật.

## Dùng trong lớp

- **Máy chiếu:** Mở **Bảng điều phối → Trình chiếu lý thuyết**, chọn chương, thuyết trình nội dung. Mỗi chương có 3 ý giải thích.
- **Người chơi:** Mở website trên điện thoại, nhập tên, chơi đủ 5 hồ sơ.
- **Trao bonus:** Người chơi chụp lại phiếu tổng điểm trên điện thoại. Người dẫn nhập tên và điểm vào bảng điều phối trên máy chiếu; bấm **Công bố người nhận bonus** hoặc **Quay chọn người đồng hạng**.

### Quan trọng: Giới hạn bản tĩnh

GitHub Pages chỉ lưu web tĩnh. **Điểm các điện thoại không tự gửi về máy chiếu**, nên nhập thủ công. Bảng xếp hạng và tiến độ của từng thiết bị được lưu bằng `localStorage` của trình duyệt. Không được dùng phiên bản này như hệ thống thi cử có chống gian lận.

Nếu muốn **cả lớp trả lời đồng thời và điểm tự lên máy chiếu**, cần tích hợp một backend real-time như Firebase hoặc Supabase; việc đó đòi hỏi cấu hình dự án và thông tin dịch vụ của bạn.

## Lưu ý nội dung học thuật

Phần lý thuyết được biên tập từ nội dung nhóm cung cấp (các mục 3.1–3.5). Sơ đồ nguyên nhân và ngân sách là **mô hình giáo dục**, không phải tuyên bố rằng các sự kiện lịch sử chỉ diễn biến theo một chuỗi cố định. Nhu cầu và ngân sách tại nhiệm vụ số 4 là số liệu giả định nhằm minh họa sự đánh đổi nguồn lực, **không phải số liệu lịch sử của Liên Xô**.

## Chỉnh sửa nhanh

- `app.js`: sửa nội dung học và thông điệp trong biến `stages`.
- `styles.css`: màu chủ đạo trong `:root` (`--bg`, `--gold`, `--ivory`).
- `index.html`: tiêu đề tab, thông tin chân trang.
