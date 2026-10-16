# HỒ SƠ 1991 — CINEMATIC EDITION 6.0

Website/game thuyết trình môn MLN131, dành **cho một người dẫn trên máy chiếu**. Không cần tài khoản, máy chủ, đăng nhập hay bảng điểm. **Chỉ 5 câu hỏi**: mỗi chương một câu, chỉ xuất hiện sau khi người dẫn trình bày xong phần kiến thức.

## Bản này sửa những gì?

- Ảnh → dòng ghi nguồn → ô **Trọng tâm** là **ba khu vực DOM độc lập** (không đặt chữ tuyệt đối lên ảnh). Điều này sửa lỗi chồng chữ xảy ra ở V5.
- Chương 1 **đối chiếu hai giai đoạn** và sơ đồ cơ chế kinh tế.
- Chương 2 **bản tin video DW News** (chỉ phát khi bấm), tiếp theo là **bàn phân tích ba tầng nguyên nhân chính trị**.
- Chương 3 **trục thời gian 1985 – 1987/88 – 1990/91** có thể đổi mốc; kèm **tư liệu người dân kể về cải tổ trên PBS**.
- Chương 4 **bản đồ có ba lớp thông tin** về chạy đua vũ trang, khoa học–công nghệ và kinh tế.
- Chương 5 **sơ đồ mạng lưới nguyên nhân** (có thể tập trung vào từng yếu tố), rồi bàn cân tổng hợp.
- Mỗi chương kết thúc bằng **đúng một câu hỏi phân tích**, chọn một lần → hiện giải thích. Năm chương có năm phong cách trình bày màn cuối riêng.
- Có **album 2 ảnh/chương** (tư liệu Wikimedia Commons, tổng 10 mục ảnh; một số hình có thể tái sử dụng). Khi mạng yếu, có minh họa dự phòng để không trống hình.

## Đưa lên GitHub Pages

1. Giải nén file ZIP.
2. Mở repository `hcm202group2/ho-so-1991`.
3. Thay **`index.html` ở thư mục gốc** bằng file đi kèm, sau đó **Commit changes**.
4. Đảm bảo **Settings → Pages → Deploy from a branch → main → /(root)**.
5. Chờ GitHub Pages triển khai, mở `https://hcm202group2.github.io/ho-so-1991/`. Tải lại bằng **Ctrl+Shift+R** nếu còn cache.

File `index.html` **đã nhúng CSS, JavaScript và đồ họa dự phòng**. Các file cũ như `app.js`, `style.css`, `styles.css` không còn được bản này sử dụng (có thể giữ hoặc xóa sau).

## Điều khiển

- `→` hoặc `Space`: chuyển cảnh (trừ khi đang ở câu hỏi chưa trả lời).
- `←`: quay lại.
- `1`–`5`: vào chương tương ứng.
- `N`: ghi chú dành riêng cho người dẫn.
- `F`: bật/tắt toàn màn hình.
- `?`: hướng dẫn.
- Chuột: bấm mốc thời gian, lớp bản đồ, nút tập trung nguyên nhân, mở album và mở video.

Bạn điều khiển tất cả, cả lớp chỉ tương tác bằng cách trả lời khi mở câu hỏi cuối chương. Không có chấm điểm hoặc bonus.

## Video và Internet

- **DW News** (YouTube): *What happened the day the Berlin Wall fell?* — https://www.youtube.com/watch?v=qtsfHc5eZhI. Có nút phát ngay trong game và link mở nguồn. Video **không tự phát**.
- **PBS POV**: *The Beginning of Perestroika* — https://www.pbs.org/video/pov-the-beginning-of-perestroika/. Mở trang gốc bằng một nút riêng; có thể cần Internet và chính sách xem video tại nơi học.

Bạn nên tải trước các video hợp lệ hoặc kiểm tra kết nối mạng lớp học; bản này không tự tải/copy video có bản quyền vào mã nguồn. Có thể chỉ chiếu một đoạn phù hợp, không cần chiếu toàn video.

## Ghi chú kiến thức

Nội dung được chắt lọc từ mục 3.1–3.5 trong bài MLN131 người dùng cung cấp: cơ chế kinh tế, hệ thống chính trị, cải tổ, quốc tế và tương tác các nguyên nhân. Bản đồ/chỉ số minh họa **không phải số liệu lịch sử** và không khẳng định những phản thực lịch sử theo mô hình tính toán.

## Kết quả kiểm thử

Đã chạy kiểm thử tự động bằng Chromium thông qua Playwright ở 1280×720, 1366×768, 1920×1080. Lượt thử cả 22 cảnh không ghi nhận lỗi JS hay khối nội dung chính vượt viền. Đã kiểm tra album ảnh, trục thời gian, thay lớp bản đồ, chuyển focus mạng lưới, 5 câu hỏi và điều khiển modal. Cần kiểm tra thêm ảnh/video trực tuyến trên **mạng và máy dùng để thuyết trình**, vì môi trường kiểm thử có chặn truy cập nguồn ngoài.
