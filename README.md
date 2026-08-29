# 🌸 Gửi Em Yêu - Website Cheer-up & Lời Mời Đi Hà Nội (25 - 28/09)

Một trang web tương tác cực kỳ đáng yêu và tinh tế dành riêng để dỗ dành người yêu khi tâm trạng không tốt và mời cô ấy đi vi vu Hà Nội (25 - 28/09), với cơ chế nút **"No" tự động né tránh (không bao giờ bấm được)** và nút **"YES" ngày càng to ra**, cùng tầng bí mật **"We eat us"**! 🎉

---

## ✨ Tính Năng Nổi Bật

1. **🌸 Virtual Care Package (Nạp Năng Lượng & Dỗ Dành)**:
   - Thanh nạp năng lượng tương tác tăng dần từ 25% lên 100%.
   - Cốc trà gừng mật ong ấm áp 🍵
   - Cái ôm 3000% ấm áp 🫂
   - Vitamin Nụ Cười phát ngẫu nhiên các lời khen ngọt ngào 💊
   - Xoa đầu & đắp chăn ấm 🧸
2. **🛵 Lời Mời Đi Hà Nội & Nút "No" Siêu Lầy**:
   - Nút "No" tự động nhảy sang vị trí khác khi rê chuột gần hoặc chạm vào trên điện thoại.
   - Mỗi lần né tránh, nút "YES" sẽ to dần lên và câu thoại trêu chọc đổi liên tục!
   - Không thể bấm nút "No" dù dùng máy tính hay điện thoại.
3. **🎫 Vé Boarding Pass Hẹn Hò Hà Nội (25 - 28/09)**:
   - Pháo hoa giấy Confetti rực rỡ khi bấm YES!
   - Thẻ Boarding Pass tình yêu với danh sách các món ăn & cùng nhau đi bộ dạo quanh phố cổ, Hồ Tây...
4. **🌙 Tầng Bí Mật: "WE EAT US" (In-Room Date & Chill)**:
   - Chế độ riêng tư trong phòng: Netflix & chill trong chăn ấm, vài lon bia mát lạnh tâm sự, và rồi *"We eat us"* 🕯️✨.
5. **🎵 Tích hợp âm thanh Web Audio API & song ngữ**:
   - Hiệu ứng âm thanh sinh động bằng Web Audio API (không phụ thuộc file ngoài).
   - Nút đổi ngôn ngữ Tiếng Việt 🇻🇳 / English 🇬🇧 nhanh chóng.

---

## 🚀 Hướng Dẫn Đưa Lên GitHub Pages (Host Miễn Phí Trong 2 Phút)

### Đẩy code từ thư mục này lên GitHub:

1. Mở Terminal trong thư mục `hanoi-invitation`:
```bash
cd /Users/taicai/Documents/personal/hanoi-invitation
git add .
git commit -m "feat: complete cheer up and hanoi invitation website"
```

2. Tạo một repository mới trên GitHub (ví dụ tên là `for-her` hoặc `hanoi-trip`).
3. Liên kết và đẩy code lên:
```bash
git branch -M main
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/TÊN_REPO.git
git push -u origin main
```

4. Kích hoạt GitHub Pages:
   - Vào GitHub Repository của bạn > **Settings** > **Pages** (menu bên trái).
   - Tại mục **Build and deployment** > **Source**, chọn **Deploy from a branch**.
   - Chọn nhánh **main** và thư mục **/ (root)** > Bấm **Save**.
   - Sau ~1 phút, link website của bạn sẽ sẵn sàng:  
     `https://TÊN_GITHUB_CỦA_BẠN.github.io/TÊN_REPO/`

---

## ⚙️ Cách Tùy Chỉnh Tên & Nội Dung

Bạn có thể mở file `script.js` và chỉnh sửa ngay phần đầu:

```javascript
const CONFIG = {
  girlfriendNameVI: "Cô bé đáng yêu nhất 🌸", // Đổi thành tên / biệt danh của bạn gái
  yourNameVI: "Anh người yêu đẹp trai 🤵‍♂️",        // Đổi thành tên bạn
};
```
