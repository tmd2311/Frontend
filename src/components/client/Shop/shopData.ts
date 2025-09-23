import { Product } from "@/types/product";
const shopData: Product[] = [
  {
    id: "1",
    name: "Havit HV-G69 USB Gamepad",
    description: "Tay cầm chơi game USB tiện lợi",
    brandName: "Havit",
    categoryName: "Gaming Accessories",
    specs: {
      Connectivity: "USB",
      Compatibility: "PC / Laptop",
    },
    price: 59000,
    thumbnailUrl: "/images/products/product-1-bg-1.png",
  },
  {
    id: "2",
    name: "iPhone 14 Plus , 6/128GB",
    description: "Điện thoại iPhone 14 Plus dung lượng 128GB",
    brandName: "Apple",
    categoryName: "Smartphone",
    specs: {
      Display: "6.7 inch OLED",
      Storage: "128GB",
    },
    price: 8990000,
    thumbnailUrl: "/images/products/product-2-bg-1.png",
  },
  {
    id: "3",
    name: "Apple iMac M1 24-inch 2021",
    description: "Máy tính iMac M1 hiệu suất cao",
    brandName: "Apple",
    categoryName: "Laptop & PC",
    specs: {
      CPU: "Apple M1",
      Display: "24 inch Retina 4.5K",
    },
    price: 29000000,
    thumbnailUrl: "/images/products/product-3-bg-1.png",
  },
  {
    id: "4",
    name: "MacBook Air M1 chip, 8/256GB",
    description: "Laptop MacBook Air chip M1",
    brandName: "Apple",
    categoryName: "Laptop & PC",
    specs: {
      CPU: "Apple M1",
      Storage: "256GB SSD",
    },
    price: 22000000,
    thumbnailUrl: "/images/products/product-4-bg-1.png",
  },
  {
    id: "5",
    name: "Apple Watch Ultra",
    description: "Đồng hồ thông minh Apple Watch Ultra",
    brandName: "Apple",
    categoryName: "Smartwatch",
    specs: {
      Display: "AMOLED",
      Connectivity: "Bluetooth / Wi-Fi",
    },
    price: 19900000,
    thumbnailUrl: "/images/products/product-5-bg-1.png",
  },
  {
    id: "6",
    name: "Logitech MX Master 3 Mouse",
    description: "Chuột không dây cao cấp Logitech MX Master 3",
    brandName: "Logitech",
    categoryName: "Accessories",
    specs: {
      Connectivity: "Bluetooth / USB Receiver",
      DPI: "4000",
    },
    price: 2500000,
    thumbnailUrl: "/images/products/product-6-bg-1.png",
  },
  {
    id: "7",
    name: "Apple iPad Air 5th Gen - 64GB",
    description: "Máy tính bảng iPad Air Gen 5",
    brandName: "Apple",
    categoryName: "Tablet",
    specs: {
      Display: "10.9 inch Liquid Retina",
      Storage: "64GB",
    },
    price: 18000000,
    thumbnailUrl: "/images/products/product-7-bg-1.png",
  },
  {
    id: "8",
    name: "Asus RT Dual Band Router",
    description: "Router WiFi băng tần kép tốc độ cao",
    brandName: "Asus",
    categoryName: "Networking",
    specs: {
      Bands: "2.4GHz / 5GHz",
      Ports: "4 LAN, 1 WAN",
    },
    price: 1500000,
    thumbnailUrl: "/images/products/product-8-bg-1.png",
  },
];

export default shopData;
