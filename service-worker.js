// Service worker tối giản — chỉ để trình duyệt (Chrome) công nhận đây là 1 "app" hợp lệ,
// cho phép cài đặt thật sự (Install) thay vì chỉ tạo lối tắt mở trong tab trình duyệt.
// Không cache offline gì cả — mọi yêu cầu vẫn lấy trực tiếp từ mạng như bình thường.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
