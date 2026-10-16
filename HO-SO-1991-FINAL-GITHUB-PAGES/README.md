# HỒ SƠ 1991 — FINAL

**Bản trình chiếu tương tác một người dẫn** cho phần 3: *Nguyên nhân dẫn đến sự tan rã của Liên Xô và các nước xã hội chủ nghĩa Đông Âu* (MLN131).

## Có gì trong bản final?

- **5 chương, 3 lớp bằng chứng/chương:** nội dung ngắn, dễ đọc trên màn chiếu, ghi chú để người dẫn nói thêm.
- **5 thử thách có cơ chế khác nhau:** nối chuỗi kinh tế, sàng lọc chứng cứ chính trị, ghép diễn biến–hệ quả trong cải tổ, phân bổ ngân sách mô phỏng, và ghép bản đồ nguyên nhân tổng hợp.
- **Không có điểm số, bonus, nhiều người chơi, đăng nhập hay đồng bộ mạng.** Bạn đọc, giải thích, sau đó mới mời lớp trả lời bằng lời nói; bạn thao tác trên màn hình.
- **Ảnh tư liệu lấy từ Wikimedia Commons:** hiển thị trực tuyến kèm ghi nguồn/tác giả/giấy phép. Khi không tải được ảnh, các hình minh họa SVG tự thiết kế hiển thị thay thế, không để khoảng trống.
- **Vận hành trên GitHub Pages** với HTML/CSS/JS thuần. Không cần cài gói phụ thuộc hoặc máy chủ.

## Cấu trúc file

```text
index.html
style.css
app.js
assets/
  berlin.svg
  factory.svg
  politics.svg
  reform.svg
  military.svg
README.md
SOURCES.md
```

## Đưa lên GitHub Pages

1. Vào repository `hcm202group2/ho-so-1991` → tab **Code**.
2. Giải nén ZIP, tải `index.html`, `style.css`, `app.js`, thư mục `assets` và 2 file tài liệu lên **thư mục gốc** của repository; giữ nguyên tên và cấu trúc `assets/`.
3. Nếu trong repository còn `styles.css` của phiên bản cũ, có thể xóa vì bản mới dùng `style.css` (không có `s`). Đặc biệt cần **ghi đè `index.html` và `app.js` cũ**.
4. **Commit changes**.
5. Ở **Settings → Pages** chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi **Save**.
6. Địa chỉ dự kiến: https://hcm202group2.github.io/ho-so-1991/ (chỉ truy cập khi Pages đã triển khai xong).
7. Nếu còn bản cũ do cache, nhấn `Ctrl + Shift + R`.

**Quan trọng:** Không đưa file ZIP chưa giải nén vào repository; không để `index.html` nằm trong thư mục con.

## Cách sử dụng khi trình chiếu

- `→` hoặc `PageDown`: sang bước kế tiếp.
- `←` hoặc `PageUp`: quay lại bước trước.
- `N`: ghi chú người dẫn (đóng bằng `N` hoặc `Esc`).
- `F`: bật/tắt chế độ toàn màn hình.
- `?`: mở hướng dẫn điều khiển.
- Nút `||`: phủ màn hình dừng để bạn đặt câu hỏi thảo luận.
- Thanh 5 chương trên đầu màn hình giúp nhảy đến bất kỳ nội dung nào.
- Nút **Bỏ qua thử thách** để tiếp tục giảng khi không đủ thời gian.

### Nhịp trình chiếu đề xuất

**Chương → 3 lớp bằng chứng → mời lớp thử thách → công bố kết luận → chương kế tiếp.**

Không cần ai dùng điện thoại. Game được thiết kế để trình chiếu trên một máy chiếu / màn hình lớn; dùng chuột hoặc bàn phím của người dẫn.

## Gợi ý thời gian

Một chương: 1,5–3 phút phần trình bày + 0,5–1 phút tương tác. Tổng phần game: khoảng 12–20 phút, tùy tốc độ giảng. Đây là ước tính sử dụng chứ không phải đồng hồ đếm ngược bắt buộc.

## Chỉnh sửa nhanh

- **Nội dung**: trong `app.js`, mảng `chapters` — mỗi phần có `title`, `desc`, `beats` (3 lớp lý thuyết), `challenge` (câu hỏi và phần kết luận).
- **Ảnh tư liệu**: trong `app.js`, đối tượng `photos`. Ảnh Wikimedia Commons cần Internet. Bạn có thể thay bằng ảnh do nhóm sở hữu nếu muốn hoàn toàn offline; khi đó chỉnh hàm `commons` hoặc thuộc tính `src` thành đường dẫn ảnh nội bộ.
- **Màu sắc**: trong `style.css`, nhóm biến `:root` ở đầu file.
- **Ảnh minh họa offline**: chỉnh các file `assets/*.svg` bằng phần mềm vector nếu cần.

## Lưu ý học thuật

Đây là **game minh họa mối liên hệ nhân quả**, không phải mô hình định lượng để chứng minh một quyết định cụ thể chắc chắn cứu được một nhà nước. Màn ngân sách dùng **100 điểm giả định**, không phải ngân sách lịch sử, không có phương án tối ưu được khẳng định. Khi giảng nên phân biệt các bằng chứng lịch sử, cách diễn giải và mô phỏng sư phạm.

Nguồn và quyền sử dụng ảnh có trong `SOURCES.md`; tất cả ảnh được liên kết nguồn trong giao diện.
