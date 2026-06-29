export default function Card({ products = [] }) {
  const defaultProducts = [
    { name: "Smartphone Samsung Galaxy A55 5G 8/256GB", image: "/categories/elektronik.png", price: 4599000, discount: "Hemat s.d 10% Pakai Bonus", rating: 4.8, sold: 234, shop: "SAMSUNG OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Laptop ASUS VivoBook 14 Intel Core i5 16GB 512GB SSD", image: "/categories/komputer.png", price: 8999000, discount: "Hemat s.d 15% Pakai Bonus", rating: 4.7, sold: 89, shop: "ASUS STORE ID", isOfficial: true, badge: "7.7" },
    { name: "iPhone 15 Pro Max 256GB Natural Titanium Original", image: "/categories/handphone.png", price: 21499000, discount: "Hemat s.d 5% Pakai Bonus", rating: 4.9, sold: 512, shop: "iSTYLE INDONESIA", isOfficial: true, badge: "7.7" },
    { name: "Kemeja Pria Slim Fit Oxford Premium Anti Kusut", image: "/categories/pakaian-pria.png", price: 189000, discount: "Hemat s.d 20% Pakai Bonus", rating: 4.6, sold: 1203, shop: "ERIGO OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Sepatu Pria Running Nike Air Max 270 Original", image: "/categories/sepatu-pria.png", price: 1499000, discount: "Hemat s.d 12% Pakai Bonus", rating: 4.8, sold: 347, shop: "NIKE INDONESIA", isOfficial: true, badge: "7.7" },
    { name: "Tas Ransel Pria Anti Air Laptop 15 inch Premium", image: "/categories/tas-pria.png", price: 349000, discount: "Hemat s.d 8% Pakai Bonus", rating: 4.5, sold: 678, shop: "BODYPACK OFFICIAL", isOfficial: false, badge: "7.7" },
    { name: "Jam Tangan Pria Casio G-Shock Original GA-2100", image: "/categories/jam-tangan.png", price: 1250000, discount: "Hemat s.d 10% Pakai Bonus", rating: 4.9, sold: 445, shop: "CASIO CENTER", isOfficial: true, badge: "7.7" },
    { name: "Gelang Emas 24K Aksesoris Fashion Wanita Premium", image: "/categories/aksesoris.png", price: 2100000, discount: "Hemat s.d 7% Pakai Bonus", rating: 4.7, sold: 92, shop: "GOLD FASHION", isOfficial: false, badge: "7.7" },
    { name: "Vitamin C 1000mg Suplemen Imun Tubuh 30 Tablet", image: "/categories/kesehatan.png", price: 89000, discount: "Hemat s.d 18% Pakai Bonus", rating: 4.8, sold: 5621, shop: "KIMIA FARMA", isOfficial: true, badge: "7.7" },
    { name: "Gundam RG 1/144 Strike Freedom Full Burst Mode", image: "/categories/hobi.png", price: 750000, discount: "Hemat s.d 6% Pakai Bonus", rating: 4.9, sold: 133, shop: "BANDAI OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Rendang Daging Sapi Minang Asli Kemasan 250gr", image: "/categories/makanan.jpeg", price: 75000, discount: "Hemat s.d 5% Pakai Bonus", rating: 4.9, sold: 3201, shop: "RENDANG MAMA", isOfficial: false, badge: "7.7" },
    { name: "Skintific 5X Ceramide Barrier Repair Moisturizer 40g", image: "/categories/kecantikan.png", price: 149000, discount: "Hemat s.d 25% Pakai Bonus", rating: 4.8, sold: 8923, shop: "SKINTIFIC OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Kursi Gaming Ergonomis RGB Lumbar Support Adjustable", image: "/categories/rumah.png", price: 1899000, discount: "Hemat s.d 10% Pakai Bonus", rating: 4.6, sold: 211, shop: "REXUS OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Dress Wanita Korean Style Casual Floral Midi Dress", image: "/categories/pakaian-wanita.png", price: 159000, discount: "Hemat s.d 30% Pakai Bonus", rating: 4.7, sold: 2341, shop: "FASHION KOREA ID", isOfficial: false, badge: "7.7" },
    { name: "Gamis Wanita Syari Premium Bahan Wolfis Polos", image: "/categories/pakaian-muslim.png", price: 229000, discount: "Hemat s.d 15% Pakai Bonus", rating: 4.8, sold: 1876, shop: "RABBANI OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Baju Bayi Newborn Set 3in1 Cotton Premium Motif Lucu", image: "/categories/pakaian-anak.png", price: 95000, discount: "Hemat s.d 20% Pakai Bonus", rating: 4.9, sold: 4102, shop: "MOTHERCARE ID", isOfficial: true, badge: "7.7" },
    { name: "Sepatu Lari Wanita Adidas Ultraboost 22 Original", image: "/categories/sepatu-wanita.png", price: 2199000, discount: "Hemat s.d 12% Pakai Bonus", rating: 4.8, sold: 567, shop: "ADIDAS OFFICIAL", isOfficial: true, badge: "7.7" },
    { name: "Dumbbell Set 20kg Adjustable Barbel Gym Fitness", image: "/categories/olahraga.png", price: 399000, discount: "Hemat s.d 8% Pakai Bonus", rating: 4.7, sold: 892, shop: "SPORTS STATION", isOfficial: false, badge: "7.7" },
    { name: "Tas Wanita Mini Shoulder Bag Kulit PU Branded Style", image: "/categories/tas-wanita.png", price: 289000, discount: "Hemat s.d 15% Pakai Bonus", rating: 4.6, sold: 1543, shop: "BAGS CORNER", isOfficial: false, badge: "7.7" },
    { name: "Oli Mesin Motor Pertamina Enduro 4T Racing 800ml", image: "/categories/otomotif.png", price: 65000, discount: "Hemat s.d 5% Pakai Bonus", rating: 4.8, sold: 7234, shop: "PERTAMINA OFFICIAL", isOfficial: true, badge: "7.7" },
  ];

  const items = products.length > 0 ? products : defaultProducts;

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[10px] overflow-hidden w-[190px] cursor-pointer hover:shadow-lg transition duration-300 border border-gray-100"
        >
          {/* IMAGE */}
          <div className="bg-gray-50 h-[180px] flex items-center justify-center relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain p-2"
            />
            {item.badge && (
              <div className="absolute bottom-0 left-0 flex items-center gap-1 bg-gradient-to-r from-red-600 to-orange-500 text-white px-2 py-1 rounded-tr-lg">
                <div className="leading-tight">
                  <p className="text-[9px] opacity-90">Promo</p>
                  <p className="text-[9px] opacity-90">Guncang</p>
                </div>
                <span className="text-[15px] font-bold">{item.badge}</span>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-[10px]">
            <p className="text-[13px] text-gray-800 leading-snug line-clamp-2 mb-[6px]">
              {item.name}
            </p>
            <p className="text-[15px] font-semibold text-gray-900 mb-[2px]">
              {formatPrice(item.price)}
            </p>
            {item.discount && (
              <p className="text-[11px] text-red-500 font-medium mb-[6px]">
                {item.discount}
              </p>
            )}
            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-[6px]">
              <span className="text-yellow-400 text-xs">★</span>
              <span>{item.rating.toFixed(1)}</span>
              <span className="text-gray-300">•</span>
              <span>{item.sold} terjual</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              {item.isOfficial && (
                <span className="inline-flex items-center gap-[3px] bg-blue-50 text-blue-600 rounded px-[5px] py-[1px] text-[10px] font-medium">
                  ✓ Official
                </span>
              )}
              <span className="truncate">{item.shop}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}