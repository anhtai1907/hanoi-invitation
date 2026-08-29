# 🌸 Gửi Em Yêu - Website Cheer-up & Lời Mời Đi Hà Nội

Một trang web tương tác cực kỳ đáng yêu dành riêng để dỗ dành người yêu khi không khỏe và mời cô ấy đi vi vu Hà Nội, với cơ chế nút **"No" tự động né tránh (không bao giờ bấm được)** và nút **"YES" ngày càng to ra**! 🎉

---

## ✨ Tính Năng Nổi Bật

1. **🌸 Virtual Care Package (Nạp Năng Lượng & Dỗ Dành)**:
   - Thanh hồi máu tương tác tăng dần từ 25% lên 100%.
   - Cốc trà gừng mật ong bốc khói 🍵
   - Cái ôm 3000% ấm áp 🫂
   - Vitamin Nụ Cười phát ngẫu nhiên các lời khen ngọt ngào 💊
   - Xoa đầu & đắp chăn ấm 🧸
2. **🛵 Lời Mời Đi Hà Nội & Nút "No" Siêu Lầy**:
   - Nút "No" tự động nhảy sang vị trí khác khi rê chuột gần hoặc chạm vào trên điện thoại.
   - Mỗi lần né tránh, nút "YES" sẽ to dần lên và câu thoại trêu chọc sẽ đổi liên tục!
   - Không thể bấm nút "No" dù dùng máy tính hay điện thoại.
3. **🎫 Vé Máy Bay / Boarding Pass Hẹn Hò Hà Nội**:
   - Pháo hoa giấy Confetti rực rỡ khi bấm YES!
   - Thẻ Boarding Pass tình yêu với danh sách các món ăn & địa điểm hẹn hò ở Hà Nội (Cà phê trứng Giảng, Phở đêm, Hồ Tây, Kem Tràng Tiền...).
4. **🎵 Tích hợp hiệu ứng âm thanh & song ngữ**:
   - Hiệu ứng âm thanh sinh động bằng Web Audio API (không sợ lỗi link nhạc).
   - Nút đổi ngôn ngữ Tiếng Việt 🇻🇳 / English 🇬🇧 nhanh chóng.

---

## 🚀 Hướng Dẫn Đưa Lên GitHub Pages (Host Miễn Phí Trong 2 Phút)

### Cách 1: Sử dụng Terminal (Nhanh nhất)

1. Mở Terminal trong thư mục này:
```bash
git init
git add .
git commit -m "feat: cheer up & Hanoi invitation website"
```

2. Tạo một repository mới trên GitHub (ví dụ tên là `for-my-love` hoặc `hanoi-trip`).
3. Liên kết và đẩy code lên:
```bash
git branch -M main
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/TÊN_REPO.git
git push -u origin main
```

4. Kích hoạt GitHub Pages:
   - Vào GitHub Repository của bạn > **Settings** > **Pages** (ở menu bên trái).
   - Tại mục **Build and deployment** > **Source**, chọn **Deploy from a branch**.
   - Chọn nhánh **main** và thư mục **/ (root)** > Bấm **Save**.
   - Sau ~1 phút, link website của bạn sẽ có dạng:  
     `https://TÊN_GITHUB_CỦA_BẠN.github.io/TÊN_REPO/`

---

## ⚙️ Cách Tùy Chỉnh Tên & Nội Dung

Bạn có thể mở file `script.js` và chỉnh sửa ngay phần đầu:

```javascript
const CONFIG = {
  girlfriendNameVI: "Cô bé đáng yêu nhất vũ trụ 🌸", // Đổi thành tên / biệt danh của bạn gái
  yourNameVI: "Anh người yêu đẹp trai 🤵‍♂️",        // Đổi thành tên bạn
};
```
