import { Item } from "@/types/item";

export const items: Item[] = [
  {
    id: "1",
    name: "Produk 1",
    category: "Piping and Tubing",
    description: "Material SS400 , Surface finish trivalent",
    size: [9.5, 6.8, 16],
    photo: [
      "/products/machining/collar(10mm)_2.1.png",
      "/products/machining/collar(10mm)_2.2.png",
      "/products/machining/collar(10mm)_2.3.png"
    ],
  },
  {
    id: "2",
    name: "Produk 2",
    category: "Piping and Tubing",
    description: "Deskripsi produk 2",
    size: [9.5, 6.8, 10],
    photo: [
      "/products/machining/collar(12mm)_3.1.png",
      "/products/machining/collar(12mm)_3.2.png"
    ],
  },
  {
    id: "3",
    name: "Produk 3",
    category: "Piping and Tubing",
    description: "Deskripsi produk 3",
    size: "S",
    photo: ["/products/machining/collar(16mm)_1.1.png"],
  },
  {
    id: "4",
    name: "Produk 4",
    category: "Metal Machining",
    description: "Deskripsi produk 4",
    size: "XL",
    photo: ["/products/machining/produk4.jpg"],
  },
  {
    id: "5",
    name: "Produk 5",
    category: "Assembly",
    description: "Deskripsi produk 5",
    size: "M",
    photo: ["/products/assembly/produk5.jpg"],
  },
];