// Data menu Froralcafe. Ubah harga di sini saja (angka rupiah).
const MENU = [
  { id: "coffee", label: "Coffee", groups: [
    { title: "Coffee Series", items: [
      { name: "Espresso", price: 10000 },
      { name: "Americano", price: 14000 },
      { name: "Latte", price: 15000 },
      { name: "Cappucino", price: 15000 },
      { name: "Spanish Latte", price: 15000 },
      { name: "Hazelnut Latte", price: 15000 },
      { name: "Vanilla Latte", price: 15000 },
      { name: "Gula Aren Latte", price: 15000 },
      { name: "Moccachino Latte", price: 15000 },
      { name: "Kopi Tubruk", price: 10000 },
      { name: "Kopi Susu", price: 12000 },
    ] },
  ] },
  { id: "non-coffee", label: "Non-Coffee", groups: [
    { title: "Classic Series", items: [
      { name: "Choco Latte", price: 12000 },
      { name: "Matcha Latte", price: 12000 },
      { name: "Taro Latte", price: 12000 },
      { name: "Red Velvet Latte", price: 12000 },
      { name: "Thai Tea Latte", price: 12000 },
      { name: "Choco Avocado", price: 14000 },
      { name: "Choco Hazelnut", price: 14000 },
      { name: "Lemon Tea", price: 12000 },
      { name: "Lychee Tea", price: 12000 },
      { name: "Mango Yakult", price: 14000 },
      { name: "Lychee Yakult", price: 14000 },
    ] },
    { title: "Others", items: [
      { name: "Teh Manis", price: 5000 },
      { name: "Teh Tawar", price: 4000 },
      { name: "Air Mineral 600ml", price: 5000 },
      { name: "Air Mineral 300ml", price: 4000 },
    ] },
  ] },
  { id: "food", label: "Food", groups: [
    { title: "Snack Menu", items: [
      { name: "Platters", price: 24000 },
      { name: "Spaghetti Bolognese", price: 15000 },
      { name: "Spaghetti Aglio Olio", price: 15000 },
      { name: "French Fries", price: 10000 },
      { name: "French Fries Sosis", price: 12000 },
      { name: "Onion Ring", price: 10000 },
      { name: "Dimsum", price: 12000 },
      { name: "Roti Bakar", price: 12000 },
      { name: "Pisang Goreng", price: 10000 },
    ] },
  ] },
];
const formatHarga = (n) => n.toLocaleString('id-ID');
